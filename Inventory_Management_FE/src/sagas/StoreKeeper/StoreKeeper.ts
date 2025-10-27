import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { StoreKeeper } from "../../actions/Constants/Actions/StoreKeeper.ts";
import { StoreKeeperActions } from "../../actions/StoreKeeper/index.ts";
import { StoreKeeperService } from "../../services/StoreKeeper/index.ts";

export const StoreKeeperSagas = {
    rawDrugInventory: {
        update: function* (action: any) {
            
            try {
                const { data, status } = yield call(
                    StoreKeeperService.updateRawDrugInventory, action.payload.data
                );
                if (status == 200) {
                    
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
    ,
    finishedDrugInventory: {
        update: function* (action: any) {
            
            try {
                const { data, status } = yield call(
                    StoreKeeperService.updateFinishedDrugInventory, action.payload.data
                );
                if (status == 200) {
                    
                    yield put(
                        StoreKeeperActions.finishedDrugInventory.success(data)
                    )
                }
            } catch (error) {
                yield put(
                    StoreKeeperActions.finishedDrugInventory.fail(error.response.data?.errorCode)
                );
            }
        },
    }
    ,
    generalStoreInventory: {
        update: function* (action: any) {
            
            try {
                const { data, status } = yield call(
                    StoreKeeperService.updateGeneralStoreInventory, action.payload.data
                );
                if (status == 200) {
                    
                    yield put(
                        StoreKeeperActions.generalStoreInventory.success(data)
                    )
                }
            } catch (error) {
                yield put(
                    StoreKeeperActions.generalStoreInventory.fail(error.response.data?.errorCode)
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
    ,
    takeLatest(
        StoreKeeper.UPDATE_INVENTORY_FINISHED_DRUGS,
        StoreKeeperSagas.finishedDrugInventory.update
    )
    ,
    takeLatest(
        StoreKeeper.UPDATE_INVENTORY_GENERAL_STORE,
        StoreKeeperSagas.generalStoreInventory.update
    )
]