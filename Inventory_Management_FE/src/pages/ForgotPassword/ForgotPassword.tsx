import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Modal, Result } from 'antd';
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
    const clientURI = "http://localhost:3000/#/login";
    const [isSentResetLinkSuccessfully, setIsResetLinkSuccessfully] = useState(true);
    const isInitialRender = useRef(true);


    const submit = (value: IForgotPassword, actions: any) => {
        
        
        const requestPayload: forgotPasswordRequest = {
            email: value.registeredEmail,
            clientURI
        }
        forgotPassword(requestPayload);
        actions.resetForm();
    }



    useEffect(() => {
        
        if (!isInitialRender.current) {
            
            if (data?.isSuccessful) {
                setIsResetLinkSuccessfully(true);
            } else {
                setIsResetLinkSuccessfully(false);
            }
        }else{
            isInitialRender.current = false;
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
                                {!isSentResetLinkSuccessfully ? (
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
            <Modal
                open={data?.isSuccessful}
                footer={null}
                closable={false}
            >
                <Result
                    status="success"
                    title={`Password reset link has been successfully sent to your email account. Please visit to the inbox and click the "Reset Password" link to proceed!`}
                // extra={
                //     <Button type="primary" key="console" onClick={() => { navigate("/login") }}>
                //         Go Login
                //     </Button>
                // }
                />
            </Modal>

        </>

    )
}


const mapStatetoProps = (state: any) => {
    const { ForgotPasswordReducer } = state;
    const { data, isLoading } = ForgotPasswordReducer;
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


