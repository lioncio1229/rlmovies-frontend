import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Snackbar, SnackbarsInitialState } from "../types";
import { v4 } from 'uuid';


export const initialState : SnackbarsInitialState = {
    snackbars: [
        // {id: '0', status: 'error', message: 'Movie is not updated'},
        // {id: '1', status: 'processing', message: 'Adding Movie'},
        // {id: '2', status: 'success', message: 'Movie added'},
    ]
}

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        addSnackbar: (state, action: PayloadAction<Partial<Snackbar>>) => {
            const item : Snackbar = {...action.payload, id: v4()} as Snackbar;
            state.snackbars = [...state.snackbars, item];
        },
        removeSnackbarById: (state, action: PayloadAction<string>) => {
            const id : string = action.payload;
            const newArr = state.snackbars.filter(v => v.id !== id);
            state.snackbars = newArr;
        },
        popSnackbar: (state) => {
            const sn = state.snackbars;
            state.snackbars = sn.slice(0, sn.length-1);
        }
    }
});

export const { addSnackbar, removeSnackbarById, popSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;