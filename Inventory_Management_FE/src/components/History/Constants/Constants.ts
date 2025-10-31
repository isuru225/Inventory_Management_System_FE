export const HistoryRecord = {
    key: "",
    itemName: "",
    initialAmount : 0,
    currentAmount: 0,
    adjustedAmount : 0,
    measurementUnit : "",
    AdjustmentType : "",
    storeKeeper: "",
    time: "",
    Reason: ""
}

export enum AdjustmentTypes {
    INCREMENT = "1",
    DECREMENT = "0"
}

export enum AdjustmentTypesString {
    INCREMENT = "Increment",
    DECREMENT = "Decrement"
}

export enum General {
    EMPTY_VALUE = ""
}

export enum ERROR_MESSAGE {
    NO_RECORDS = "No records are selected!Please set date range to select records."
}

export const AdjustmentType = [
    {label : 'Increase' , value : '1'},
    {label : 'Decrease' , value : '0'}
]