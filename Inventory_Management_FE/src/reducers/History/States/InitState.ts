import { IHistory } from "../Interfaces/HistoryInterface.ts";

export const HistoryInitState : IHistory = {
    data : [],
    isLoading : false,
    deleteHistoryRecordStatus : {
        data : {},
        isLoading : false
    }
}



