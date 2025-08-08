import { FinishedDrugs } from "../Constants/Actions/FinishedDrugs.ts"

const
  {
    GET_FINISHED_DRUG_ITEM,
    GET_FINISHED_DRUG_ITEM_SUCCESS,
    GET_FINISHED_DRUG_ITEM_FAIL,
    ADD_NEW_FINISHED_DRUG_ITEM,
    ADD_NEW_FINISHED_DRUG_ITEM_SUCCESS,
    ADD_NEW_FINISHED_DRUG_ITEM_FAIL,
    EDIT_FINISHED_DRUG_ITEM,
    EDIT_FINISHED_DRUG_ITEM_SUCCESS,
    EDIT_FINISHED_DRUG_ITEM_FAIL,
    ADD_FINISHED_DRUG_RECORD_TO_TRANSACTION_HISTORY,
    ADD_FINISHED_DRUG_RECORD_TO_TRANSACTION_HISTORY_SUCCESS,
    ADD_FINISHED_DRUG_RECORD_TO_TRANSACTION_HISTORY_SUCCESS_FAIL,
    DELETE_FINISHED_DRUG_ITEM,
    DELETE_FINISHED_DRUG_ITEM_SUCCESSFUL,
    DELETE_FINISHED_DRUG_ITEM_FAIL

  } = FinishedDrugs


export const FinishedDrugsActions = {
  allFinishedDrugItems: {
    get: (data: any) => ({

      type: GET_FINISHED_DRUG_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: GET_FINISHED_DRUG_ITEM_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: GET_FINISHED_DRUG_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  addFinishedDrugItem: {
    add: (data: any) => ({
      type: ADD_NEW_FINISHED_DRUG_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: ADD_NEW_FINISHED_DRUG_ITEM_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: ADD_NEW_FINISHED_DRUG_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  editFinishedDrugItem: {
    edit: (data: any) => ({
      type: EDIT_FINISHED_DRUG_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: EDIT_FINISHED_DRUG_ITEM_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: EDIT_FINISHED_DRUG_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  updateTransationHistory : {
    edit: (data: any) => ({
      type: ADD_FINISHED_DRUG_RECORD_TO_TRANSACTION_HISTORY,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: ADD_FINISHED_DRUG_RECORD_TO_TRANSACTION_HISTORY_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: ADD_FINISHED_DRUG_RECORD_TO_TRANSACTION_HISTORY_SUCCESS_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  deleteFinishedDrug : {
    delete: (data: any) => ({
      type: DELETE_FINISHED_DRUG_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: DELETE_FINISHED_DRUG_ITEM_SUCCESSFUL,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: DELETE_FINISHED_DRUG_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
}