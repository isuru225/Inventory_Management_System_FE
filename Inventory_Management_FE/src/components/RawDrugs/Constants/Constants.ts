import { IRawDrugsItemInitInfo, IRawDrugInfoForEditModal } from "../Interfaces/Interfaces.ts";

export const rawDrugsItemInitInfo : IRawDrugsItemInitInfo = {
    itemName : "",
    expirationDate : "",
    category : "",
    measurementUnit : "",
    amount : 0,
    reorderPoint : 0
}

export const rawDrugsItemInitInfoForEditModal : IRawDrugInfoForEditModal = {
    itemNameEdit : "",
    expirationDateEdit : "",
    categoryEdit : "",
    measurementUnitEdit : "",
    amountEdit : 0,
    reorderPointEdit : 0
}

export enum MeasurementUnits {
    GRAMS = "g",
    KILO_GRAMS = "kg",
    MILI_GRAMS = "mg",
    LITER = "l",
    MILI_LITER = "ml",
    NONE = ""
}

export enum General {
    EMPTY_VALUE = ""
}

export enum EditUserInfos {
    EMPTY_FULL_NAME = "",
    EMPTY_USER_ID = ""
}

export enum Component {
    COMPONENT_NAME = "rawDrugs"
}

export const measurementUnitsArray = ["","g","kg","mg","l","ml"];