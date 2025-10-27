
import { Register } from "../../actions/Constants/Actions/Register.ts";
import { RegisterInitState } from "./States/InitState.ts";


export const RegisterReducer = (state = RegisterInitState, action: any) => {
    
    switch (action.type) {
        case Register.REGISTER_NEW_USER:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case Register.REGISTER_NEW_USER_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case Register.REGISTER_NEW_USER_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        default:
            return state;
    }
}