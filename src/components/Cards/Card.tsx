import React from 'react';
import styles from "styles/Card.module.scss";
import { IDuration } from "../../interfaces";
import dayjs from "dayjs";
import { motion } from "framer-motion";

dayjs.locale('ru');

export interface ICardProps {
    duration: IDuration;
    title: string;
    imageUrl: string;
    position: string;
    type?: string;
}

const Card = ({duration, imageUrl, title, position, type}: ICardProps) => {
        return <motion.div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.image}
                src={imageUrl}
                width={515}
                height={375}
                alt={title}/>
            {type && <div className={styles.type}/>}
        </div>
        <p className={styles.date}>{`${duration.from.format('D MMMM')} - ${duration.to.format('D MMMM')}`}</p>
        <p className={styles.title}>{title}</p>

        <p className={styles.position}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" fill="#53565A"/>
                <path d="M5 12L1 8H9L5 12Z" fill="#53565A"/>
                <circle cx="5" cy="5" r="2" fill="#EEEEEF"/>
            </svg>
            {position}</p>
    </motion.div>
};

export default Card;