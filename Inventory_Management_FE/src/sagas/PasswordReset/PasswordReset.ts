import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { PasswordReset } from "../../actions/Constants/Actions/PasswordReset.ts";
import { PasswordResetService } from "../../services/PasswordReset/index.ts";
import { PasswordResetActions } from "../../actions/PasswordReset/PasswordReset.ts";

export const PasswordResetSagas = {
  password : {
    reset : function* (action: any) {
      
      try {
        const { data, status } = yield call(
          PasswordResetService.passwordReset , action.payload.data
        );
        if (status == 200) {
          yield put(
            PasswordResetActions.password.success(data)
          )
        }

      } catch (error) {
        yield put(
            PasswordResetActions.password.fail(error.response.data?.errorCode)
        );
      }
    },
  }
}

export default [
    takeLatest(
      PasswordReset.RESET_PASSWORD,
      PasswordResetSagas.password.reset
    )
  ]