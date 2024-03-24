import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IExposition, IFilials} from "../../interfaces";
import dayjs from "dayjs";
import {RootState} from "./index";



const initialState: IFilials[] = [
    { id: 0, title: "Квартал 1", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес квартала 1", links: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
    { id: 1, title: "Квартал 2", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес квартала 2", links: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
    { id: 2, title: "Квартал 3", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес квартала 3", links: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
    { id: 3, title: "Квартал 4", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес квартала 4", links: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
    { id: 4, title: "Квартал 5", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес квартала 5", links: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
    { id: 5, title: "Дом-музей Ермоловой", imageUrl: "https://gctm.ru/img/ermolova.jpg", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес Филиала 6", links: "/", type: "filial", backgroundColor: 'rgb(187, 133, 171)'},
    { id: 6, title: "Музей-квартира мейерхольда", imageUrl: "https://gctm.ru/img/meirhold.jpg", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес Филиала 7", links: "/", type: "filial", backgroundColor: 'rgb(225, 8, 0)'},
    { id: 7, title: "Музей-квартира мироновы-менкареа", imageUrl: "https://gctm.ru/img/mironova.jpg", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес Филиала 8", links: "/", type: "filial", backgroundColor: 'rgb(224, 192, 159)'},
    { id: 8, title: "Филиал 5", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес Филиала 9", links: "/", type: "filial", backgroundColor: 'rgb(255,255,255)'},
    { id: 9, title: "Филиал 5", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес квартала 10", links: "/", type: "filial", backgroundColor: 'rgb(255,255,255)'},
    { id: 10, title: "Квартал 5", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: "https://gctm.ru/img/ermolova_dop.png", position: "Адрес квартала 11", links: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
];

const filialSlice = createSlice({
    name: 'filial',
    initialState,
    reducers: {

    },
});

export const {} = filialSlice.actions;
export default filialSlice.reducer;

export const selectFilials = (state: RootState) => state.filial;
