import { UserProfile } from "../Constants/Actions/UserProfile.ts"

const 
{
    GET_PROFILE_INFO,
    GET_PROFILE_INFO_SUCCESS,
    GET_PROFILE_INFO_FAIL

} = UserProfile


export const UserProfileActions = {
    profileInfo : {
      get: (data: any) => ({
  
        type: GET_PROFILE_INFO,
        payload: {
          data,
          isLoading: true
        },
      }),
      success: (data: any) => ({
        type: GET_PROFILE_INFO_SUCCESS,
        payload: {
          data,
          isLoading: false,
        },
      }),
      fail: (error: any) => ({
        type: GET_PROFILE_INFO_FAIL,
        payload: {
          error,
          isLoading: false,
        },
      })
      
    }
}