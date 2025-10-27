import { DateFormatter } from "../../../GlobalFunctions/Functions.tsx"
import { AdjustmentTypes, AdjustmentTypesString } from "../Constants/Constants.ts"
import { IHistoryRecord } from "../Interfaces/Interfaces.ts"

export const historyRecoredFormatter = (data : Array<IHistoryRecord>) : any => {
    
    const updatedData = data?.map((record : IHistoryRecord)=>{
        const updatedRecord = 
        {
            ...record,
            initialAmount : `${record?.initialAmount} ${record?.measurementUnit}`,
            currentAmount : `${record?.currentAmount} ${record?.measurementUnit}`,
            adjustedAmount : `${record?.adjustedAmount} ${record?.measurementUnit} (${record?.adjustmentType == AdjustmentTypes.INCREMENT ? AdjustmentTypesString.INCREMENT : AdjustmentTypesString.DECREMENT})`,
            time : DateFormatter(record?.time),
            reason : record?.reason == "" || record?.reason == undefined || record?.reason == null ? "-" : record?.reason
        }

        return updatedRecord;
    }).sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

    return updatedData;
}
