import { StoreKeeper } from "../Constants/Actions/StoreKeeper.ts"

const
  {
    UPDATE_INVENTORY_RAW_DRUGS,
    UPDATE_INVENTORY_RAW_DRUGS_SUCCESS,
    UPDATE_INVENTORY_RAW_DRUGS_FAIL
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
  
}