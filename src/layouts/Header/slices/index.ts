import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { InitialState } from '../types';


const initialState : InitialState = {
    showLoading: false,
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        showLoading: (state, action: PayloadAction<boolean>) => {
            state.showLoading = action.payload;
        }
    }
});


export const { showLoading } = headerSlice.actions;

export default headerSlice.reducer;

