import { IEditDrugItemResponse, RawDrugsInterface } from "../Interfaces/RawDrugsInterface";

const RawDrugsData : Array<RawDrugsInterface> = [];

const EditData : IEditDrugItemResponse = {
    message : "",
    rawDrugId : "",
    isSuccessful : false
}

export const RawDrugsInitState = {
    data : RawDrugsData,
    isLoading : false,
    AddRawDrug : {
        data : {},
        isLoading : false
    },
    EditRawDrug : {
        data : EditData,
        isLoading : false
    },
    AddTransactionHistory : {
        data : {},
        isLoading : false
    },
    DeleteRawDrug : {
        data : {},
        isLoading : false
    }
}



