import React from "react";
import { Input, DatePicker } from "antd";
import { useField } from "formik";
import type { DatePickerProps, GetProps } from 'antd';

type props = {
    label: string,
    name: string,
    value : any,
    onChange : (value : any,dateString : any) => void,
    onOk : (value: DatePickerProps['value']) => void
}

const CustomDatePicker = ({ label, onChange, onOk, ...rest }: props) => {
    const [field, meta, helpers] = useField(rest);
    console.log("DK33",field)
    return (
        <>
            <label>{label}</label>
            <br/>
            <DatePicker showTime {...field} {...rest} status= { meta.touched && meta.error ? "error" : ""} onChange={onChange} onOk={onOk}/>
            <br/>
            {meta.touched && meta.error ? (
                <small className="error-msg">{meta.error}</small>
            ) : null}
        </>
    )
}


// <DatePicker
//       showTime
//       onChange={(value, dateString) => {
//         console.log('Selected Time: ', value);
//         console.log('Formatted Selected Time: ', dateString);
//       }}
//       onOk={onOk}
//     />

export default CustomDatePicker;