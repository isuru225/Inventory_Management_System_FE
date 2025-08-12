
import { ForgotPassword } from "../../actions/Constants/Actions/ForgotPassword.ts";
import { forgotPasswordInitState } from "./States/InitState.ts";


export const ForgotPasswordReducer = (state = forgotPasswordInitState, action: any) => {
    switch (action.type) {
        case ForgotPassword.FORGOT_PASSWORD:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case ForgotPassword.FORGOT_PASSWORD_SUCCESS:
            return {
                data: action.payload.data,
                isLoading: action.payload.isLoading
            }
        case ForgotPassword.FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return state;
    }
}