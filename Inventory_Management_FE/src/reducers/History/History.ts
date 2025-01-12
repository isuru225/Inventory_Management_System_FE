import { History } from "../../actions/Constants/Actions/History.ts";
import { HistoryInitState } from "./States/InitState.ts";


export const HistoryReducer = (state = HistoryInitState, action: any) => {
    console.log("pannda", action);
    switch (action.type) {
        case History.GET_ALL_HISTORY_RECORDS:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case History.GET_ALL_HISTORY_RECORDS_SUCCESS:
            return {
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case History.GET_ALL_HISTORY_RECORDS_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case History.DELETE_A_HISTORY_RECORD:
            return {
                ...state,
                deleteHistoryRecordStatus: {
                    ...state.deleteHistoryRecordStatus,
                    isLoading: action.payload.isLoading
                }
            }
        case History.DELETE_A_HISTORY_RECORD_SUCCESS:
            return {
                ...state,
                deleteHistoryRecordStatus: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case History.DELETE_A_HISTORY_RECORD_FAIL:
            return {
                deleteHistoryRecordStatus: {
                    ...state.deleteHistoryRecordStatus,
                    isLoading: action.payload.isLoading
                }
            }
        default:
            return state;
    }
}