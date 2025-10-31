import { DateFormatter } from "../../../GlobalFunctions/Functions.tsx"
import { AdjustmentTypes, AdjustmentTypesString } from "../Constants/Constants.ts"
import { IHistoryRecord } from "../Interfaces/Interfaces.ts"

export const historyRecoredFormatter = (data: Array<IHistoryRecord>): any => {
    
    const updatedData = data?.map((record: IHistoryRecord) => {

        const updatedRecord =
        {
            ...record,
            initialAmount: `${record?.initialAmount} ${record?.measurementUnit}`,
            currentAmount: `${record?.currentAmount} ${record?.measurementUnit}`,
            adjustedAmount: `${record?.adjustedAmount} ${record?.measurementUnit} (${record?.adjustmentType == AdjustmentTypes.INCREMENT ? AdjustmentTypesString.INCREMENT : AdjustmentTypesString.DECREMENT})`,
            time: DateFormatter(record?.time),
            reason: record?.reason == "" || record?.reason == undefined || record?.reason == null ? "-" : record?.reason
        }

        return updatedRecord;
    }).sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

    return updatedData;
}

export const recordsSorterByDate = (data: Array<IHistoryRecord>, startEndDateInfo: Array<string>): Array<IHistoryRecord> => {
    const sortedRecords = data?.filter((record: IHistoryRecord) => {
        const startDate = new Date(startEndDateInfo[0]);
        const endDate = new Date(startEndDateInfo[1]);
        const dateToCheck = new Date(record?.time);

        // Normalize to midnight (ignore time)
        dateToCheck.setHours(0, 0, 0, 0);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);

        if (dateToCheck >= startDate && dateToCheck <= endDate) {
            return record;
        }
    })

    return sortedRecords;
}


export const csvFileNameHandler = (startEndDateInfo: Array<string>): string => {
    return `${startEndDateInfo[0]}_to_${startEndDateInfo[1]}_inventory_transactions`;
}

export const exportToCSV = (filename: string, rows: IHistoryRecord[]) => {
    if (!rows || rows.length === 0) {
        console.error("No data to export");
        return;
    }

    const formattedRows = rows?.map((record: IHistoryRecord) => {
        const {
            id,
            adjustedAmount,
            adjustmentType,
            currentAmount,
            initialAmount,
            itemName,
            measurementUnit,
            reason,
            storeKeeper,
            time } = record;

        return {
            id,
            itemName,
            initialAmount: `${initialAmount} ${measurementUnit}`,
            currentAmount: `${currentAmount} ${measurementUnit}`,
            adjustedAmount: `${adjustedAmount} ${measurementUnit}`,
            adjustmentType: `${adjustmentType == AdjustmentTypes.INCREMENT ? AdjustmentTypesString.INCREMENT : AdjustmentTypesString.DECREMENT}`,
            reason,
            storeKeeper,
            time
        }

    })

    

    const headers = Object.keys(formattedRows[0]);

    const csvContent = [
        headers.join(","), // header row
        ...formattedRows.map(row =>
            headers
                .map(header => JSON.stringify((row as any)[header] ?? ""))
                .join(",")
        ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename.endsWith(".csv") ? filename : `${filename}.csv`;
    link.click();
};
