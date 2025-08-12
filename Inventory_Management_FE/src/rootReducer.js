import { combineReducers } from "redux"
// import {
// changeState,
// updateSeatIDStringReducer,
// updateSelectedMovieIdReducer,
// }
// from './reducer'

import {
HomeReducer,
LoginReducer,
DashboardReducer,
TasksReducer,
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
    // changeState,
    // updateSeatIDStringReducer,
    // updateSelectedMovieIdReducer,

    HomeReducer,
    LoginReducer,
    DashboardReducer,
    TasksReducer,
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