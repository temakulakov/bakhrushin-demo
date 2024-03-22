import React from "react";
import styles from "styles/Footer.module.scss";
import ministerstvo from "static/footer/ministerstvo.svg";
import gosuslugi from "static/footer/gosuslugi.svg";
import cultura from "static/footer/cultura.svg";
import yt from "static/footer/yt.svg";
import rt from "static/footer/rt.svg";
import vk from "static/footer/vk.svg";
import tg from "static/footer/tg.svg";

const data = [
    {
        title: "Посетителям",
        reference: ministerstvo,
        elements: [
            { text: "Здание и час работы", link: "/" },
            { text: "Купить билет", link: "/" },
            { text: "Билеты и льготы", link: "/" },
            { text: "Правила и условия посещения", link: "/" },
            { text: "Кафе и рестораны", link: "/" },
        ]
    },
    {
        title: "О музее",
        reference: gosuslugi,
        elements: [
            { text: "Миссия и история", link: "/" },
            { text: "Руководство", link: "/" },
            { text: "Наука", link: "/" },
            { text: "Пресс-центр", link: "/" },
            { text: "Правовая информация", link: "/" },
            { text: "Контакты", link: "/" },
            { text: "Часто заваемые вопросы", link: "/" },
            { text: "Отзывы", link: "/" },
        ]
    },
    {
        title: "Выставки и события",
        reference: cultura,
        elements: [
            { text: "Выставки", link: "/" },
            { text: "Постоянные экспозиции", link: "/" },
            { text: "События", link: "/" },
            { text: "Экскурсии", link: "/" },
        ]
    },
    {
        title: "",
        reference: [yt, rt, vk, tg], // Массив ссылок
        elements: [
            { text: "Сообщить об ошибке", link: "/" },
            { text: "Использование материалов сайта", link: "/" },
            { text: "Купить изображения", link: "/" },
            { text: "Политика конфиденциальности", link: "/" },
            { text: "Пользовательское соглашение", link: "/" },
            { text: "Противодействие коррупции", link: "/" },
            { text: "Карта сайта", link: "/" },
            { text: "Оценка качества услуг", link: "/" },
        ]
    },
]

const Footer = () => {
    const textJSX = data.map((item, index) => <div key={index} className={styles.block}>
        <div className={styles.text}>
            <h1>{item.title}</h1>
            {
                item.elements.map((element, index) => <a key={index} href={element.link}>{element.text}</a>)
            }
        </div>
        <div className={styles.references}>
            {
                Array.isArray(item.reference) ? item.reference.map((ref, index) => <img key={index} src={ref} alt={item.title} />) : <img src={item.reference} alt={item.title}/>
            }
        </div>
    </div>)

    return <div className={styles.wrapper}>
        <div className={styles.content}>
            {textJSX}
        </div>
    </div>
}
export default Footer;
