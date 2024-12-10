import { RawDrugs } from "../Constants/Actions/RawDrugs.ts"

const
  {
    GET_RAW_DRUG_ITEM,
    GET_RAW_DRUG_ITEM_SUCCESS,
    GET_RAW_DRUG_ITEM_FAIL,
    ADD_NEW_RAW_DRUG_ITEM,
    ADD_NEW_RAW_DRUG_ITEM_SUCCESS,
    ADD_NEW_RAW_DRUG_ITEM_FAIL,
    EDIT_RAW_DRUG_ITEM,
    EDIT_RAW_DRUG_ITEM_SUCCESS,
    EDIT_RAW_DRUG_ITEM_FAIL,
    ADD_RECORD_TO_TRANSACTION_HISTORY,
    ADD_RECORD_TO_TRANSACTION_HISTORY_SUCCESS,
    ADD_RECORD_TO_TRANSACTION_HISTORY_SUCCESS_FAIL,
    DELETE_RAW_DRUG_ITEM,
    DELETE_RAW_DRUG_ITEM_SUCCESSFUL,
    DELETE_RAW_DRUG_ITEM_FAIL

  } = RawDrugs


export const RawDrugsActions = {
  allRawDrugItems: {
    get: (data: any) => ({

      type: GET_RAW_DRUG_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: GET_RAW_DRUG_ITEM_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: GET_RAW_DRUG_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  addNewDrugItem: {
    add: (data: any) => ({
      type: ADD_NEW_RAW_DRUG_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: ADD_NEW_RAW_DRUG_ITEM_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: ADD_NEW_RAW_DRUG_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  editRawDrugItem: {
    edit: (data: any) => ({
      type: EDIT_RAW_DRUG_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: EDIT_RAW_DRUG_ITEM_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: EDIT_RAW_DRUG_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  updateTransationHistory : {
    edit: (data: any) => ({
      type: ADD_RECORD_TO_TRANSACTION_HISTORY,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: ADD_RECORD_TO_TRANSACTION_HISTORY_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: ADD_RECORD_TO_TRANSACTION_HISTORY_SUCCESS_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  deleteRawDrug : {
    delete: (data: any) => ({
      type: DELETE_RAW_DRUG_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: DELETE_RAW_DRUG_ITEM_SUCCESSFUL,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: DELETE_RAW_DRUG_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
}