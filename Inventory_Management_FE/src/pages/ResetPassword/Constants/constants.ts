export const resetPasswordInitValues : IResetPassword = {
    newPassword : "",
    confirmedNewPassword : ""
}

export const resetPasswordResult : IResetPasswordResult = {
    message: "", 
    isSuccessful: false

}

interface IResetPasswordResult  
{
    message: string, 
    isSuccessful: boolean
}

export interface IResetPassword {
    newPassword : string,
    confirmedNewPassword : string
}



export enum forgotRequestParams {
    EMAIL = "email",
    PASSWORD_RESET_TOKEN = "token"
}