import { Notification } from "../Constants/Actions/Notification.ts"

const 
{
    GET_NOTIFICATION,
    GET_NOTIFICATION_SUCCESS,
    GET_NOTIFICATION_FAIL
    
} = Notification


export const NotificationActions = {
    notifications : {
      get: (data: any) => ({
        type: GET_NOTIFICATION,
        payload: {
          data,
          isLoading: true
        },
      }),
      success: (data: any) => ({
        type: GET_NOTIFICATION_SUCCESS,
        payload: {
          data,
          isLoading: false,
        },
      }),
      fail: (error: any) => ({
        type: GET_NOTIFICATION_FAIL,
        payload: {
          error,
          isLoading: false,
        },
      })
      
    }
}