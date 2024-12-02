import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Watermark } from 'antd';
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { Form, Formik } from 'formik';
import { $Input } from '../../components/CustomComponents/index.ts';
import { ILogin, loginInitValues } from './Constants/constants.ts';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { loginValidationSchema } from './Validations/loginValidationSchema.ts';
import { connect, ConnectedProps } from 'react-redux';
import { LoginActions } from '../../actions/Login/Login.ts';

type props = propsFromRedux;

const Login: React.FC<props> = (props) => {

    const { isLoginSuccessfull, token, errorCode, logUserCredentials } = props;
    const { accessToken, refreshToken, expiresOn } = token ?? {};
    const navigate = useNavigate();

    const submit = (value: ILogin, actions: any) => {
        console.log("log",value);
        logUserCredentials(value);
        actions.resetForm();
    }
    console.log("DMC", errorCode);
    console.log("waves", token);
    console.log("spartan", isLoginSuccessfull);
    useEffect(() => {
        console.log("spartan22", isLoginSuccessfull);
        if (isLoginSuccessfull == true) {
            //when the user is registered , user will be navigated to the Home page

            localStorage.setItem('token', accessToken);
            navigate('/home');
        }
    }, [isLoginSuccessfull])

    const forgetPassword = () => {

    }

    const register = () => {
        navigate('/register');
    }

    return (
        <>
            {/* <div style={{ height: 500 }} /> */}
            <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md={8}>
                            <CCardGroup>
                                <CCard className="p-4">
                                    <CCardBody>
                                        <Formik
                                            initialValues={loginInitValues}
                                            onSubmit={submit}
                                            validationSchema={loginValidationSchema}>
                                            {() => (

                                                <Form>
                                                    <h2>Login</h2>
                                                    <UserOutlined />
                                                    <$Input label="User Name"
                                                        type="text"
                                                        name="userName"
                                                        placeholder="Enter your name..." />
                                                    <br />
                                                    <LockOutlined />
                                                    <$Input label="Password"
                                                        type="password"
                                                        name="password"
                                                        placeholder="Enter password name..." />
                                                    <br />
                                                    {(errorCode == 101 || errorCode == 102) && <small className="error-msg">*User name or password is incorrect. Check again.</small>}
                                                    <br />
                                                    <br />
                                                    <CContainer>
                                                        <CRow>
                                                            <CCol>
                                                                <Button type="primary" htmlType='submit'>Login</Button>
                                                            </CCol>
                                                            <CCol>
                                                                <Button type="link" onClick={forgetPassword}>Forget Password?</Button>
                                                            </CCol>
                                                        </CRow>
                                                    </CContainer>
                                                </Form>
                                            )}

                                        </Formik>

                                    </CCardBody>
                                </CCard>
                                <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                                    <CCardBody className="text-center">
                                        
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        </>

    )
}


const mapStatetoProps = (state: any) => {
    const { LoginReducer } = state;
    const { isLoginSuccessfull, token, errorCode } = LoginReducer;
    return {
        LoginReducer,
        isLoginSuccessfull,
        token,
        errorCode
    }
}

const mapDispathToProps = {
    logUserCredentials : LoginActions.userCredentials.log
}

const connector = connect(mapStatetoProps, mapDispathToProps);
type propsFromRedux = ConnectedProps<typeof connector>;
export default connector(Login)


