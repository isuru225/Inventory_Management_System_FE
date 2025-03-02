import React from "react";
import Registration from "./Registration/Registration.tsx";
import RegisteredUser from "./RegisteredUsers/RegisteredUsers.tsx"

const Admin = () => {
    return (
        <>
            <Registration/>
            <RegisteredUser/>
        </>
    )
}

export default Admin;