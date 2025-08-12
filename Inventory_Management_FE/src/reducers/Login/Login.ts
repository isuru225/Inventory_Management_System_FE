
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
                ...state,
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
        case Login.FORGOT_PASSWORD : 
            return {
                ...state,
                forgotPassword : {
                    ...state.forgotPassword,
                    isLoading : action.payload.isLoading
                }
            }
         case Login.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                forgotPassword : {
                    data : action.payload.data,
                    isLoading : action.payload.isLoading
                }
            }
        case Login.FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                forgotPassword : {
                    ...state.forgotPassword,
                    isLoading : action.payload.isLoading
                }
            }
        case Login.LOG_OUT_USER : 
            return {
                ...state,
                isLoginSuccessfull : false,
                token : {},
                isLoading : false,
                errorCode : 0
            }
        default:
            return state;
    }
}