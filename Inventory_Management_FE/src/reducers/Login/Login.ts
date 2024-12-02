
import { Login } from "../../actions/Constants/Actions/Login.ts";
import { loginInitState } from "./States/InitState.ts";


export const LoginReducer = (state = loginInitState, action: any) => {
    console.log("pannda", action);
    switch (action.type) {
        case Login.LOG_USER_CREDNTIALS:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case Login.LOG_USER_CREDNTIALS_SUCCESS:
            return {
                isLoginSuccessfull : true,
                token: action.payload.data,
                isLoading: action.payload.isLoading,
                errorCode : 0
            }
        case Login.LOG_USER_CREDNTIALS_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                errorCode : action.payload.error
            }
        case Login.LOG_OUT_USER : 
            return {
                isLoginSuccessfull : false,
                token : {},
                isLoading : false
            }
        default:
            return state;
    }
}