import React, { ReactNode } from "react";
import { Select, Input } from "antd";
import { useField } from "formik";

const { TextArea } = Input;
type props = {
    label: string,
    name: string,
    placeholder: string
}


const CustomTextArea = ({ label, ...rest }: props) => {
    const [field, meta, helpers] = useField(rest);
    console.log("DK",field)
    return (
        <>
            <label>{label}</label>
            <TextArea {...field} {...rest} autoSize={{ minRows: 3, maxRows: 5 }}/>
            {meta.touched && meta.error ? (
                <div className="error-msg">{meta.error}</div>
            ) : null }
        </>
    )
}



export default CustomTextArea;