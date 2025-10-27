import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { Register } from "../../actions/Constants/Actions/Register.ts";
import { RegisterActions } from "../../actions/Register/Register.ts";
import { RegisterService } from "../../services/Register/index.ts";

export const RegisterSagas = {
  newUser: {
    get: function* (action: any) {
      
      try {
        const { data, status } = yield call(
            RegisterService.registerNewUser, action.payload.data
        );
        if (status == 200) {
          
          yield put(
            RegisterActions.newUser.success(data)
          )
        }

      } catch (error) {
        yield put(
            RegisterActions.newUser.fail(error.response.data?.errorCode)
        );
      }
    }
  }

}

export default [
  takeLatest(
    Register.REGISTER_NEW_USER,
    RegisterSagas.newUser.get
  )
]