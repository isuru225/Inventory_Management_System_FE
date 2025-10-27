
import { RegisteredUser } from "../../actions/Constants/Actions/RegisteredUser.ts";
import { RegisteredUserInitState } from "./States/InitState.ts";


export const RegisteredUserReducer = (state = RegisteredUserInitState, action: any) => {
    
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
                deleteOperation : {
                    ...state.deleteOperation,
                    isLoading : action.payload.isLoading
                }  
            }
        case RegisteredUser.DELETE_REGISTERED_USER_SUCCESS:
            return {
                ...state,
                deleteOperation : {
                    ...state.deleteOperation,
                    data:action.payload.data,
                    isLoading : action.payload.isLoading
                }  
            }
        case RegisteredUser.DELETE_REGISTERED_USER_FAIL:
            return {
                ...state,
                deleteOperation : {
                    ...state.deleteOperation,
                    isLoading : action.payload.isLoading
                }  
            }
        default:
            return state;
    }
}