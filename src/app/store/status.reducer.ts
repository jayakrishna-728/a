import { createReducer, on } from "@ngrx/store"
import { approveStatus, rejectStatus } from "./status.action"

export interface statusState {
    status: string
}


export const initialState: statusState = {
    status : 'rejected'
}


export const reducer = createReducer(
    initialState,
    on(approveStatus, state => ({ ...state, status: 'approved' })),  // Sets status to "approved"
    on(rejectStatus, state => ({ ...state, status: 'rejected' }))    // Sets status to "rejected"
);
