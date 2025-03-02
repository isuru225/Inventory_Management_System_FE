export const registrationModalInitValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmedPassword: "",
    role: ""
}

export enum userRoles {
    EMPTY = "",
    USER = "user",
    ADMIN = "admin"
}

export enum successNotification {
    MESSAGE = "Registration Success!",
    DESCRIPTION = "User is registered to the system successfully. Now the user can interact with the system adhering restrictions."
}

export enum failedNotification {
    MESSAGE = "Registration Failed!",
    DESCRIPTION = "User registration process is failed. Please try again."
}