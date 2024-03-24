import React, {useEffect, useRef, useState} from 'react';
import styles from 'styles/App.module.scss';
import CardList from "./components/Cards/CardList";
import Widget from "./components/Widget/Widget";
import News from "./components/News/News";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import Filials from "./components/Filials/Filials";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";


function App() {

    const bottomRef = useRef<HTMLDivElement>(null);
    const [bottomPosition, setBottomPosition] = useState<number>(0);
    const [ scolled, setScolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (bottomRef.current) {
                const rect = bottomRef.current.getBoundingClientRect();
                const bottomPosition = rect.bottom;
                setBottomPosition(bottomPosition);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (bottomPosition > 100) {
            setScolled(false);
        } else {
            setScolled(true);
        }
    }, [bottomPosition]);

    return (
        <>
            <Header scrolled={scolled}/>
            <Slider reference={bottomRef}/>
            <div className={styles.container}>
                <CardList/>
                <Widget/>
                <News/>
                <Widget/>
                <Shop/>
                <Filials/>
                <Footer/>
            </div></>
    );
}

export default App;
