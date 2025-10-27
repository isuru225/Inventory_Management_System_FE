import { combineReducers } from "redux"

import {
HomeReducer,
LoginReducer,
DashboardReducer,
RawDrugsReducer,
StoreKeeperReducer,
HistoryReducer,
NotificationReducer,
RegisterReducer,
RegisteredUserReducer,
FinishedDrugsReducer,
PasswordResetReducer,
ForgotPasswordReducer
} from "./reducers/index.ts"

export default combineReducers({
    HomeReducer,
    LoginReducer,
    DashboardReducer,
    RawDrugsReducer,
    StoreKeeperReducer,
    HistoryReducer,
    NotificationReducer,
    RegisterReducer,
    RegisteredUserReducer,
    FinishedDrugsReducer,
    PasswordResetReducer,
    ForgotPasswordReducer
})