import React from 'react';
import styles from "styles/Card.module.scss";
import {IDuration} from "../../interfaces";
import dayjs from "dayjs";
import {motion} from "framer-motion";

dayjs.locale('ru');

export interface ICardProps {
    duration: IDuration;
    title: string;
    imageUrl: string;
    position: string;
    type?: string;
}

const Card = ({duration, imageUrl, title, position, type}: ICardProps) => {
    const [hover, setHover] = React.useState(false);
    return <motion.div className={styles.wrapper}
                       onMouseEnter={() => setHover(true)}
                       onMouseLeave={() => setHover(false)}
                       animate={{backgroundColor: hover ? "#52565A" : 'white', padding: hover ? "0 15px" : 0, marginRight: hover ? 0 : '30px'}}
    >
        <motion.div
            className={styles.imageWrapper}
        >
            <motion.img
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className={styles.image}
                src={imageUrl}
                width={515}
                height={375}
                alt={title}/>
            {type && <div className={styles.type}/>}
        </motion.div>
        <motion.p animate={{color: hover ? 'white' : '#52565A'}} className={styles.date}>{`${duration.from.format('D MMMM')} - ${duration.to.format('D MMMM')}`}</motion.p>
        <motion.p animate={{color: hover ? 'white' : '#52565A'}} className={styles.title}>{title}</motion.p>

        <motion.p animate={{color: hover ? 'white' : '#52565A'}} className={styles.position}>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="5" r="5" style={{fill: hover ? "#EEEEEF" : 'white'}}/>
                <path d="M5 12L1 8H9L5 12Z"  style={{fill: hover ? "#EEEEEF" : 'white'}}/>
                <circle cx="5" cy="5" r="2"  style={{fill: hover ? "white" : '#EEEEEF'}}/>
            </svg>
            {position}</motion.p>
    </motion.div>
};

export default Card;