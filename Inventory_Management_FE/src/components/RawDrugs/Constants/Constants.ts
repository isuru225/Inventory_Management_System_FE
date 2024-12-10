export const rawDrugsItemInitInfo = {
    itemName : "",
    expirationDate : "",
    category : "",
    measurementUnit : "",
    amount : 0
}

export const rawDrugsItemInitInfoForEditModal = {
    itemNameEdit : "",
    expirationDateEdit : "",
    categoryEdit : "",
    measurementUnitEdit : "",
    amountEdit : 0
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

export const measurementUnitsArray = ["","g","kg","mg","l","ml"];