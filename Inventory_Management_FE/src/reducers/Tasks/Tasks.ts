import { Tasks } from "../../actions/Constants/Actions/Tasks.ts";
import { TasksInitState } from "./States/InitState.ts";


export const TasksReducer = (state = TasksInitState, action: any) => {
    console.log("pannda", action);
    switch (action.type) {
        case Tasks.GET_PROJECT_TASKS:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case Tasks.GET_PROJECT_TASKS_SUCCESS:
            return {

                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case Tasks.GET_PROJECT_TASKS_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        default:
            return state;
    }
}