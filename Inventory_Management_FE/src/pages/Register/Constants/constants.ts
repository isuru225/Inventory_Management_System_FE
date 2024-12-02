export const userRegistrationInitValues : IUserRegistration = {
    firstName : "",
    lastName : "",
    email : "",
    mobileNumber : "",
    password : "",
    confirmedPassword : ""
}


export interface IUserRegistration {
    firstName : string,
    lastName : string,
    email : string,
    mobileNumber : string,
    password : string,
    confirmedPassword : string
}