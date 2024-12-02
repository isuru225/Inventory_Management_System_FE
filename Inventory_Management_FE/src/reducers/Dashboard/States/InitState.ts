import { DashboardInterface } from "../Interfaces/DashboardInterface.ts";

export const DashboardInitState : DashboardInterface= {
    data : [],
    isLoading : false,
    employeeInfo : {
        data : {},
        isLoading : false
    }
}