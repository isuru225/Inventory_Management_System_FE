import React from "react"
import moment from 'moment';
import { IEditUserInfos, IRawDrug } from "../Interfaces/Interfaces.ts";
import { JWTDecoder } from "../../../GlobalFunctions/Functions.tsx";
import { useNavigate } from 'react-router-dom';
import { AdjustmentTypes, EditUserInfos } from "../Constants/Constants.ts"

export const TableDataHandler = (data : Array<IRawDrug>) => {
    console.log("Shark",data);
    const formattedData = data?.map((rawDrug : IRawDrug , index : number)=>{
        const dateOnly = moment(rawDrug.expirationDate).format("YYYY-MM-DD");
        return {...rawDrug, amountWithUnit : `${rawDrug.amount} ${rawDrug.measurementUnit}`,key : index.toString(), expirationDate : dateOnly}
    });
    console.log("TigerShark",formattedData);
    return formattedData;
}

export const BalanceAmountCalculator = (currentAmount : number , adjustmentAmount : number, adjustmentType : string) : Number => {
    if(currentAmount>=adjustmentAmount){
        if(adjustmentType == AdjustmentTypes.INCREMENT){
            return currentAmount + adjustmentAmount;
        }else if(adjustmentType == AdjustmentTypes.DECREMENT){      
            return currentAmount - adjustmentAmount;
        }
    }
    return -1;
}