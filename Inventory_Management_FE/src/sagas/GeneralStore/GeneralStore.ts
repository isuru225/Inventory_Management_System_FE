import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { GeneralStore } from "../../actions/Constants/Actions/GeneralStrore.ts";
import { GeneralStoreActions } from "../../actions/GeneralStore/index.ts";
import { GeneralStoreService } from "../../services/GeneralStore/index.ts";

export const GeneralStoreSagas = {
    generalStoreItems: {
        get: function* (action: any) {
            console.log("raven");
            try {
                const { data, status } = yield call(
                    GeneralStoreService.getAllGeneralStoreItems, action.payload.data
                );
                if (status == 200) {
                    console.log("light234", data);
                    yield put(
                        GeneralStoreActions.allGeneralStoreItems.success(data)
                    )
                }

            } catch (error) {
                yield put(
                    GeneralStoreActions.allGeneralStoreItems.fail(error.response.data?.errorCode)
                );
            }
        },
        add: function* (action: any) {
            console.log("raven");
            try {
                const { data, status } = yield call(
                    GeneralStoreService.addNewGeneralStoreItem, action.payload.data
                );
                if (status == 200) {
                    console.log("light234", data);
                    yield put(
                        GeneralStoreActions.addGeneralStoreItem.success(data)
                    )
                }

            } catch (error) {
                yield put(
                    GeneralStoreActions.addGeneralStoreItem.fail(error.response.data?.errorCode)
                );
            }
        },
        edit: function* (action: any) {

            try {
                const { data, status } = yield call(
                    GeneralStoreService.editGeneralStoreItem, action.payload.data
                );
                if (status == 200) {
                    console.log("light234", data);
                    yield put(
                        GeneralStoreActions.editGeneralStoreItem.success(data)
                    )
                }
            } catch (error) {
                yield put(
                    GeneralStoreActions.editGeneralStoreItem.fail(error.response.data?.errorCode)
                );
            }
        }
        ,
        transaction: function* (action: any) {

            try {
                const { data, status } = yield call(
                    GeneralStoreService.addTransactionRecord, action.payload.data
                );
                if (status == 200) {
                    console.log("light234", data);
                    yield put(
                        GeneralStoreActions.updateTransationHistory.success(data)
                    )
                }
            } catch (error) {
                yield put(
                    GeneralStoreActions.updateTransationHistory.fail(error.response.data?.errorCode)
                );
            }
        }
        ,
        delete: function* (action: any) {

            try {
                const { data, status } = yield call(
                    GeneralStoreService.deleteGeneralStoreItem, action.payload.data
                );
                if (status == 200) {
                    console.log("light234", data);
                    yield put(
                        GeneralStoreActions.deleteGeneralStoreItem.success(data)
                    )
                }
            } catch (error) {
                yield put(
                    GeneralStoreActions.deleteGeneralStoreItem.fail(error.response.data?.errorCode)
                );
            }
        }
    }

}

export default [
    takeLatest(
        GeneralStore.GET_GENERAL_STORE_ITEM,
        GeneralStoreSagas.generalStoreItems.get
    )
    ,
    takeLatest(
        GeneralStore.ADD_NEW_GENERAL_STORE_ITEM_ITEM,
        GeneralStoreSagas.generalStoreItems.add
    ),
    takeLatest(
        GeneralStore.EDIT_GENERAL_STORE_ITEM,
        GeneralStoreSagas.generalStoreItems.edit
    )
    ,
    takeLatest(
        GeneralStore.ADD_GENERAL_STORE_RECORD_TO_TRANSACTION_HISTORY,
        GeneralStoreSagas.generalStoreItems.transaction
    )
    ,
    takeLatest(
        GeneralStore.DELETE_GENERAL_STORE_ITEM,
        GeneralStoreSagas.generalStoreItems.delete
    )
]