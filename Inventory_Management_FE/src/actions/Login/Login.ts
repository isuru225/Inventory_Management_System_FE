import { Login } from "../Constants/Actions/Login.ts"

const 
{
    LOG_USER_CREDNTIALS,
    LOG_USER_CREDNTIALS_SUCCESS,
    LOG_USER_CREDNTIALS_FAIL,
    LOG_OUT_USER,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL

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
    ,
    password : {
      forgot : (data: any) => ({
        type : FORGOT_PASSWORD,
        payload : {
          data,
          isLoading : true
        }
      })
      ,
      success: (data: any) => ({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: {
          data,
          isLoading: false,
        },
      }),
      fail: (error: any) => ({
        type: FORGOT_PASSWORD_FAIL,
        payload: {
          error,
          isLoading: false,
        },
      })
    }
}