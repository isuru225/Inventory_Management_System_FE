
import { GeneralStore } from "../../actions/Constants/Actions/GeneralStrore.ts";
import { GeneralStoreItemInitState } from "./States/InitState.ts";


export const FinishedDrugsReducer = (state = GeneralStoreItemInitState, action: any) => {
    
    switch (action.type) {
        case GeneralStore.GET_GENERAL_STORE_ITEM:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case GeneralStore.GET_GENERAL_STORE_ITEM_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case GeneralStore.GET_GENERAL_STORE_ITEM_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case GeneralStore.ADD_NEW_GENERAL_STORE_ITEM_ITEM:
            return {
                ...state,
                AddGeneralStoreItem: {
                    ...state.AddGeneralStoreItem,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.ADD_NEW_GENERAL_STORE_ITEM_SUCCESS:
            return {
                ...state,
                AddGeneralStoreItem: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.ADD_NEW_GENERAL_STORE_ITEM_FAIL:
            return {
                ...state,
                AddGeneralStoreItem: {
                    ...state.AddGeneralStoreItem,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.EDIT_GENERAL_STORE_ITEM:
            return {
                ...state,
                EditGeneralStoreItem: {
                    ...state.EditGeneralStoreItem,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.EDIT_GENERAL_STORE_ITEM_SUCCESS:
            return {
                ...state,
                EditGeneralStoreItem: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.EDIT_GENERAL_STORE_ITEM_FAIL:
            return {
                ...state,
                EditGeneralStoreItem: {
                    ...state.EditGeneralStoreItem,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.ADD_GENERAL_STORE_RECORD_TO_TRANSACTION_HISTORY:
            return {
                ...state,
                AddTransactionHistory: {
                    ...state.AddTransactionHistory,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.ADD_GENERAL_STORE_RECORD_TO_TRANSACTION_HISTORY_SUCCESS:
            return {
                ...state,
                AddTransactionHistory: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.ADD_GENERAL_STORE_RECORD_TO_TRANSACTION_HISTORY_FAIL:
            return {
                ...state,
                AddTransactionHistory: {
                    ...state.AddTransactionHistory,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.DELETE_GENERAL_STORE_ITEM:
            return {
                ...state,
                DeleteGeneralStoreItem: {
                    ...state.DeleteGeneralStoreItem,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.DELETE_GENERAL_STORE_ITEM_SUCCESSFUL:
            return {
                ...state,
                DeleteGeneralStoreItem: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case GeneralStore.DELETE_GENERAL_STORE_ITEM_FAIL:
            return {
                ...state,
                DeleteGeneralStoreItem: {
                    ...state.DeleteGeneralStoreItem,
                    isLoading: action.payload.isLoading
                }
            }
        default:
            return state;
    }
}