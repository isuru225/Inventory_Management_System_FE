import React from "react";
import { Input } from "antd";
import { useField } from "formik";

type props = {
    label: string,
    type: string,
    name: string,
    placeholder: string,
    disabled?: boolean,
    isOnlyPositiveValues?: boolean
}

const CustomInput = ({ label, ...rest }: props) => {
    const [field, meta, helpers] = useField(rest);
    console.log("DK33", field);
    console.log("MP", rest);
    return (
        <>
            <label>{label}</label>
            <br />
            {rest.isOnlyPositiveValues ? <Input
                {...field} {...rest}
                status={meta.touched && meta.error ? "error" : ""}
                style={{ width: '60%' }} 
                min={0} // Ensures only positive values
                onKeyPress={(event) => {
                    // Prevent negative signs
                    if (event.key === "-" || event.key === "+") {
                        event.preventDefault();
                    }
                }}
                /> :
                <Input {...field} {...rest} status={meta.touched && meta.error ? "error" : ""} style={{ width: '60%' }} />}
            <br />
            {meta.touched && meta.error ? (
                <small className="error-msg">{meta.error}</small>
            ) : null}
        </>
    )
}

export default CustomInput;