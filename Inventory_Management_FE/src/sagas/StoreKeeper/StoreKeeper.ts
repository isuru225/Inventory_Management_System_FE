import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { StoreKeeper } from "../../actions/Constants/Actions/StoreKeeper.ts";
import { StoreKeeperActions } from "../../actions/StoreKeeper/index.ts";
import { StoreKeeperService } from "../../services/StoreKeeper/index.ts";

export const StoreKeeperSagas = {
    rawDrugInventory: {
        update: function* (action: any) {
            console.log("raven");
            try {
                const { data, status } = yield call(
                    StoreKeeperService.updateRawDrugInventory, action.payload.data
                );
                if (status == 200) {
                    console.log("light234", data);
                    yield put(
                        StoreKeeperActions.rawDrugInventory.success(data)
                    )
                }
            } catch (error) {
                yield put(
                    StoreKeeperActions.rawDrugInventory.fail(error.response.data?.errorCode)
                );
            }
        },
    }
}

export default [
    takeLatest(
        StoreKeeper.UPDATE_INVENTORY_RAW_DRUGS,
        StoreKeeperSagas.rawDrugInventory.update
    )
]