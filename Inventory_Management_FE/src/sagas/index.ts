import { HomeSagas } from "./Home/index.ts"
import { LoginSagas } from "./Login/index.ts"
import { DashboardSagas } from "./Dashboard/index.ts"
import { TasksSagas } from "./Tasks/index.ts"
import { RawDrugsSagas } from "./RawDrugs/index.ts"
import { StoreKeeperSagas } from "./StoreKeeper/index.ts"
import { HistorySagas } from "./History/index.ts"
import { NotificationSagas } from "./Notification/index.ts"
import { RegisterSagas } from "./Register/index.ts"
import { RegisteredUserSagas } from "./RegisteredUser/index.ts"

export default [ 
    ...LoginSagas,
    ...HomeSagas,
    ...DashboardSagas,
    ...TasksSagas,
    ...RawDrugsSagas,
    ...StoreKeeperSagas,
    ...HistorySagas,
    ...NotificationSagas,
    ...RegisterSagas,
    ...RegisteredUserSagas
]

