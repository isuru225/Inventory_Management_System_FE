
import { Home } from "../../actions/Constants/Actions/Home.ts";
import { HomeInitState } from "./States/InitState.ts";


export const HomeReducer = (state = HomeInitState, action: any) => {
    console.log("pannda", action);
    switch (action.type) {
        case Home.GET_ALL_PROJECTS:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case Home.GET_ALL_PROJECTS_SUCCESS:
            return {
                
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case Home.GET_ALL_PROJECTS_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        
        default:
            return state;
    }
}