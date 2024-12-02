import React, { useEffect } from 'react'
import {
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CRow,
} from '@coreui/react'
import { Watermark, Button } from 'antd';
import { Form, Formik } from 'formik';
import { $Input } from '../../components/CustomComponents/index.ts';
import { IUserRegistration, userRegistrationInitValues } from './Constants/constants.ts';
import { UserOutlined, MailOutlined, MobileOutlined, LockOutlined } from '@ant-design/icons';
import { userRegValidationSchema } from './Validations/userRegValidationSchema.ts';
import { connect, ConnectedProps } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type props = propsFromRedux;

const Register : React.FC<props> = (props) => {

    const { token, isRegistered } = props;
    const { accessToken , refreshToken, expiresOn } = token ?? {};

    const navigate = useNavigate();

    const submit = (values: IUserRegistration, actions: any) => {
        console.log(values, "Virtual");
        //registerUsers(values);
        //actions.resetForm();
    }

    useEffect(()=>{
        //when the user is registered , user will be navigated to the Home page
        if(isRegistered == true){
            navigate("/");
            localStorage.setItem('token', accessToken);
        }   

    },[isRegistered])

    return (
        <Watermark content="Cinema Cafe" >
            <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md={9} lg={7} xl={6}>
                            <CCardGroup>
                                <CCol sm={7}>
                                    <CCard className="mx-6 ">
                                        <CCardBody className="p-4">
                                            <Formik
                                                onSubmit={submit}
                                                initialValues={userRegistrationInitValues}
                                                validationSchema={userRegValidationSchema}
                                            >
                                                {(props) => (
                                                    <Form>
                                                        <h2>REGISTRATION</h2>
                                                        <UserOutlined />
                                                        <$Input label="First Name"
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="Enter first name..." />
                                                        <br/>
                                                        <UserOutlined />
                                                        <$Input label="Last Name"
                                                            type="text"
                                                            name="lastName"
                                                            placeholder="Enter last name..." />
                                                        <br />

                                                        <MailOutlined />
                                                        <$Input label="Email"
                                                            type="text"
                                                            name="email"
                                                            placeholder="Enter your email..." />
                                                        <br />

                                                        <MobileOutlined />
                                                        <$Input label="Mobile Number"
                                                            type="text"
                                                            name="mobileNumber"
                                                            placeholder="Enter your mobile number..." />
                                                        <br />

                                                        <LockOutlined />
                                                        <$Input label="Password"
                                                            type="password"
                                                            name="password"
                                                            placeholder="Enter your password..." />
                                                        <br />

                                                        <LockOutlined />
                                                        <$Input label="Confirm Password"
                                                            type="password"
                                                            name="confirmedPassword"
                                                            placeholder="confirm your password..." />
                                                        <br />

                                                        <Button type="primary" htmlType='submit'>CREATE</Button>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </CCardBody>

                                    </CCard>
                                </CCol>
                                <CCol sm={5}>
                                    <CCard className="text-white bg-primary mx-6" style={{ width: '44%', height: '100%' }}>
                                        <CCardBody className="text-center  py-4">
                                            <div>

                                            </div>
                                        </CCardBody>
                                    </CCard>
                                </CCol>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        </Watermark>
    )
}


const mapStateToProps = (state : any) => {
    const { RegisterReducer } = state;
    const {token, isRegistered } = RegisterReducer; 
    return {
        token,
        isRegistered
    }
}

const mapDispatchToProps = {
    //registerUsers : RegisterActions.userInfos.register
}

const connector = connect(mapStateToProps,mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>;
export default connector(Register);
