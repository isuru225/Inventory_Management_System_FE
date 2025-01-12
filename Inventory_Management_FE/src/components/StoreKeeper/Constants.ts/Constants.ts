import { ISelectedRawDrugItemInfo } from "../Interfaces/Interfaces.ts"

export const InventoryFormInitInfo = {
    itemName : "",
    amount : 0,
    amountWithUnit : "",
    adjustmentType : "1",
    amountAdjusted : 0,
    reason : ""
}


export const SelectedRawDrugItemInfo : ISelectedRawDrugItemInfo = {
    id : "",
    measurementUnit : ""
}

export enum General {
    EMPTY_VALUE = ""
}

export enum EditUserInfos {
    EMPTY_FULL_NAME = "",
    EMPTY_USER_ID = ""
}

export enum AdjustmentTypes {
    INCREMENT = "1",
    DECREMENT = "0"
}

export const AdjustmentType = [
    {label : 'Increase' , value : '1'},
    {label : 'Decrease' , value : '0'}
]