export interface GeneralStoreItemInterface {
    id : string
    itemName : string,
    amount : number
}

export interface IEditGeneralStoreItemResponse {
    message : string,
    generalStoreItemId : string,
    isSuccessful : boolean
}