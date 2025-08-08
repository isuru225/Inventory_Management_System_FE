import { ISelectedItemInfo } from "../Interfaces/Interfaces.js"

export const InventoryFormInitInfo = {
    itemName : "",
    amount : 0,
    amountWithUnit : "",
    adjustmentType : "1",
    amountAdjusted : 0,
    reason : ""
}


export const SelectedItemInfo : ISelectedItemInfo = {
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

export enum Component {
    COMPONENT_NAME_RAW_DRUG = "rawDrugs",
    COMPONENT_NAME_FINISHED_DRUG = "finishedDrugs",
    COMPONENT_NAME_GENERAL_STORE = "generalStore"
}

export enum Headings {
    RAW_DRUG = "Raw Drug - Store Keeper",
    FINISHED_DRUG = "Finished Drug - Store Keeper",
    GENERAL_STORE = "General Store - Store Keeper"
}