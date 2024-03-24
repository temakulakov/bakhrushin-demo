import React, {useEffect} from "react";
import styles from "styles/Header.module.scss";
import {AnimatePresence, motion} from "framer-motion";

import BMLogoLeft from "static/icons/BMLogoLeft.svg";
import BMLogoLine from "static/icons/BMLogoLine.svg";
import BMLogoRight from "static/icons/BMLogoRight.svg";
import BMText from "static/icons/BMText.svg";
import account from "static/icons/account.svg"
import search from "static/icons/search.svg"
import eye from "static/icons/eye.svg"

import {INavElemenet} from "../../interfaces";
import {navElemenet} from "../../static/data";
import Panel from "./Panel";
import useScrollPosition from "../../hooks/useScrollPosition";

interface HeaderProps {
    scrolled: boolean
}

const Header = ({scrolled}: HeaderProps) => {
    const [ fullHead, setFullHead ] = React.useState<boolean>(true);
    const [ background, setBackground ] = React.useState<'#8A1635' | 'rgba(138,22,53,0.69)'>('rgba(138,22,53,0.69)');
    const [ selectedMenu, setSelectedMenu ] = React.useState<INavElemenet | null>(null);
    const { scrollY, direction} = useScrollPosition();

    useEffect(() => {
        if (scrolled && direction !== 'UP') {
            setFullHead(false);
            setSelectedMenu(null);
        } else {
            setFullHead(true);
        }

        if (scrolled) {
            setBackground('#8A1635');

        } else {
            setBackground('rgba(138,22,53,0.69)');

        }
    }, [scrollY]);



    return <React.Fragment>
        <motion.div className={styles.header}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}

        >
            <motion.div
                onMouseEnter={() => setFullHead(true)}
                className={styles.head}
                style={fullHead ? {borderRadius: "5px 5px 0 0", backgroundColor: selectedMenu ? '#8A1635' : background} : {borderRadius: "5px", backgroundColor: selectedMenu ? '#8A1635' : background}}>
                <motion.a className={styles.logoWrapper}>
                    <motion.img
                        initial={{opacity: 0, x: 30}}
                        animate={{opacity: 1, x: 0}}
                        src={BMLogoLeft}
                        alt="BMLogoLeft"
                        draggable={false}
                    />
                    <motion.img
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        src={BMLogoLine}
                        alt="BMLogoLine"
                        draggable={false}
                    />
                    <motion.img
                        initial={{opacity: 0, x: -30}}
                        animate={{opacity: 1, x: 0}}
                        src={BMLogoRight}
                        alt="BMLogoRight"
                        draggable={false}
                    />
                    <motion.img
                        className={styles.stylesLogo}
                        initial={{opacity: 0, x: -30}}
                        animate={{opacity: 1, x: 0}}
                        src={BMText}
                        alt="BMText"
                        draggable={false}
                    />
                </motion.a>
                <motion.div
                    className={styles.buttonGroup}>
                    <motion.button>{"Магазин"}</motion.button>
                    <motion.button style={{marginRight: "10px"}}>{"Купить билет"}</motion.button>
                    <motion.img src={account}/>
                    <motion.img src={search}/>
                    <motion.img src={eye}/>

                    <button className={styles.language}>{"РУС"}
                        <svg xmlns="http://www.w3.org/2000/svg" width={"14px"} height={"19px"} fill="none"
                             stroke="currentColor"
                             strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                             viewBox="0 0 24 24">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </button>

                </motion.div>
            </motion.div>
            <AnimatePresence>
                {
                    fullHead && <motion.div className={styles.menu}
                                            initial={{opacity: 1, y: -30}}
                                            animate={{opacity: 1, y: -0.1}}

                                            exit={{opacity: 1, y: -30}}
                                            transition={{type: "tween", duration: 0.2}}
                                            style={{backgroundColor: selectedMenu ? '#8A1635' : background, zIndex: -1}}
                                            onMouseLeave={() => setSelectedMenu(null)}
                    >
                        {
                            navElemenet && navElemenet.map((item, index) => <a
                                onMouseEnter={() => item.subTitle ? setSelectedMenu(item) : setSelectedMenu(null)}
                                key={index}
                                href={"#"}>
                                {item.title}
                                {item.subTitle && <svg  xmlns="http://www.w3.org/2000/svg" width={"14px"} height={"19px"} fill="none" stroke="currentColor"
                                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        viewBox="0 0 24 24">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>}
                            </a>)
                        }
                        <Panel selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} background={background}/>
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    </React.Fragment>
};

export default Header;