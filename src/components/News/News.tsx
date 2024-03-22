import React from 'react';
import styles from  'styles/News.module.scss';
import NewsElement from "./News.Element";
import {Col, Row} from "antd";
import {useSelector} from "react-redux";
import store from "../../store/store";
import {selectNews} from "../../store/slices/news";
import NewsElementCompact from "./News.Element.Compact";

const News = () => {
    const news = useSelector(selectNews);
    const newsJSX = news.map(newsItem => newsItem.id < 3 && (newsItem.type === 'compact' ? <NewsElementCompact
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
            date={newsItem.date}
            image={newsItem.imageUrl}
            href={newsItem.links}
            view={newsItem.type}
        /> : <NewsElement
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
            date={newsItem.date}
            image={newsItem.imageUrl}
            href={newsItem.links}
            view={newsItem.type}
        />
    ));


    const newsJSX1 = news.map(newsItem => newsItem.id < 6 && newsItem.id >= 3 && (newsItem.type === 'compact' ? <NewsElementCompact
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
            date={newsItem.date}
            image={newsItem.imageUrl}
            href={newsItem.links}
            view={newsItem.type}
        /> : <NewsElement
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
            date={newsItem.date}
            image={newsItem.imageUrl}
            href={newsItem.links}
            view={newsItem.type}
        />
    ));

    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <h1>{"Новости"}</h1>
            <button>{"Все новости"}</button>
        </div>
        <div className={styles.content}>
            {newsJSX}
        </div>
        <div className={styles.content}>
            {newsJSX1}
        </div>
    </div>
};

export default News;