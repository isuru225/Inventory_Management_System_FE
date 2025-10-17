import { IForgotPassword } from "../Interfaces/ForgotPasswordInterface.ts";

export const forgotPasswordInitState : IForgotPassword= {
    data : {
        message : "",
        isSuccessful : false
    },
    isLoading : false
}