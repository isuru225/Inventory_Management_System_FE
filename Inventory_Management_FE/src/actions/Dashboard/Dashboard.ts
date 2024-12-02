import { Dashboard } from "../Constants/Actions/Dashboard.ts"

const 
{
    GET_PROJECT_TASKS,
    GET_PROJECT_TASKS_SUCCESS,
    GET_PROJECT_TASKS_FAIL,
    GET_EMPLOYEE_INFO,
    GET_EMPLOYEE_INFO_SUCCESS,
    GET_EMPLOYEE_INFO_FAIL

} = Dashboard


export const DashboardActions = {
    projectSpecificTasks : {
      get: (data: any) => ({
  
        type: GET_PROJECT_TASKS,
        payload: {
          data,
          isLoading: true
        },
      }),
      success: (data: any) => ({
        type: GET_PROJECT_TASKS_SUCCESS,
        payload: {
          data,
          isLoading: false,
        },
      }),
      fail: (error: any) => ({
        type: GET_PROJECT_TASKS_FAIL,
        payload: {
          error,
          isLoading: false,
        },
      })
      
    }
    ,
    employeeInfo : {
      get : (data : any) =>({
        type: GET_EMPLOYEE_INFO,
        payload: {
          data,
          isLoading: true
        },
      }),
      success: (data: any) => ({
        type: GET_EMPLOYEE_INFO_SUCCESS,
        payload: {
          data,
          isLoading: false,
        },
      }),
      fail: (error: any) => ({
        type: GET_EMPLOYEE_INFO_FAIL,
        payload: {
          error,
          isLoading: false,
        },
      })
    }
}