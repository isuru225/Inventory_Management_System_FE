import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { Skeleton } from 'antd';
import { Form, Formik } from 'formik';
import { $Input } from '../../components/CustomComponents/index.ts';
import { LockOutlined } from '@ant-design/icons';
import { forgotPasswordValidationSchema } from './Validations/ForgotPasswordValidationSchema.ts';
import { connect, ConnectedProps } from 'react-redux';
import { forgotPasswordInitValues, IForgotPassword } from './Constants/constants.ts'
import { forgotPasswordActions } from '../../actions/ForgotPassword/ForgotPassword.ts';

type props = propsFromRedux;
type forgotPasswordRequest = {
    email: string,
    clientURI: string
}

const ForgotPassword: React.FC<props> = (props) => {

    const { forgotPassword, isLoading, data } = props;
    const [isSentResetLinkSuccessful, setIsSentResetLinkSuccessful] = useState<boolean>(true);

    const clientURI = process.env.REACT_APP_CLIENT_URI;
    console.log("fear",clientURI);
    const submit = (value: IForgotPassword, actions: any) => {
        const requestPayload: forgotPasswordRequest = {
            ...value,
            clientURI
        }
        forgotPassword(requestPayload);
        actions.resetForm();
    }

    useEffect(() => {
        if(data?.isSuccessful){
            setIsSentResetLinkSuccessful(true)
        }
    }, [data])


    return (
        <>
            <div className="reset-wrapper">
                <div className="reset-card">
                    <div className="reset-header">
                        <div className="reset-icon">
                            <LockOutlined />
                        </div>
                        <h2>Forgot Password?</h2>
                        <p>No Problem! Enter your email or username below and we will send you an email with instructions to reset your password.</p>
                    </div>

                    <Formik
                        initialValues={forgotPasswordInitValues}
                        onSubmit={submit}
                        validationSchema={forgotPasswordValidationSchema}
                    >
                        {() => (
                            <Form className="reset-form">
                                <$Input
                                    label="Registered email:"
                                    type='text'
                                    name="registeredEmail"
                                    placeholder="Enter registered email"
                                    prefix=""
                                    suffix=""
                                />
                                <br />                    
                                {!isSentResetLinkSuccessful ? (
                                    <small className="error-msg">
                                        User is not registered by the provided email. 
                                    </small>
                                ) : null}
                                <br />
                                <br />
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={isLoading}
                                    block
                                    className="reset-btn"
                                >
                                    Send Reset Link
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>

    )
}


const mapStatetoProps = (state: any) => {
    const { PasswordResetReducer } = state;
    const { data, isLoading } = PasswordResetReducer;
    return {
        data,
        isLoading
    }
}

const mapDispathToProps = {
    forgotPassword: forgotPasswordActions.password.forgot
}

const connector = connect(mapStatetoProps, mapDispathToProps);
type propsFromRedux = ConnectedProps<typeof connector>;
export default connector(ForgotPassword)


