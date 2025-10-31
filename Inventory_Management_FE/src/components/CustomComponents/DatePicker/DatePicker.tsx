import React from "react";
import { Input, DatePicker, ConfigProvider } from "antd";
import { useField } from "formik";
import type { DatePickerProps, GetProps } from 'antd';

type props = {
    label: string,
    name: string,
    value: any,
    onChange: (value: any, dateString: any) => void,
    onOk: (value: DatePickerProps['value']) => void
}

const datePickerTheme = {
    components: {
        DatePicker: {
            activeBorderColor: "#389e0d",  // when focused
            hoverBorderColor: "#73d13d",
        },
    },
};


const CustomDatePicker = ({ label, onChange, onOk, ...rest }: props) => {
    const [field, meta, helpers] = useField(rest);
    return (
        <>
            <label>{label}</label>
            <br />
            <ConfigProvider theme={datePickerTheme}>
                <DatePicker showTime {...field} {...rest} status={meta.touched && meta.error ? "error" : ""} onChange={onChange} onOk={onOk} />
            </ConfigProvider>
            <br />
            {meta.touched && meta.error ? (
                <small className="error-msg">{meta.error}</small>
            ) : null}
        </>
    )
}


export default CustomDatePicker;