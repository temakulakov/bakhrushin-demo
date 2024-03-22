import React from 'react';
import styles from 'styles/Shop.Element.module.scss';
import {IShop} from "../../interfaces";

interface IProps {
    item: IShop;
}

const ShopElement = ({item}: IProps) => {
    return <div className={styles.wrapper}>
        <div>
            <img src={item.imageUrl} alt={item.title}/>
        </div>
        <h2>{item.title}</h2>
        <p>{item.price}₽</p>
    </div>
};

export default ShopElement;