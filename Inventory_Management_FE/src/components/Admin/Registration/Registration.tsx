import React, { useRef, useEffect } from "react";
import { Button, Input, Modal, Space, Table, Skeleton, Row, Col, notification } from 'antd';
import { Formik, Form } from "formik"
import { $Input, $Select, $DatePicker } from "../../CustomComponents/index.ts";
import { failedNotification, registrationModalInitValues, successNotification } from "./Constants/Constants.ts";
import { RegistartionModalValidationSchema } from "./Validation/RegistrationValidationSchema.ts";
import { userRolesHandler } from "./Functions/Functions.tsx";
import doctor from "../../../assets/images/Admin/doctor.png"
import { connect, ConnectedProps } from "react-redux";
import { RegisterActions } from "../../../actions/Register/Register.ts";


type props = propsFromRedux;

const Registration: React.FC<props> = (props) => {

    const { registerNewUser, isLoading, data } = props ?? {};
    const isMounted = useRef(false);

    const submit = (values: any) => {
        console.log("jackle", values);
        if (values) {
            registerNewUser(values);
        }
    }

    const [api, contextHolder] = notification.useNotification();

    const openNotification = (pauseOnHover: boolean) => () => {
        api.open({
            message: successNotification.MESSAGE,
            description: successNotification.DESCRIPTION,
            showProgress: true,
            pauseOnHover,
        });
    };


    useEffect(() => {

        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }

        console.log("kkkkkkkkkkkkkkkk", data);
        if (data?.success) {
            api.open({
                message: successNotification.MESSAGE,
                description: successNotification.DESCRIPTION,
                showProgress: true,
                pauseOnHover: true
            });
            
        }else if(!data?.success){
            api.open({
                message: failedNotification.MESSAGE,
                description: failedNotification.DESCRIPTION,
                showProgress: true,
                pauseOnHover: true
            });
        }

    }, [data])

    return (

        <>
            <h2>
                Register New User
            </h2>
            <hr />
            {contextHolder}
            <Button onClick={openNotification(true)}>
                dsds
            </Button>
            <Row>
                <Col span={12} >
                    <Formik
                        initialValues={registrationModalInitValues}
                        onSubmit={submit}
                        validationSchema={RegistartionModalValidationSchema}
                        enableReinitialize={true}
                    >
                        {({
                            values,
                            handleChange,
                            handleBlur,
                            errors,
                            touched,
                            setFieldValue
                        }) => (

                            <Form>
                                <$Input
                                    label="First Name : "
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter first name..."
                                />
                                {/* <br /> */}
                                <br />
                                <$Input
                                    label="Last Name : "
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter last name..."
                                />
                                <br />
                                {/* <br />
                            <br /> */}
                                <$Input
                                    label="Email : "
                                    type="text"
                                    name="email"
                                    placeholder="Enter a valid email ..."
                                />
                                <br />
                                <$Input
                                    label="Mobile Number : "
                                    type="text"
                                    name="mobileNumber"
                                    placeholder="Enter valid mobile number..."
                                />
                                <br />
                                <$Input
                                    label="Password : "
                                    type="password"
                                    name="password"
                                    placeholder="Enter a password..."
                                />
                                <br />
                                <$Input
                                    label="Confirm Password : "
                                    type="password"
                                    name="confirmedPassword"
                                    placeholder="Re-enter the password..."
                                />
                                <br />
                                <$Select label="User Roles : "
                                    name="role"
                                    placeholder="Enter a user role..."
                                >
                                    {userRolesHandler()}
                                </$Select>
                                <hr />
                                <Button loading={isLoading} type="primary" htmlType="submit"  >Submit</Button>
                                <br />
                                <br />
                            </Form>
                        )}
                    </Formik>
                </Col>
                <Col span={12} >
                    <div>
                        <img src={doctor} alt="doc" />
                    </div>
                </Col>
            </Row>

            {/* </Modal> */}

        </>
    )
}

const mapStateToProps = (state: any) => {
    const { RegisterReducer } = state;
    const { data, isLoading } = RegisterReducer;
    return {
        data,
        isLoading
    }
}


const mapDispatchToProps = {
    registerNewUser: RegisterActions.newUser.register
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>;
export default connector(Registration);

//export default Registration;