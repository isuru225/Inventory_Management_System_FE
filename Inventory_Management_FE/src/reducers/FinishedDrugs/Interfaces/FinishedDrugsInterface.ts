export interface FinishedDrugsInterface {
    id : string
    itemName : string,
    expirationDate : string,
    category : string,
    amount : number,
    measurementUnit : string
}

export interface IEditFinishedDrugItemResponse {
    message : string,
    finishedDrugId : string,
    isSuccessful : boolean
}