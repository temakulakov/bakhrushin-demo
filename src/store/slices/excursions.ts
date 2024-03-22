import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExcursions } from "../../interfaces";
import dayjs from "dayjs";
import {RootState} from "./index";

const initialState: IExcursions[] = [
    { id: 0, title: "Экскурсия 1", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 1", links: "/"},
    { id: 1, title: "Экскурсия 2", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 2", links: "/"},
    { id: 2, title: "Экскурсия 3", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 3", links: "/"},
    { id: 3, title: "Экскурсия 4", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 4", links: "/"},
    { id: 4, title: "Экскурсия 5", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 5", links: "/"},
    { id: 5, title: "Экскурсия 6", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 6", links: "/"},
    { id: 6, title: "Экскурсия 7", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 7", links: "/"},
];

const excursionsSlice = createSlice({
    name: 'excursions',
    initialState,
    reducers: {

    },
});

export const {} = excursionsSlice.actions;
export default excursionsSlice.reducer;

export const selectExcursion = (state: RootState) => state.excursions;
