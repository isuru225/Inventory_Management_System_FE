
import { RawDrugs } from "../../actions/Constants/Actions/RawDrugs.ts";
import { RawDrugsInitState } from "./States/InitState.ts";


export const RawDrugsReducer = (state = RawDrugsInitState, action: any) => {
    console.log("pannda", action);
    switch (action.type) {
        case RawDrugs.GET_RAW_DRUG_ITEM:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case RawDrugs.GET_RAW_DRUG_ITEM_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case RawDrugs.GET_RAW_DRUG_ITEM_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case RawDrugs.ADD_NEW_RAW_DRUG_ITEM:
            return {
                ...state,
                AddRawDrug : {
                    ...state.AddRawDrug,
                    isLoading : action.payload.isLoading
                }
            }
        case RawDrugs.ADD_NEW_RAW_DRUG_ITEM_SUCCESS:
            return {
                ...state,
                AddRawDrug : {
                    data : action.payload.data,
                    isLoading : action.payload.isLoading
                }
            }
        case RawDrugs.ADD_NEW_RAW_DRUG_ITEM_FAIL:
            return {
                ...state,
                AddRawDrug : {
                    ...state.AddRawDrug,
                    isLoading : action.payload.isLoading
                }
            }
            case RawDrugs.EDIT_RAW_DRUG_ITEM:
                return {
                    ...state,
                    EditRawDrug : {
                        ...state.EditRawDrug,
                        isLoading : action.payload.isLoading
                    }
                }
            case RawDrugs.EDIT_RAW_DRUG_ITEM_SUCCESS:
                return {
                    ...state,
                    EditRawDrug : {
                        data : action.payload.data,
                        isLoading : action.payload.isLoading
                    }
                }
            case RawDrugs.EDIT_RAW_DRUG_ITEM_FAIL:
                return {
                    ...state,
                    EditRawDrug : {
                        ...state.EditRawDrug,
                        isLoading : action.payload.isLoading
                    }
                }
        default:
            return state;
    }
}