import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { ModelInterface } from 'types';

export interface PropertiesStateInterface {
    propertiesList: Array<ModelInterface>;
}

const initialState: PropertiesStateInterface = {
    propertiesList: [],
};

export const propertiesSlice = createSlice({
    initialState,
    name: 'properties',
    reducers: {
        addProperties: (state, action: PayloadAction<Array<ModelInterface>>) => {
            state.propertiesList = [...action.payload, ...state.propertiesList];
        },

        setProperties: (state, action: PayloadAction<Array<ModelInterface>>) => {
            state.propertiesList = action.payload;
        },
    },
});

const { actions, reducer } = propertiesSlice;

export const { addProperties, setProperties } = actions;

export const propertiesSelector = (state: RootState) => state.properties.propertiesList;

export default reducer;
