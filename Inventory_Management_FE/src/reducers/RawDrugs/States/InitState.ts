import { RawDrugsInterface } from "../Interfaces/RawDrugsInterface";

const RawDrugsData : Array<RawDrugsInterface> = [];

export const RawDrugsInitState = {
    data : RawDrugsData,
    isLoading : false,
    AddRawDrug : {
        data : {},
        isLoading : false
    },
    EditRawDrug : {
        data : {},
        isLoading : false
    }
}

