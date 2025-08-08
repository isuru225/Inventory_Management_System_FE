import { GeneralStore } from "../Constants/Actions/GeneralStrore.ts"

const
  {
    GET_GENERAL_STORE_ITEM ,
    GET_GENERAL_STORE_ITEM_SUCCESS,
    GET_GENERAL_STORE_ITEM_FAIL,
    ADD_NEW_GENERAL_STORE_ITEM_ITEM,
    ADD_NEW_GENERAL_STORE_ITEM_SUCCESS,
    ADD_NEW_GENERAL_STORE_ITEM_FAIL,
    EDIT_GENERAL_STORE_ITEM,
    EDIT_GENERAL_STORE_ITEM_SUCCESS,
    EDIT_GENERAL_STORE_ITEM_FAIL,
    ADD_GENERAL_STORE_RECORD_TO_TRANSACTION_HISTORY,
    ADD_GENERAL_STORE_RECORD_TO_TRANSACTION_HISTORY_SUCCESS,
    ADD_GENERAL_STORE_RECORD_TO_TRANSACTION_HISTORY_FAIL,
    DELETE_GENERAL_STORE_ITEM,
    DELETE_GENERAL_STORE_ITEM_SUCCESSFUL,
    DELETE_GENERAL_STORE_ITEM_FAIL

  } = GeneralStore


export const GeneralStoreActions = {
  allGeneralStoreItems: {
    get: (data: any) => ({

      type: GET_GENERAL_STORE_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: GET_GENERAL_STORE_ITEM_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: GET_GENERAL_STORE_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  addGeneralStoreItem: {
    add: (data: any) => ({
      type: ADD_NEW_GENERAL_STORE_ITEM_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: ADD_NEW_GENERAL_STORE_ITEM_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: ADD_NEW_GENERAL_STORE_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  editGeneralStoreItem: {
    edit: (data: any) => ({
      type: EDIT_GENERAL_STORE_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: EDIT_GENERAL_STORE_ITEM_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: EDIT_GENERAL_STORE_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  updateTransationHistory : {
    edit: (data: any) => ({
      type: ADD_GENERAL_STORE_RECORD_TO_TRANSACTION_HISTORY,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: ADD_GENERAL_STORE_RECORD_TO_TRANSACTION_HISTORY_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: ADD_GENERAL_STORE_RECORD_TO_TRANSACTION_HISTORY_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  deleteGeneralStoreItem : {
    delete: (data: any) => ({
      type: DELETE_GENERAL_STORE_ITEM,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: DELETE_GENERAL_STORE_ITEM_SUCCESSFUL,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: DELETE_GENERAL_STORE_ITEM_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
}