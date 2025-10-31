export interface IHistoryRecord {
    id: string,
    itemName: string,
    initialAmount : number,
    currentAmount: number,
    adjustedAmount : number,
    measurementUnit : string,
    adjustmentType : string,
    storeKeeper: string,
    time: string,
    reason: string
}