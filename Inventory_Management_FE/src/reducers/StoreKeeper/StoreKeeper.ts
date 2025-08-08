import { StoreKeeper } from "../../actions/Constants/Actions/StoreKeeper.ts";
import { StoreKeeperInitState } from "./States/InitState.ts";


export const StoreKeeperReducer = (state = StoreKeeperInitState, action: any) => {
    console.log("pannda", action);
    switch (action.type) {
        case StoreKeeper.UPDATE_INVENTORY_RAW_DRUGS:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case StoreKeeper.UPDATE_INVENTORY_RAW_DRUGS_SUCCESS:
            return {
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case StoreKeeper.UPDATE_INVENTORY_RAW_DRUGS_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case StoreKeeper.UPDATE_INVENTORY_FINISHED_DRUGS:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case StoreKeeper.UPDATE_INVENTORY_FINISHED_DRUGS_SUCCESS:
            return {
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case StoreKeeper.UPDATE_INVENTORY_FINISHED_DRUGS_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case StoreKeeper.UPDATE_INVENTORY_GENERAL_STORE:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case StoreKeeper.UPDATE_INVENTORY_GENERAL_STORE_SUCCESS:
            return {
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case StoreKeeper.UPDATE_INVENTORY_GENERAL_STORE_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        default:
            return state;
    }
}