
import { PasswordReset } from "../../actions/Constants/Actions/PasswordReset.ts";
import { passwordResetInitState } from "./States/InitState.ts";


export const PasswordResetReducer = (state = passwordResetInitState, action: any) => {
    switch (action.type) {
        case PasswordReset.RESET_PASSWORD:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case PasswordReset.RESET_PASSWORD_SUCCESS:
            return {
                data: action.payload.data,
                isLoading: action.payload.isLoading
            }
        case PasswordReset.RESET_PASSWORD_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return state;
    }
}