export interface IRawDrug 
{
    id : string,
    itemName : string,
    expirationDate : string,
    category : string,
    amount : number,
    measurementUnit : string
}
export interface IRawDrugsItemInitInfo  {
    itemName : string,
    expirationDate : string,
    category : string,
    measurementUnit : string,
    amount : number
}