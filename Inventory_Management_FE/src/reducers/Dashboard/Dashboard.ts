
import { Dashboard } from "../../actions/Constants/Actions/Dashboard.ts";
import { DashboardInitState } from "./States/InitState.ts";


export const DashboardReducer = (state = DashboardInitState, action: any) => {
    console.log("pannda", action);
    switch (action.type) {
        case Dashboard.GET_PROJECT_TASKS:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case Dashboard.GET_PROJECT_TASKS_SUCCESS:
            return {

                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case Dashboard.GET_PROJECT_TASKS_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }

        case Dashboard.GET_EMPLOYEE_INFO:
            return {
                ...state,
                employeeInfo : {
                    ...state.employeeInfo,
                    isLoading : action.payload.isLoading
                }
            }
        case Dashboard.GET_EMPLOYEE_INFO_SUCCESS:
            return {

                ...state,
                employeeInfo : {
                    data : action.payload.data,
                    isLoading : action.payload.isLoading
                }
                
            }
        case Dashboard.GET_EMPLOYEE_INFO_FAIL:
            return {
                ...state,
                employeeInfo : {
                    ...state.employeeInfo,
                    isLoading : action.payload.isLoading
                }
            }
        default:
            return state;
    }
}