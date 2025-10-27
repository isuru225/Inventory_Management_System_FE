import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { Login } from "../../actions/Constants/Actions/Login.ts";
import { LoginService } from "../../services/Login/index.ts";
import { LoginActions } from "../../actions/Login/Login.ts";

export const LoginSagas = {
  userCredentials: {
    log: function* (action: any) {

      try {
        const { data, status } = yield call(
          LoginService.logUserCredentials, action.payload.data
        );
        if (status == 200) {
          yield put(
            LoginActions.userCredentials.success(data)
          )
        }

      } catch (error : any) {
        
        yield put(
          LoginActions.userCredentials.fail(error.response.data?.errorCode)
        );
      }
    },
  }
  ,
  // password: {
  //   forgot: function* (action: any) {

  //     try {
  //       const { data, status } = yield call(
  //         LoginService.forgotPassword, action.payload.data
  //       );
  //       if (status == 200) {
  //         yield put(
  //           LoginActions.password.success(data)
  //         )
  //       }

  //     } catch (error) {
  //       yield put(
  //         LoginActions.password.fail(error.response.data?.errorCode)
  //       );
  //     }
  //   }
  // }
}

export default [
  takeLatest(
    Login.LOG_USER_CREDNTIALS,
    LoginSagas.userCredentials.log
  )
  // ,
  // takeLatest(
  //   Login.FORGOT_PASSWORD,
  //   LoginSagas.password.forgot
  // )
]