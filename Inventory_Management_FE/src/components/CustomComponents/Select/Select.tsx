import React, { ReactNode } from "react";
import { Select } from "antd";
import { useField } from "formik";

type props = {
    label: string,
    name: string,
    placeholder: string,
    children : Array<any>
}

const CustomSelect = ({ label, ...rest }: props) => {
    const [field, meta, helpers] = useField(rest);
    console.log("DK",field)
    return (
        <>
            <label>{label}</label>
            <select {...field} {...rest} />
            {meta.touched && meta.error ? (
                <div className="error-msg">{meta.error}</div>
            ) : null }
        </>
    )
}

export default CustomSelect;