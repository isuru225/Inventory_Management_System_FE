import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { RegisteredUser } from "../../actions/Constants/Actions/RegisteredUser.ts";
import { RegisteredUserActions } from "../../actions/RegisteredUser/RegisteredUser.ts";
import { RegisteredUserService } from "../../services/RegisteredUser/index.ts";

export const RegisteredUserSagas = {
  getRegisteredUsers: {
    get: function* (action: any) {
      
      try {
        const { data, status } = yield call(
            RegisteredUserService.getRegisteredUser, action.payload.data
        );
        if (status == 200) {
          
          yield put(
            RegisteredUserActions.registeredUser.success(data)
          )
        }

      } catch (error: any) {
        yield put(
            RegisteredUserActions.registeredUser.fail(error.response.data?.errorCode)
        );
      }
    }
  }
  ,
  deleteRegisteredUsers: {
    delete: function* (action: any) {
      
      try {
        const { data, status } = yield call(
            RegisteredUserService.deleteRegisteredUser, action.payload.data
        );
        if (status == 200) {
          
          yield put(
            RegisteredUserActions.registeredUserRemoving.success(data)
          )
        }

      } catch (error: any) {
        yield put(
            RegisteredUserActions.registeredUserRemoving.fail(error.response.data?.errorCode)
        );
      }
    }
  }

}

export default [
  takeLatest(
    RegisteredUser.GET_REGISTERED_USER,
    RegisteredUserSagas.getRegisteredUsers.get
  )
  ,
  takeLatest(
    RegisteredUser.DELETE_REGISTERED_USER,
    RegisteredUserSagas.deleteRegisteredUsers.delete
  )
]