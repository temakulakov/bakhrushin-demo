import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExhibition } from "../../interfaces";
import dayjs from "dayjs";
import {RootState} from "./index";



const initialState: IExhibition[] = [
    { id: 0, title: "Выставка 1", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 1", links: "/"},
    { id: 1, title: "Выставка 2", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 2", links: "/"},
    { id: 2, title: "Выставка 3", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 3", links: "/"},
    { id: 3, title: "Выставка 4", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 4", links: "/"},
    { id: 4, title: "Выставка 5", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 5", links: "/"},
    { id: 5, title: "Выставка 6", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 6", links: "/"},
    { id: 6, title: "Выставка 7", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 7", links: "/"},
];

const exhinitionSlice = createSlice({
    name: 'exhibition',
    initialState,
    reducers: {

    },
});

export const {} = exhinitionSlice.actions;
export default exhinitionSlice.reducer;

export const selectExhibition = (state: RootState) => state.exhibitions;