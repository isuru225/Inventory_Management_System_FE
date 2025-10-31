import React from "react"
import moment from 'moment';
import { IEditUserInfos, IFinishedDrug } from "../Interfaces/interfaces.ts";
import { JWTDecoder } from "../../../GlobalFunctions/Functions.tsx";
import { useNavigate } from 'react-router-dom';
import { EditUserInfos } from "../Constants/Constants.ts";



export const MeasurementOptionsHandler = (measurementOptions : Array<string>) => {
    const options = measurementOptions?.map((measurement: any) => {
        return (
            <option value={measurement}>{measurement}</option>
        )
    })

    return options;
}

export const TableDataHandler = (data : Array<IFinishedDrug>) => {
    
    const formattedData = data?.map((finishedDrug : IFinishedDrug , index : number)=>{
        const dateOnly = moment(finishedDrug.expirationDate).format("YYYY-MM-DD");
        return {
            ...finishedDrug, 
            amount : `${finishedDrug.amount} ${finishedDrug.measurementUnit}`, 
            reorderPoint: `${finishedDrug.reorderPoint} ${finishedDrug.measurementUnit}` ,
            key : index.toString(), expirationDate : dateOnly
        }
    });
    
    return formattedData;
}

export const extractNumber = (value : string) => {
    const match = value.match(/\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : 0;
  };


export const GetEditorInfos = () : IEditUserInfos =>  {
    const navigate = useNavigate();
    const encodedValue = localStorage.getItem('token');
    if (encodedValue !== null) {
      const decodedPayload = JWTDecoder(encodedValue);
      const { fullName, userId } = decodedPayload;
      //check the expiration time of the token
      return {
        userId,
        fullName
      }
    } else {
        navigate('/login');
        return {
            userId : EditUserInfos.EMPTY_USER_ID,
            fullName : EditUserInfos.EMPTY_FULL_NAME
        }
    }
}

export const tableRowColorHandler = (record : any) => {
    if(record?.amount < record?.reorderPoint){
        return "table-row-warn"
    }else{
        return "table-row-normal"
    }
}