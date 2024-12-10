export interface RawDrugsInterface {
    id : string
    itemName : string,
    expirationDate : string,
    category : string,
    amount : number,
    measurementUnit : string
}

export interface IEditDrugItemResponse {
    message : string,
    rawDrugId : string,
    isSuccessful : boolean
}