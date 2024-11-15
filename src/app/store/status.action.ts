import { createAction } from "@ngrx/store";

export const rejectStatus = createAction('reject');

export const approveStatus = createAction('approve');