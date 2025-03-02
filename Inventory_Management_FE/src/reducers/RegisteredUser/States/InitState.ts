import { RegisteredUserInterface } from "../Interfaces/RegisteredUserInterface.ts";

export const RegisteredUserInitState : RegisteredUserInterface= {
    data : [],
    isLoading : false,
    delete : {
        data : {
            message : "",
            succes : false
        },
        isLoading : false
    }
}

