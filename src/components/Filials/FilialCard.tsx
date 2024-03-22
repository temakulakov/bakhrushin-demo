import React, {useEffect, useRef} from 'react';
import styles from "styles/FilialCard.module.scss";
import {IFilials} from "../../interfaces";
import {motion, useInView} from "framer-motion";

interface FilialCardProps {
    filial: IFilials
}



const FilialCard = ({ filial }: FilialCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])

    return <motion.div
        ref={ref}
        style={{backgroundImage: `url('${filial.imageUrl}')`}}
        initial={{ opacity: 1 }} // Начальное состояние анимации
        animate={{ opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateY(-20px)"}} // Конечное состояние анимации
        transition={{ duration: 0.5 }} // Продолжительность анимации
        className={styles.wrapper}
    >
            <motion.div
                className={styles.image}

            >
                <h1>{filial.title}</h1>
                <button>{`Перейти в ${ filial.type === 'quarter' ? 'Здание' : 'Филиал'}`}</button>
            </motion.div>
    </motion.div>
};

export default FilialCard;