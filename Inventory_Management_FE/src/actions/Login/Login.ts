import { Login } from "../Constants/Actions/Login.ts"

const 
{
    LOG_USER_CREDNTIALS,
    LOG_USER_CREDNTIALS_SUCCESS,
    LOG_USER_CREDNTIALS_FAIL,
    LOG_OUT_USER

} = Login


export const LoginActions = {
    userCredentials : {
      log: (data: any) => ({
  
        type: LOG_USER_CREDNTIALS,
        payload: {
          data,
          isLoading: true
        },
      }),
      success: (data: any) => ({
        type: LOG_USER_CREDNTIALS_SUCCESS,
        payload: {
          data,
          isLoading: false,
        },
      }),
      fail: (error: any) => ({
        type: LOG_USER_CREDNTIALS_FAIL,
        payload: {
          error,
          isLoading: false,
        },
      })
      
    }
    ,
    userlogout : {
      logout : (data: any) => ({
        type : LOG_OUT_USER,
        payload : {
          data,
          isLoading : false
        }
      })
    }
}