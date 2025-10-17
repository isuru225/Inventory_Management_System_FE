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
          console.log("Jaguar",data);
          yield put(
            forgotPasswordActions.password.success(data)
          )
        }

      } catch (error) {
        console.log("Jaguar22",error);
        yield put(
            forgotPasswordActions.password.fail(error.response.data)
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