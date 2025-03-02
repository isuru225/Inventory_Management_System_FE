import { Register } from "../Constants/Actions/Register.ts"

const 
{
    REGISTER_NEW_USER,
    REGISTER_NEW_USER_SUCCESS,
    REGISTER_NEW_USER_FAIL

} = Register


export const RegisterActions = {
    newUser : {
      register: (data: any) => ({ 
        type: REGISTER_NEW_USER,
        payload: {
          data,
          isLoading: true
        },
      }),
      success: (data: any) => ({
        type: REGISTER_NEW_USER_SUCCESS,
        payload: {
          data,
          isLoading: false,
        },
      }),
      fail: (error: any) => ({
        type: REGISTER_NEW_USER_FAIL,
        payload: {
          error,
          isLoading: false,
        },
      })
      
    }
}