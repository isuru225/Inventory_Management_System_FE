import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { History } from "../../actions/Constants/Actions/History.ts";
import { HistoryActions } from "../../actions/History/index.ts";
import { HistoryService } from "../../services/History/index.ts";

export const HistoySagas = {
    historyRecords: {
        get: function* (action: any) {
            
            try {
                const { data, status } = yield call(
                    HistoryService.getAllHistoryRecords, action.payload.data
                );
                if (status == 200) {
                    
                    yield put(
                        HistoryActions.allHistoryRecords.success(data)
                    )
                }
            } catch (error: any) {
                yield put(
                    HistoryActions.allHistoryRecords.fail(error.response.data?.errorCode)
                );
            }
        },
    }
    ,
    historyRecord: {
        delete: function* (action: any) {
            
            try {
                const { data, status } = yield call(
                    HistoryService.deleteAHistoryRecord, action.payload.data
                );
                if (status == 200) {
                    
                    yield put(
                        HistoryActions.historyRecord.success(data)
                    )
                }
            } catch (error: any) {
                yield put(
                    HistoryActions.historyRecord.fail(error.response.data?.errorCode)
                );
            }
        },
    }
}

export default [
    takeLatest(
        History.GET_ALL_HISTORY_RECORDS,
        HistoySagas.historyRecords.get
    )
    ,
    takeLatest(
        History.DELETE_A_HISTORY_RECORD,
        HistoySagas.historyRecord.delete
    )
]