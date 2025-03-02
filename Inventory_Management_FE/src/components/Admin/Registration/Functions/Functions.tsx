import { userRoles } from "../Constants/Constants.ts";
import React from "react";

export const userRolesHandler = () =>  {
    const roles = [userRoles.EMPTY,userRoles.ADMIN,userRoles.USER];
    const roleOptions = roles.map((role : string)=>{
        return (
            <option value={role}>{role}</option>
        )
    })

    return roleOptions;
}