export interface ILogin {
    isLoginSuccessfull : boolean,
    tokenInfo : object,
    isLoading : boolean,
    errorCode : number,
    forgotPassword : {
        data : {},
        isLoading : false
    }
}