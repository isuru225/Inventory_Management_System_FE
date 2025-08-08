import { IEditGeneralStoreItemResponse, GeneralStoreItemInterface } from "../Interfaces/GeneralStoreInterface.ts";

const GeneralStoreItemData : Array<GeneralStoreItemInterface> = [];

const EditGeneralStoreItemData : IEditGeneralStoreItemResponse = {
    message : "",
    generalStoreItemId : "",
    isSuccessful : false
}

export const GeneralStoreItemInitState = {
    data : GeneralStoreItemData,
    isLoading : false,
    AddGeneralStoreItem : {
        data : {},
        isLoading : false
    },
    EditGeneralStoreItem : {
        data : EditGeneralStoreItemData,
        isLoading : false
    },
    AddTransactionHistory : {
        data : {},
        isLoading : false
    },
    DeleteGeneralStoreItem : {
        data : {},
        isLoading : false
    }
}



