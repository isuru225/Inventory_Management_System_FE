import { Notification } from "../Constants/Actions/Notification.ts"

const 
{
    GET_NOTIFICATION,
    GET_NOTIFICATION_SUCCESS,
    GET_NOTIFICATION_FAIL,
    MARK_ALL_MESSAGES_AS_READ,
    MARK_ALL_MESSAGES_AS_READ_SUCCESS,
    MARK_ALL_MESSAGES_AS_READ_FAIL
    
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
    ,
    messages:{
      mark: (data: any) => ({
        type: MARK_ALL_MESSAGES_AS_READ,
        payload: {
          data,
          isLoading: true
        },
      }),
      success: (data: any) => ({
        type: MARK_ALL_MESSAGES_AS_READ_SUCCESS,
        payload: {
          data,
          isLoading: false,
        },
      }),
      fail: (error: any) => ({
        type: MARK_ALL_MESSAGES_AS_READ_FAIL,
        payload: {
          error,
          isLoading: false,
        },
      })
    }
}