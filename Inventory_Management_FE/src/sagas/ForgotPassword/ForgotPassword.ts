import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { ForgotPassword } from "../../actions/Constants/Actions/ForgotPassword.ts";
import { ForgotPasswordService } from "../../services/ForgotPassword/index.ts";
import { forgotPasswordActions } from "../../actions/ForgotPassword/ForgotPassword.ts";

export const ForgotPasswordSagas = {
  password : {
    forgot : function* (action: any) {
      
      try {
        const { data, status } = yield call(
          ForgotPasswordService.forgotPassword , action.payload.data
        );
        if (status == 200) {
          yield put(
            forgotPasswordActions.password.success(data)
          )
        }

      } catch (error) {
        yield put(
            forgotPasswordActions.password.fail(error.response.data?.errorCode)
        );
      }
    },
  }
}

export default [
    takeLatest(
      ForgotPassword.FORGOT_PASSWORD,
      ForgotPasswordSagas.password.forgot
    )
  ]