import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { FinishedDrugs } from "../../actions/Constants/Actions/FinishedDrugs.ts";
import { FinishedDrugsActions } from "../../actions/FinishedDrugs/index.ts";
import { FinishedDrugsService } from "../../services/FinishedDrugs/index.ts";

export const FinishedDrugsSagas = {
    finishedDrugItems: {
        get: function* (action: any) {
            
            try {
                const { data, status } = yield call(
                    FinishedDrugsService.getAllFinishedDrugs, action.payload.data
                );
                if (status == 200) {
                    
                    yield put(
                        FinishedDrugsActions.allFinishedDrugItems.success(data)
                    )
                }

            } catch (error: any) {
                yield put(
                    FinishedDrugsActions.allFinishedDrugItems.fail(error.response.data?.errorCode)
                );
            }
        },
        add: function* (action: any) {
            
            try {
                const { data, status } = yield call(
                    FinishedDrugsService.addNewFinishedDrug, action.payload.data
                );
                if (status == 200) {
                    
                    yield put(
                        FinishedDrugsActions.addFinishedDrugItem.success(data)
                    )
                }

            } catch (error: any) {
                yield put(
                    FinishedDrugsActions.addFinishedDrugItem.fail(error.response.data?.errorCode)
                );
            }
        },
        edit: function* (action: any) {

            try {
                const { data, status } = yield call(
                    FinishedDrugsService.editFinishedDrug, action.payload.data
                );
                if (status == 200) {
                    
                    yield put(
                        FinishedDrugsActions.editFinishedDrugItem.success(data)
                    )
                }
            } catch (error: any) {
                yield put(
                    FinishedDrugsActions.editFinishedDrugItem.fail(error.response.data?.errorCode)
                );
            }
        }
        ,
        transaction: function* (action: any) {

            try {
                const { data, status } = yield call(
                    FinishedDrugsService.addTransactionRecord, action.payload.data
                );
                if (status == 200) {
                    
                    yield put(
                        FinishedDrugsActions.updateTransationHistory.success(data)
                    )
                }
            } catch (error: any) {
                yield put(
                    FinishedDrugsActions.updateTransationHistory.fail(error.response.data?.errorCode)
                );
            }
        }
        ,
        delete: function* (action: any) {

            try {
                const { data, status } = yield call(
                    FinishedDrugsService.deleteFinishedDrug, action.payload.data
                );
                if (status == 200) {
                    
                    yield put(
                        FinishedDrugsActions.deleteFinishedDrug.success(data)
                    )
                }
            } catch (error: any) {
                yield put(
                    FinishedDrugsActions.deleteFinishedDrug.fail(error.response.data?.errorCode)
                );
            }
        }
    }

}

export default [
    takeLatest(
        FinishedDrugs.GET_FINISHED_DRUG_ITEM,
        FinishedDrugsSagas.finishedDrugItems.get
    )
    ,
    takeLatest(
        FinishedDrugs.ADD_NEW_FINISHED_DRUG_ITEM,
        FinishedDrugsSagas.finishedDrugItems.add
    ),
    takeLatest(
        FinishedDrugs.EDIT_FINISHED_DRUG_ITEM,
        FinishedDrugsSagas.finishedDrugItems.edit
    )
    ,
    takeLatest(
        FinishedDrugs.ADD_FINISHED_DRUG_RECORD_TO_TRANSACTION_HISTORY,
        FinishedDrugsSagas.finishedDrugItems.transaction
    )
    ,
    takeLatest(
        FinishedDrugs.DELETE_FINISHED_DRUG_ITEM,
        FinishedDrugsSagas.finishedDrugItems.delete
    )
]