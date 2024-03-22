import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEvent } from "../../interfaces";
import dayjs from "dayjs";
import {RootState} from "./index";

const initialState: IEvent[] = [
    { id: 0, title: "Событие 1", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 1", links: ""},
    { id: 1, title: "Событие 2", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 2", links: ""},
    { id: 2, title: "Событие 3", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 3", links: ""},
    { id: 3, title: "Событие 4", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 4", links: ""},
    { id: 4, title: "Событие 5", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 5", links: ""},
    { id: 5, title: "Событие 6", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 6", links: ""},
    { id: 6, title: "Событие 7", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 7", links: ""},
];

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {

    },
});

export const {} = eventsSlice.actions;
export default eventsSlice.reducer;

export const selectEvents = (state: RootState) => state.events;