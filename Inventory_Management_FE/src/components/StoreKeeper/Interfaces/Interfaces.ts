export interface IRawDrug 
{
    id : string,
    itemName : string,
    expirationDate : string,
    category : string,
    amount : number,
    amountWithUnit : string,
    measurementUnit : string
}
export interface IInventoryFormInitInfo  {
    itemName : string,
    amount : number,
    amountWithUnit : string,
    adjustmentType : string,
    amountAdjusted : number,
    reason : string
}

export interface ISelectedRawDrugItemInfo {
    id : string,
    measurementUnit : string
}

export interface IEditUserInfos {
    userId : string,
    fullName : string
}