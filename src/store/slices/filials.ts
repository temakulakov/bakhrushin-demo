import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IExposition, IFilials} from "../../interfaces";
import dayjs from "dayjs";
import {RootState} from "./index";



const initialState: IFilials[] = [
    { id: 0, title: "Квартал 1", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес квартала 1", links: "/", type: "quarter"},
    { id: 1, title: "Квартал 2", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес квартала 2", links: "/", type: "quarter"},
    { id: 2, title: "Квартал 3", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес квартала 3", links: "/", type: "quarter"},
    { id: 3, title: "Квартал 4", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес квартала 4", links: "/", type: "quarter"},
    { id: 4, title: "Квартал 5", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес квартала 5", links: "/", type: "quarter"},
    { id: 5, title: "Филиал 5", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес Филиала 6", links: "/", type: "filial"},
    { id: 6, title: "Филиал 5", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес Филиала 7", links: "/", type: "filial"},
    { id: 7, title: "Филиал 5", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес Филиала 8", links: "/", type: "filial"},
    { id: 8, title: "Филиал 5", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес Филиала 9", links: "/", type: "filial"},
    { id: 9, title: "Филиал 5", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес квартала 10", links: "/", type: "filial"},
    { id: 10, title: "Квартал 5", imageUrl: "https://placehold.jp/515x375.png",  position: "Адрес квартала 11", links: "/", type: "quarter"},
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
