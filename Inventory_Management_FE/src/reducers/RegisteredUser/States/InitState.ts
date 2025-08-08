import { RegisteredUserInterface } from "../Interfaces/RegisteredUserInterface.ts";

export const RegisteredUserInitState : RegisteredUserInterface= {
    data : [],
    isLoading : false,
    deleteOperation : {
        data : {
            message : "",
            success : false
        },
        isLoading : false
    }
}

