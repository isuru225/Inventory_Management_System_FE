import { Home } from "../Constants/Actions/Home.ts"

const 
{
    GET_ALL_PROJECTS,
    GET_ALL_PROJECTS_SUCCESS,
    GET_ALL_PROJECTS_FAIL

} = Home


export const HomeActions = {
    allProjects : {
      get: (data: any) => ({
  
        type: GET_ALL_PROJECTS,
        payload: {
          data,
          isLoading: true
        },
      }),
      success: (data: any) => ({
        type: GET_ALL_PROJECTS_SUCCESS,
        payload: {
          data,
          isLoading: false,
        },
      }),
      fail: (error: any) => ({
        type: GET_ALL_PROJECTS_FAIL,
        payload: {
          error,
          isLoading: false,
        },
      })
      
    }
}