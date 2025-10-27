import { IPasswordReset } from "../Interfaces/PasswordResetInterface.ts";

export const passwordResetInitState : IPasswordReset= {
    data : {
        message : "",
        isSuccessful : false
    },
    isLoading : false
}