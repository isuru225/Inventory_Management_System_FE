import React from "react"
import moment from 'moment';
import { IRawDrug } from "../Interfaces/Interfaces.ts";

export const MeasurementOptionsHandler = (measurementOptions : Array<string>) => {
    const options = measurementOptions?.map((measurement: any) => {
        return (
            <option value={measurement}>{measurement}</option>
        )
    })

    return options;
}

export const TableDataHandler = (data : Array<IRawDrug>) => {
    console.log("Shark",data);
    const formattedData = data?.map((rawDrug : IRawDrug , index : number)=>{
        const dateOnly = moment(rawDrug.expirationDate).format("YYYY-MM-DD");
        return {...rawDrug, key : index.toString(), expirationDate : dateOnly}
    });
    console.log("TigerShark",formattedData);
    return formattedData;
}