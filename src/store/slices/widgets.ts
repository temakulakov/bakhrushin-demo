import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IExposition, IWidget} from "../../interfaces";
import dayjs from "dayjs";
import {RootState} from "./index";



const initialState: IWidget[] = [
    { id: 0, title: "Виджет 1", imageUrl: "https://placehold.jp/916x860.png", links: "/", type: "Про", description: "Сегодня в фондах музея представлено более 1,5 млн. экспонатов. Это эскизы декораций, фотографии, костюмы актёров и многое другое", backgroundColor: "#F5E9BC", buttonText: "Расмотреть далее"},
    { id: 1, title: "Виджет 2", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Историческое здание флигеля стало детским досуговым центром с театральной студией. Здесь дети разных возрастов смогут получить навыки по актерскому мастер- ству, вокалу, танцу, игре на музыкальных инструментах.", backgroundColor: "#8a65b6", buttonText: "Расмотреть далее"},
    { id: 2, title: "Виджет 3", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Описание виджета 3", backgroundColor: "#52c2cc", buttonText: "Расмотреть далее"},
    { id: 3, title: "Виджет 4", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Описание виджета 4", backgroundColor: "#60de6b", buttonText: "Расмотреть далее"},
    { id: 4, title: "Виджет 5", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Описание виджета 5", backgroundColor: "#ea953d", buttonText: "Расмотреть далее"},
    { id: 5, title: "Виджет 6", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Описание виджета 6", backgroundColor: "#cbe032", buttonText: "Расмотреть далее"},
    { id: 6, title: "Виджет 7", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Описание виджета 7", backgroundColor: "#c2ac59", buttonText: "Расмотреть далее"},
];

const counterSlice = createSlice({
    name: 'widget',
    initialState,
    reducers: {

    },
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;

export const selectWidget = (state: RootState) => state.widgets;
