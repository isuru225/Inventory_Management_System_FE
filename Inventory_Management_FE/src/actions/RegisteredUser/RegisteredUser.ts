import { RegisteredUser } from "../Constants/Actions/RegisteredUser.ts"

const
  {
    GET_REGISTERED_USER,
    GET_REGISTERED_USER_SUCCESS,
    GET_REGISTERED_USER_FAIL,
    DELETE_REGISTERED_USER,
    DELETE_REGISTERED_USER_SUCCESS,
    DELETE_REGISTERED_USER_FAIL

  } = RegisteredUser


export const RegisteredUserActions = {
  registeredUser: {
    get: (data: any) => ({
      type: GET_REGISTERED_USER,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: GET_REGISTERED_USER_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: GET_REGISTERED_USER_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })

  }
  ,
  registeredUserRemoving: {
    delete: (data: any) => ({
      type: DELETE_REGISTERED_USER,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: DELETE_REGISTERED_USER_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: DELETE_REGISTERED_USER_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })

  }
}