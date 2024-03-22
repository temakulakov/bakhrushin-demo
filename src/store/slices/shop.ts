import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IShop} from "../../interfaces";
import dayjs from "dayjs";
import {RootState} from "./index";



const initialState: IShop[] = [
    { id: 0, title: "Товар 1", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 1, title: "Товар 2", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 2, title: "Товар 3", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 3, title: "Товар 4", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 4, title: "Товар 5", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 5, title: "Товар 6", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 6, title: "Товар 7", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 7, title: "Товар 7", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 8, title: "Товар 8", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 9, title: "Товар 9", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 10, title: "Товар 10", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 11, title: "Товар 11", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
    { id: 12, title: "Товар 12", imageUrl: "https://placehold.jp/515x375.png", links: "", price: 100},
];

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {

    },
});

export const {} = shopSlice.actions;
export default shopSlice.reducer;

export const selectShop = (state: RootState) => state.shop;
