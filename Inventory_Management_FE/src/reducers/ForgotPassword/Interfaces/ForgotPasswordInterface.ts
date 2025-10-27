export interface IForgotPassword {
    data : IData,
    isLoading : boolean
}

interface IData 
{
    message : string,
    isSuccessful : boolean
}