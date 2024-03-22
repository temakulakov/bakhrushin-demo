import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IEntity, INews} from "../../interfaces";
import dayjs, {Dayjs} from "dayjs";
import {RootState} from "./index";



const initialState: INews[] = [
    { id: 0, title: "Здесь большая белая новость на целых 2 строки", imageUrl: "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-030.jpg", date: dayjs(), description: "Адрес Новость 1", links: "/", type: "full"},
    { id: 1, title: "Новость 2", imageUrl: "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-030.jpg", date: dayjs(), description: "Адрес Новость 2", links: "/", type: "compact"},
    { id: 2, title: "Новость 3", imageUrl: "https://placehold.jp/515x375.png", date: dayjs(), description: "Адрес Новость 3", links: "/", type: "full"},
    { id: 3, title: "Новость 4", imageUrl: "https://placehold.jp/515x375.png", date: dayjs(), description: "Адрес Новость 4", links: "/", type: "full"},
    { id: 4, title: "Новость 5", imageUrl: "https://placehold.jp/515x375.png", date: dayjs(), description: "Адрес Новость 5", links: "/", type: "full"},
    { id: 5, title: "Новость 6", imageUrl: "https://placehold.jp/515x375.png", date: dayjs(), description: "Адрес Новость 6", links: "/", type: "compact"},
    { id: 6, title: "Новость 7", imageUrl: "https://placehold.jp/515x375.png", date: dayjs(), description: "Адрес Новость 7", links: "/", type: "full"},
];

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;

export const selectNews = (state: RootState) => state.news;
