import React, { useState, useCallback, useEffect } from 'react';
import styles from 'styles/CardList.module.scss';
import { IEntity } from "../../interfaces";
import classNames from "classnames";
import { useSelector } from "react-redux";
import Card, { ICardProps } from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import { selectEvents } from "../../store/slices/events";
import { selectExhibition } from "../../store/slices/exhibitions";
import { selectExcursion } from "../../store/slices/excursions";
import { selectExposition } from "../../store/slices/exposition";

interface IType extends IEntity {
    // Дополните, если ваш IEntity имеет другие поля
}

const types: IType[] = [
    { id: 0, title: "Выставки", links: "" },
    { id: 1, title: "Экспозиции", links: "" },
    { id: 2, title: "События", links: "" },
    { id: 3, title: "Экскурсии", links: "" },
];

const CardList: React.FC = () => {
    const [list, setList] = useState<IType>(types[1]);
    const [cardsJSX, setCardsJSX] = useState<React.ReactElement<ICardProps>[]>([]);

    const events = useSelector(selectEvents);
    const exhibitions = useSelector(selectExhibition);
    const excursions = useSelector(selectExcursion);
    const expositions = useSelector(selectExposition);

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

    useEffect(() => {
        let items: React.ReactElement<ICardProps>[];
        switch (list.id) {
            case 0:
                items = exhibitions.map((item) => <Card key={item.id} {...item} />);
                break;
            case 1:
                items = expositions.map((item) => <Card key={item.id} {...item} />);
                break;
            case 2:
                items = events.map((item) => <Card key={item.id} {...item} />);
                break;
            case 3:
                items = excursions.map((item) => <Card key={item.id} {...item} />);
                break;
            default:
                items = [];
                break;
        }
        setCardsJSX(items);
    }, [list, exhibitions, expositions, events, excursions]);

    const headerJSX = types.map((type) => (
        <h1
            key={type.id}
            onClick={() => setList(type)}
            className={classNames(styles.titleElement, { [styles.active]: type.id === list.id })}
        >
            {type.title}
        </h1>
    ));

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.wrapper}
        >
            <div className={styles.titleWrapper}>{headerJSX}</div>
            <motion.div
                key={list.id}
                initial={{ opacity: 0, width: "0%" }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ duration: 0.5 }}
                className={styles.cardsWrapper}
                ref={scrollContainerRef} // Используем callback ref здесь
            >
                {cardsJSX}
            </motion.div>
        </motion.div>
    );
};

export default CardList;