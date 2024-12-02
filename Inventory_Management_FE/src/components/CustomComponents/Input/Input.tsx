import React from "react";
import { Input } from "antd";
import { useField } from "formik";

type props = {
    label: string,
    type: string,
    name: string,
    placeholder: string,
}

const CustomInput = ({ label, ...rest }: props) => {
    const [field, meta, helpers] = useField(rest);
    console.log("DK33",field)
    return (
        <>
            <label>{label}</label>
            <br/>
            <Input {...field} {...rest} status= { meta.touched && meta.error ? "error" : ""} style={{ width: '60%' }}/>
            <br/>
            {meta.touched && meta.error ? (
                <small className="error-msg">{meta.error}</small>
            ) : null}
        </>
    )
}

export default CustomInput;