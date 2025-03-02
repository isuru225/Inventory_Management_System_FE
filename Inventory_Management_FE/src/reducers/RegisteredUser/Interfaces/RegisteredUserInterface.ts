export interface RegisteredUserInterface {
    data : Array<RegisterUserDataInterface>
    isLoading : boolean,
    delete : {
        data : deleteInfoInterface,
        isLoading : boolean
    }
}

interface deleteInfoInterface {
    message : string,
    succes : boolean
}

export interface RegisterUserDataInterface {
    Id : string,
    FullName: string,
    email: string,
    mobileNumber: string,
    roles: Array<string>
}