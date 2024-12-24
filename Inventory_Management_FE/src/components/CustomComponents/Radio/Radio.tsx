import React, { ReactNode } from "react";
import { Radio } from "antd";
import { useField } from "formik";

type props = {
    label: string,
    name: string,
    options: Array<any>,
    defaultValue : string,
    optionType : any,
    buttonStyle : any,
}

const CustomRadio = ({ label, ...rest }: props) => {
    const [field, meta, helpers] = useField(rest);
    console.log("DK",field)
    return (
        <>
            <label>{label}</label>
            <br/>
            <Radio.Group {...field} {...rest} />
            {meta.touched && meta.error ? (
                <div className="error-msg">{meta.error}</div>
            ) : null }
        </>
    )
}

export default CustomRadio;
