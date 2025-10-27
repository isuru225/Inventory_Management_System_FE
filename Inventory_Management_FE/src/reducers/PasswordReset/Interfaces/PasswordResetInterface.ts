export interface IPasswordReset {
    data : IData,
    isLoading : boolean
}

interface IData 
{
    message : string,
    isSuccessful : boolean
}