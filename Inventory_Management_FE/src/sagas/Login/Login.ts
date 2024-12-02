import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { Login } from "../../actions/Constants/Actions/Login.ts";
import { LoginService } from "../../services/Login/index.ts";
import { LoginActions } from "../../actions/Login/Login.ts";

export const LoginSagas = {
  userCredentials : {
    log : function* (action: any) {
      
      try {
        const { data, status } = yield call(
          LoginService.logUserCredentials , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            LoginActions.userCredentials.success(data)
          )
        }

      } catch (error) {
        console.log("fish",error.response.data?.errorCode);
        console.log("fish222",typeof(error.response.data?.errorCode))
        yield put(
            LoginActions.userCredentials.fail(error.response.data?.errorCode)
        );
      }
    },
  }
}

export default [
    takeLatest(
      Login.LOG_USER_CREDNTIALS,
      LoginSagas.userCredentials.log
    )
  ]