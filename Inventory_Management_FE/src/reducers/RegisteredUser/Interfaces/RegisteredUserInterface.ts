export interface RegisteredUserInterface {
    data : Array<RegisterUserDataInterface>
    isLoading : boolean,
    deleteOperation : {
        data : deleteInfoInterface,
        isLoading : boolean
    }
}

interface deleteInfoInterface {
    message : string,
    success : boolean
}

export interface RegisterUserDataInterface {
    Id : string,
    FullName: string,
    email: string,
    mobileNumber: string,
    roles: Array<string>
}