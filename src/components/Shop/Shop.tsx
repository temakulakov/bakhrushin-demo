import React from 'react';
import styles from 'styles/Shop.module.scss';
import {useSelector} from "react-redux";
import {selectShop} from "../../store/slices/shop";
import ShopElement from "./Shop.Element";

const Shop = () => {
    const items = useSelector(selectShop);
    const itemsJSX = items.map(item => <ShopElement item={item}/>)
    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <h1>{"Магазин"}</h1>
            <button>{"Перейти в магазин"}</button>
        </div>
        <div className={styles.content}>
            {itemsJSX}
        </div>

        <div className={styles.content}>
            {itemsJSX}
        </div>
    </div>
};

export default Shop;