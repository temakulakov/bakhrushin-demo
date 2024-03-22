import React, {useState} from 'react';
import styles from "styles/Filials.module.scss";
import {useSelector} from "react-redux";
import {selectFilials} from "../../store/slices/filials";
import {IEntity} from "../../interfaces";
import FilialCard from "./FilialCard";

const types: IEntity[] = [
    {id: 0, title: "Бахрушинский квартал", links: ""},
    {id: 1, title: "Филиалы", links: ""},
];

const Filials = () => {
    const data = useSelector(selectFilials);
    const [ selectType, setSelectType ] = useState<Number>(1)


    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.title}>
                {
                    types.map(type => <h1 key={type.id} style={ type.id === selectType ? { color: "white" } : {}} onClick={() => setSelectType(type.id)}>{type.title}</h1>)
                }
            </div>
            <button>{selectType === 1 ? "Все филиалы" : "Все здания"}</button>

        </div>
        <div className={styles.content}>
            {
                data.filter(filial => filial.type === ( selectType === 1 ? 'filial' : 'quarter')).map(filial => <FilialCard key={filial.id} filial={filial}/>)
            }
        </div>
    </div>
};

export default Filials;