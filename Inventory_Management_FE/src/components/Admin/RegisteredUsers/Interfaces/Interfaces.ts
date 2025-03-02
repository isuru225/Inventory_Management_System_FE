export interface IRegisteredUser {
    id: string,
    email: string
    fullName: string,
    mobileNumber: string,
    roles: Array<string>
}

export interface IRegisteredUserData {
    id : string,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    role: string
}