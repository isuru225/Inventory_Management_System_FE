
import { Notification } from "../../actions/Constants/Actions/Notification.ts";
import { NotificationInitState } from "./States/InitState.ts";


export const NotificationReducer = (state = NotificationInitState, action: any) => {
    switch (action.type) {
        case Notification.GET_NOTIFICATION:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case Notification.GET_NOTIFICATION_SUCCESS:
            return {
                
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case Notification.GET_NOTIFICATION_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case Notification.MARK_ALL_MESSAGES_AS_READ:
            return {
                ...state,
                markMessages : {
                    ...state.markMessages,
                    isLoading: action.payload.isLoading
                }
            }
        case Notification.MARK_ALL_MESSAGES_AS_READ_SUCCESS:
            return {
                
                ...state,
                markMessages : {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case Notification.MARK_ALL_MESSAGES_AS_READ_FAIL:
            return {
                ...state,
                markMessages : {
                    ...state.markMessages,
                    isLoading: action.payload.isLoading
                }
            }     
        default:
            return state;
    }
}