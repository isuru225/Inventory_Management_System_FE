import React from "react"
import moment from 'moment';
import { IEditUserInfos, IRawDrug } from "../Interfaces/Interfaces.ts";
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

export const TableDataHandler = (data : Array<IRawDrug>) => {
    console.log("Shark",data);
    const formattedData = data?.map((rawDrug : IRawDrug , index : number)=>{
        const dateOnly = moment(rawDrug.expirationDate).format("YYYY-MM-DD");
        return {...rawDrug, amount : `${rawDrug.amount} ${rawDrug.measurementUnit}`,key : index.toString(), expirationDate : dateOnly}
    });
    console.log("TigerShark",formattedData);
    return formattedData;
}


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