import React, { useState } from 'react';
import styles from 'styles/Widget.module.scss';
import { useSelector } from "react-redux";
import { selectWidget } from "../../store/slices/widgets";

const Widget = (props: any) => {
    const slides = useSelector(selectWidget);
    const [currentIndex, setCurrentIndex] = useState(0); // Состояние для текущего индекса

    const sliderJSX = slides.map((slide, index) => (
        <div
            className={styles.slide}
            style={{backgroundColor: slide.backgroundColor}}
            key={slide.id}
        >
            <div>
                <p>{slide.description}</p>
                <div>
                    <h1>{slide.title}</h1>
                    <div className={styles.buttonGroup}>
                        <button >{slide.buttonText}</button>
                        <button onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M-3.49691e-07 7L12 0.0717978L12 13.9282L-3.49691e-07 7Z" fill="#53565A"/>
                            </svg>

                        </button>
                        <button onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}>
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0773 7.01951L0.0596635 13.9171L0.0949643 0.0607533L12.0773 7.01951Z"
                                      fill="#53565A"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <img alt={slide.title} src={slide.imageUrl}/>
        </div>
    ));

    // Использование currentIndex для выбора текущего слайда
    const slide = sliderJSX[currentIndex];

    return <div className={styles.wrapper}>
        {slide}
    </div>;
};

export default Widget;
