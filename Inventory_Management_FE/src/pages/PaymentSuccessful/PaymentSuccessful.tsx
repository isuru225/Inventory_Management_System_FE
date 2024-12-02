import React from "react";
import { CContainer, CRow, CCol, CButton } from "@coreui/react";
import { contactNumber } from "../Constants/constants.ts";
import { CheckCircleOutlined } from '@ant-design/icons';

const PaymentSuccessful = () => {
    return (
        <CContainer>
            <CRow>
                <CCol>
                </CCol>
                <CCol>
                    <CRow>
                        <CCol className="d-flex justify-content-center align-items-center">
                            <CheckCircleOutlined style={{color : "#58d68d" , fontSize : "60px"}}/>
                        </CCol>
                    </CRow>
                    <br/>
                    <CRow>
                        <CCol className="d-flex justify-content-center align-items-center">
                            <h2>
                                PAYMENT Successful
                            </h2>
                        </CCol>
                    </CRow>
                    <hr />
                    <br/>
                    <br/>
                    <CRow>
                        <CCol className="d-flex justify-content-center align-items-center">
                            <b>
                                Your payment has been successful.You will receive an email from us. Please check your indox.
                            </b>
                        </CCol>
                    </CRow>
                    <br/>
                    <br/>
                    <CRow>
                        <CCol className="d-flex justify-content-center align-items-center">
                            <p className="text-center">
                                {`Please contact Cinema Cafe on ${contactNumber.CONTACT_NUMBER} for further details.`}
                            </p>
                        </CCol>
                    </CRow>
                </CCol>
                <CCol>
                </CCol>
            </CRow>
            <CRow>

            </CRow>

        </CContainer>
    )
}

export default PaymentSuccessful;