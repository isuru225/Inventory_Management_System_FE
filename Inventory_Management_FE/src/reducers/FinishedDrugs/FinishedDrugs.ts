
import { FinishedDrugs } from "../../actions/Constants/Actions/FinishedDrugs.ts";
import { FinishedDrugsInitState } from "./States/InitState.ts";


export const FinishedDrugsReducer = (state = FinishedDrugsInitState, action: any) => {
    
    switch (action.type) {
        case FinishedDrugs.GET_FINISHED_DRUG_ITEM:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case FinishedDrugs.GET_FINISHED_DRUG_ITEM_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case FinishedDrugs.GET_FINISHED_DRUG_ITEM_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case FinishedDrugs.ADD_NEW_FINISHED_DRUG_ITEM:
            return {
                ...state,
                AddFinishedDrug: {
                    ...state.AddFinishedDrug,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.ADD_NEW_FINISHED_DRUG_ITEM_SUCCESS:
            return {
                ...state,
                AddFinishedDrug: {
                    errorCode : 0,
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.ADD_NEW_FINISHED_DRUG_ITEM_FAIL:
            return {
                ...state,
                AddFinishedDrug: {
                    ...state.AddFinishedDrug,
                    errorCode : action.payload.error,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.EDIT_FINISHED_DRUG_ITEM:
            return {
                ...state,
                EditFinishedDrug: {
                    ...state.EditFinishedDrug,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.EDIT_FINISHED_DRUG_ITEM_SUCCESS:
            return {
                ...state,
                EditFinishedDrug: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.EDIT_FINISHED_DRUG_ITEM_FAIL:
            return {
                ...state,
                EditFinishedDrug: {
                    ...state.EditFinishedDrug,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.ADD_FINISHED_DRUG_RECORD_TO_TRANSACTION_HISTORY:
            return {
                ...state,
                AddTransactionHistory: {
                    ...state.AddTransactionHistory,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.ADD_FINISHED_DRUG_RECORD_TO_TRANSACTION_HISTORY_SUCCESS:
            return {
                ...state,
                AddTransactionHistory: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.ADD_FINISHED_DRUG_RECORD_TO_TRANSACTION_HISTORY_SUCCESS_FAIL:
            return {
                ...state,
                AddTransactionHistory: {
                    ...state.AddTransactionHistory,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.DELETE_FINISHED_DRUG_ITEM:
            return {
                ...state,
                DeleteFinishedDrug: {
                    ...state.DeleteFinishedDrug,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.DELETE_FINISHED_DRUG_ITEM_SUCCESSFUL:
            return {
                ...state,
                DeleteFinishedDrug: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case FinishedDrugs.DELETE_FINISHED_DRUG_ITEM_FAIL:
            return {
                ...state,
                DeleteFinishedDrug: {
                    ...state.DeleteFinishedDrug,
                    isLoading: action.payload.isLoading
                }
            }
        default:
            return state;
    }
}