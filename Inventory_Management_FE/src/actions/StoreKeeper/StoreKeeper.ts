import { StoreKeeper } from "../Constants/Actions/StoreKeeper.ts"

const
  {
    UPDATE_INVENTORY_RAW_DRUGS,
    UPDATE_INVENTORY_RAW_DRUGS_SUCCESS,
    UPDATE_INVENTORY_RAW_DRUGS_FAIL,
    UPDATE_INVENTORY_FINISHED_DRUGS,
    UPDATE_INVENTORY_FINISHED_DRUGS_SUCCESS,
    UPDATE_INVENTORY_FINISHED_DRUGS_FAIL,
    UPDATE_INVENTORY_GENERAL_STORE,
    UPDATE_INVENTORY_GENERAL_STORE_SUCCESS,
    UPDATE_INVENTORY_GENERAL_STORE_FAIL
  } = StoreKeeper

 
export const StoreKeeperActions = {
  rawDrugInventory: {
    update: (data: any) => ({

      type: UPDATE_INVENTORY_RAW_DRUGS,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: UPDATE_INVENTORY_RAW_DRUGS_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: UPDATE_INVENTORY_RAW_DRUGS_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  finishedDrugInventory: {
    update: (data: any) => ({

      type: UPDATE_INVENTORY_FINISHED_DRUGS,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: UPDATE_INVENTORY_FINISHED_DRUGS_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: UPDATE_INVENTORY_FINISHED_DRUGS_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
  ,
  generalStoreInventory: {
    update: (data: any) => ({

      type: UPDATE_INVENTORY_GENERAL_STORE,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: UPDATE_INVENTORY_GENERAL_STORE_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: UPDATE_INVENTORY_GENERAL_STORE_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })
  }
}