
import { RegisteredUser } from "../../actions/Constants/Actions/RegisteredUser.ts";
import { RegisteredUserInitState } from "./States/InitState.ts";


export const RegisteredUserReducer = (state = RegisteredUserInitState, action: any) => {
    console.log("pannda", action);
    switch (action.type) {
        case RegisteredUser.GET_REGISTERED_USER:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case RegisteredUser.GET_REGISTERED_USER_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case RegisteredUser.GET_REGISTERED_USER_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case RegisteredUser.DELETE_REGISTERED_USER:
            return {
                ...state,
                delete : {
                    ...state.delete,
                    isLoading : action.payload.isLoading
                }  
            }
        case RegisteredUser.DELETE_REGISTERED_USER_SUCCESS:
            return {
                ...state,
                delete : {
                    ...state.delete,
                    data:action.payload.data,
                    isLoading : action.payload.isLoading
                }  
            }
        case RegisteredUser.DELETE_REGISTERED_USER_FAIL:
            return {
                ...state,
                delete : {
                    ...state.delete,
                    isLoading : action.payload.isLoading
                }  
            }
        default:
            return state;
    }
}