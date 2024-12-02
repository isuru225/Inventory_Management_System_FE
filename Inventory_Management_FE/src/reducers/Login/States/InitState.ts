import { ILogin } from "../Interfaces/LoginInterface.ts";

export const loginInitState : ILogin= {
    isLoginSuccessfull : false,
    tokenInfo : {},
    isLoading : false,
    errorCode : 0
}