import { History } from "../Constants/Actions/History.ts"

const
  {
    GET_ALL_HISTORY_RECORDS,
    GET_ALL_HISTORY_RECORDS_SUCCESS,
    GET_ALL_HISTORY_RECORDS_FAIL,
    DELETE_A_HISTORY_RECORD,
    DELETE_A_HISTORY_RECORD_SUCCESS,
    DELETE_A_HISTORY_RECORD_FAIL 
  } = History;

 
export const HistoryActions = {
  allHistoryRecords: {
    get: (data: any) => ({
      type: GET_ALL_HISTORY_RECORDS,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: GET_ALL_HISTORY_RECORDS_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: GET_ALL_HISTORY_RECORDS_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  historyRecord: {
    delete: (data: any) => ({
      type: DELETE_A_HISTORY_RECORD,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: DELETE_A_HISTORY_RECORD_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: DELETE_A_HISTORY_RECORD_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
}