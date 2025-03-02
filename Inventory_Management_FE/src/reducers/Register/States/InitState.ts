import { RegisterInterface, RegisterProcessStatusInterface } from "../Interfaces/RegisterInterface.ts";


const RegisterProcessStatus : RegisterProcessStatusInterface = {
    message : "",
    success : false
}

export const RegisterInitState : RegisterInterface = {
    data : RegisterProcessStatus,
    isLoading : false
}