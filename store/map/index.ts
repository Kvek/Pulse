import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LatLngExpression } from 'leaflet';
import { RootState } from 'store';

export interface MapStateInterface {
    center: LatLngExpression | null;
}

const initialState: MapStateInterface = {
    center: [51.505, -0.09],
};

export const mapSlice = createSlice({
    initialState,
    name: 'map',
    reducers: {
        setMapCenter: (state, action: PayloadAction<LatLngExpression | null>) => {
            state.center = action.payload;
        },
    },
});

const { actions, reducer } = mapSlice;

export const { setMapCenter } = actions;

export const mapCenterSelector = (state: RootState) => state.map.center;

export default reducer;
