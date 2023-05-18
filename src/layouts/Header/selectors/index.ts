import { RootState } from "../../../store";
import { createSelector } from "reselect";


const headers = (state: RootState) => state.header;

export const selectLoading = createSelector((state: RootState) => headers(state).showLoading, (showLoading) => showLoading);