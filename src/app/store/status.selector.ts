import { createAction, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectStatusState = (state:AppState)=>state.status;

export const selectStatus = createSelector(selectStatusState , (state)=>state.status);