import logger from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';

import MapReducer, { MapStateInterface } from './map';
import PropertiesListReducer, { PropertiesStateInterface } from './properties';

export interface RootStateInterface {
    map: MapStateInterface;
    properties: PropertiesStateInterface;
}

export const store = configureStore({
    devTools: true,
    middleware: [logger],
    reducer: { map: MapReducer, properties: PropertiesListReducer },
});

export type RootState = RootStateInterface;
export type AppDispatch = typeof store.dispatch;
