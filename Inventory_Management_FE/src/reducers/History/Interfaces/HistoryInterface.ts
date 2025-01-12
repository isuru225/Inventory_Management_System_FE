
interface IDeleteHistory {
    data: object,
    isLoading: boolean
}

export interface IHistory {
    data: Array<object>,
    isLoading: boolean,
    deleteHistoryRecordStatus: IDeleteHistory
}