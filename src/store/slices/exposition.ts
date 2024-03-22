import { createSlice } from '@reduxjs/toolkit';
import { IExposition } from "../../interfaces";
import dayjs from "dayjs";
import {RootState} from "./index";

import exp1 from 'static/expositions/exp1.jpg'
import exp2 from 'static/expositions/exp2.jpg'
import exp3 from 'static/expositions/exp3.png'
import exp4 from 'static/expositions/exp4.jpg'



const initialState: IExposition[] = [
    { id: 0, title: "«Семья Бахрушиных и залог счастливой жизни». 12+", imageUrl: exp1, duration: {from: dayjs(), to: dayjs()}, position: "Москва, улица Бахрушина, 31/12с1", links: "/", type: "Про"},
    { id: 1, title: "Экспозиции 2", imageUrl: exp2, duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 2", links: "/", type: "Про"},
    { id: 2, title: "Экспозиции 3", imageUrl: exp3, duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 3", links: "/", type: "Про"},
    { id: 3, title: "Экспозиции 4", imageUrl: exp4, duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 4", links: "/", type: "Про"},
    { id: 4, title: "Экспозиции 5", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 5", links: "/", type: "Про"},
    { id: 5, title: "Экспозиции 6", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 6", links: "/", type: "Про"},
    { id: 6, title: "Экспозиции 7", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 7", links: "/", type: "Про"},
];

const expositionSlice = createSlice({
    name: 'exposition',
    initialState,
    reducers: {

    },
});

export const {} = expositionSlice.actions;
export default expositionSlice.reducer;

export const selectExposition = (state: RootState) => state.exposition;
