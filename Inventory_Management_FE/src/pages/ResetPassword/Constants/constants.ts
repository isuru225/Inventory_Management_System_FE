export const resetPasswordInitValues : IResetPassword = {
    newPassword : "",
    confirmedNewPassword : ""
}

export interface IResetPassword {
    newPassword : string,
    confirmedNewPassword : string
}


export enum forgotRequestParams {
    EMAIL = "email",
    PASSWORD_RESET_TOKEN = "token"
}