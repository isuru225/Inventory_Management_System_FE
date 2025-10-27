import { IRegisteredUser, IRegisteredUserData } from "../Interfaces/Interfaces.ts"

export const registeredUserInfoHandler = (data: Array<IRegisteredUser>): Array<IRegisteredUserData> => {
    const formattedData = data?.map((registeredUser: IRegisteredUser) => {
        let nameParts = registeredUser.fullName.split(" ");
        let rolesValue = "";
        registeredUser.roles.forEach(role => {
            rolesValue = rolesValue + `${role} `
        });

        return {
            id : registeredUser.id,
            firstName: nameParts[0],
            lastName: nameParts[1],
            email:registeredUser.email,
            mobileNumber: registeredUser.mobileNumber,
            role: rolesValue
        }
    })

    return formattedData;
}