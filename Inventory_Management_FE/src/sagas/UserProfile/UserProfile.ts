import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { UserProfile } from "../../actions/Constants/Actions/UserProfile.ts";
import { UserProfileActions } from "../../actions/UserProfile/index.ts";
import { UserProfileService } from "../../services/UserProfile/index.ts";

export const UserProfileSagas = {
    userProfile: {
        get: function* (action: any) {
            
            try {
                const { data, status } = yield call(
                    UserProfileService.getUserProfileInfo, action.payload.data
                );
                if (status == 200) {
                    
                    yield put(
                        UserProfileActions.profileInfo.success(data)
                    )
                }
            } catch (error: any) {
                yield put(
                    UserProfileActions.profileInfo.fail(error.response.data?.errorCode)
                );
            }
        },
    }
}

export default [
    takeLatest(
        UserProfile.GET_PROFILE_INFO,
        UserProfileSagas.userProfile.get
    )
]