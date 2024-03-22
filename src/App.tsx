import React from 'react';
import styles from 'styles/App.module.scss';
import CardList from "./components/Cards/CardList";
import Widget from "./components/Widget/Widget";
import News from "./components/News/News";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import Filials from "./components/Filials/Filials";


function App() {
    return (
        <div className={styles.container}>
            <CardList/>
            <Widget/>
            <News/>
            <Widget/>
            <Shop/>
            <Filials/>
            <Footer/>
        </div>
    );
}

export default App;
