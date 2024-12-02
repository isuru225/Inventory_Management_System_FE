import { Tasks } from "../Constants/Actions/Tasks.ts"

const 
{
    GET_PROJECT_TASKS,
    GET_PROJECT_TASKS_SUCCESS,
    GET_PROJECT_TASKS_FAIL
} = Tasks


export const TasksActions = {
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
}