import { PasswordReset } from "../Constants/Actions/PasswordReset.ts"

const 
{
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL

} = PasswordReset


export const PasswordResetActions = {
    password : {
      reset: (data: any) => ({
  
        type: RESET_PASSWORD,
        payload: {
          data,
          isLoading: true
        },
      }),
      success: (data: any) => ({
        type: RESET_PASSWORD_SUCCESS,
        payload: {
          data,
          isLoading: false,
        },
      }),
      fail: (error: any) => ({
        type: RESET_PASSWORD_FAIL,
        payload: {
          error,
          isLoading: false,
        },
      })
      
    }
}