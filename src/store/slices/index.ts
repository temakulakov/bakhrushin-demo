import { combineReducers } from '@reduxjs/toolkit';
// Импортируйте ваши редюсеры здесь
import events from './events';
import excursions from './excursions';
import exposition from "./exposition";
import exhibitions from "./exhibitions";
import widget from "./widgets";
import news from "./news";
import shop from "./shop";
import filials from "./filials";

const rootReducer = combineReducers({
    // Добавьте ваши редюсеры сюда
    events: events,
    excursions: excursions,
    exposition: exposition,
    exhibitions: exhibitions,
    widgets: widget,
    news: news,
    shop: shop,
    filial: filials
    // Вы можете добавить другие редюсеры по мере необходимости
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
