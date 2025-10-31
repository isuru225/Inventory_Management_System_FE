import React from "react";
import { ConfigProvider, Input } from "antd";
import { useField } from "formik";

type props = {
    label: string,
    type: string,
    name: string,
    step? : string,
    placeholder: string,
    disabled?: boolean,
    isOnlyPositiveValues?: boolean,
    prefix? : any,
    suffix? : any
}

const theme = {
  components: {
    Input: {        
      activeBorderColor: "#389e0d",  // when focused
      hoverBorderColor: "#73d13d",   // when hovered
    },
  },
};

const CustomInput = ({ label, ...rest }: props) => {
    const [field, meta] = useField(rest);
    return (
        <>
            <label>{label}</label>
            <br />
            {rest.isOnlyPositiveValues ? <ConfigProvider theme={theme}><Input
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
                /> </ConfigProvider>:
                <ConfigProvider theme={theme}>
                <Input {...field} {...rest} status={meta.touched && meta.error ? "error" : ""} style={{ width: '60%' }} />
                </ConfigProvider>}
            <br />
            {meta.touched && meta.error ? (
                <small className="error-msg">{meta.error}</small>
            ) : null}
        </>
    )
}

export default CustomInput;