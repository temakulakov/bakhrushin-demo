import React from 'react';
import styles from 'styles/Shop.module.scss';
import {useSelector} from "react-redux";
import {selectShop} from "../../store/slices/shop";
import ShopElement from "./Shop.Element";
import { motion } from "framer-motion";

const Shop = () => {
    const items = useSelector(selectShop);
    const itemsJSX = items.map(item => <ShopElement item={item}/>)
    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <h1>{"Магазин"}</h1>
            <button>{"Перейти в магазин"}</button>
        </div>
        <motion.div className={styles.content} style={{ y: 50, x: '-10%' }}>
            {itemsJSX}
        </motion.div>

        <motion.div className={styles.content} style={{ y: 400,x: '-10%' }}>
            {itemsJSX}
        </motion.div>
    </div>
};

export default Shop;