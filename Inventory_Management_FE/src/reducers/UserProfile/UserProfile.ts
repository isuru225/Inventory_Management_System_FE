import { UserProfile } from "../../actions/Constants/Actions/UserProfile.ts";
import { UserProfileInitState } from "./States/InitState.ts";


export const UserProfileReducer = (state = UserProfileInitState, action: any) => {
    
    switch (action.type) {
        case UserProfile.GET_PROFILE_INFO:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case UserProfile.GET_PROFILE_INFO_SUCCESS:
            return {
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case UserProfile.GET_PROFILE_INFO_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        default:
            return state;
    }
}