import { IEditFinishedDrugItemResponse, FinishedDrugsInterface } from "../Interfaces/FinishedDrugsInterface.ts";

const FinishedDrugsData : Array<FinishedDrugsInterface> = [];

const EditFinishedDrugData : IEditFinishedDrugItemResponse = {
    message : "",
    finishedDrugId : "",
    isSuccessful : false
}

export const FinishedDrugsInitState = {
    data : FinishedDrugsData,
    isLoading : false,
    AddFinishedDrug : {
        data : {},
        isLoading : false
    },
    EditFinishedDrug : {
        data : EditFinishedDrugData,
        isLoading : false
    },
    AddTransactionHistory : {
        data : {},
        isLoading : false
    },
    DeleteFinishedDrug : {
        data : {},
        isLoading : false
    }
}



