import React, { useState, useCallback } from 'react';
import styles from "styles/Filials.module.scss";
import { useSelector } from "react-redux";
import { selectFilials } from "../../store/slices/filials";
import { IEntity } from "../../interfaces";
// Предполагаем, что FilialCard уже оптимизирован или обернут в React.memo, если это не так, следует добавить оптимизацию
import FilialCard from "./FilialCard";

const types: IEntity[] = [
    { id: 0, title: "Бахрушинский квартал", links: "" },
    { id: 1, title: "Филиалы", links: "" },
];

const Filials = () => {
    const data = useSelector(selectFilials);
    const [selectType, setSelectType] = useState<number>(1);

    // Callback ref для управления слушателями событий
    const scrollContainerRef = useCallback((node: HTMLDivElement) => {
        const handleWheel = (event: WheelEvent) => {
            if (!node) return;
            const isScrollable = node.scrollWidth > node.clientWidth;
            const atLeftEdge = node.scrollLeft === 0;
            const atRightEdge = node.scrollLeft + node.clientWidth === node.scrollWidth;

            if (!isScrollable || (event.deltaY < 0 && atLeftEdge) || (event.deltaY > 0 && atRightEdge)) {
                return;
            }

            event.preventDefault();
            node.scrollLeft += event.deltaY + event.deltaX;
        };

        if (node) {
            node.addEventListener('wheel', handleWheel);
        }

        // Очистка
        return () => {
            if (node) {
                node.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>
                    {types.map(type => (
                        <h1 key={type.id} style={type.id === selectType ? { color: "white" } : {}} onClick={() => setSelectType(type.id)}>
                            {type.title}
                        </h1>
                    ))}
                </div>
                <button>{selectType === 1 ? "Все филиалы" : "Все здания"}</button>
            </div>
            <div className={styles.content} ref={scrollContainerRef}>
                {data.filter(filial => filial.type === (selectType === 1 ? 'filial' : 'quarter')).map(filial => (
                    <FilialCard key={filial.id} filial={filial}/>
                ))}
            </div>
        </div>
    );
};

export default React.memo(Filials); // Используйте React.memo для предотвращения ненужных ререндеров, если пропсы не изменились
