import React, { ReactNode } from "react";
import { Select, Input, ConfigProvider } from "antd";
import { useField } from "formik";

const { TextArea } = Input;
type props = {
    label: string,
    type: string,
    name: string,
    placeholder: string
}

const theme = {
    components: {
        Input: {
            activeBorderColor: "#389e0d",  // when focused
            hoverBorderColor: "#73d13d",   // when hovered
        },
    },
};


const CustomTextArea = ({ label, ...rest }: props) => {
    const [field, meta, helpers] = useField(rest);
    return (
        <>
            <label>{label}</label>
            <ConfigProvider theme={theme}>
                <TextArea {...field} {...rest} autoSize={{ minRows: 3, maxRows: 5 }} />
            </ConfigProvider>
            {meta.touched && meta.error ? (
                <div className="error-msg">{meta.error}</div>
            ) : null}
        </>
    )
}



export default CustomTextArea;