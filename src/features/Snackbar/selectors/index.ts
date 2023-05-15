import { createSelector } from 'reselect';
import { RootState } from "../../../store";


export const selectSnackbars = createSelector((state : RootState) => state.snackbars.snackbars, (v) => v);