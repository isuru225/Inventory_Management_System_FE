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
    EDIT_RAW_DRUG_ITEM_FAIL

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
}