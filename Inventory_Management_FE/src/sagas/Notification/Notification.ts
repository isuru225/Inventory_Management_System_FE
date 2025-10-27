import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { Notification } from "../../actions/Constants/Actions/Notification.ts";
import { NotificationService } from "../../services/Notification/index.ts";
import { NotificationActions } from "../../actions/Notification/Notification.ts";

export const NotificationSagas = {
  notifications: {
    get: function* (action: any) {
      try {
        const { data, status } = yield call(
          NotificationService.getAllNotifications, action.payload.data
        );
        if (status == 200) {

          yield put(
            NotificationActions.notifications.success(data)
          )
        }

      } catch (error: any) {
        yield put(
          NotificationActions.notifications.fail(error.response.data?.errorCode)
        );
      }
    },
    mark: function* (action: any) {
      try {
        const { data, status } = yield call(
          NotificationService.markAllMessages, action.payload.data
        );
        if (status == 200) {
          yield put(
            NotificationActions.messages.success(data)
          )
        }

      } catch (error: any) {
        yield put(
          NotificationActions.messages.fail(error.response.data?.errorCode)
        );
      }
    }
  }
}

export default [
  takeLatest(
    Notification.GET_NOTIFICATION,
    NotificationSagas.notifications.get
  )
  ,
  takeLatest(
    Notification.MARK_ALL_MESSAGES_AS_READ,
    NotificationSagas.notifications.mark
  )
]