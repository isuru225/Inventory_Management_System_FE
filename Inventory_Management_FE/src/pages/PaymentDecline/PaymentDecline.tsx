import React from "react";
import { CContainer, CRow, CCol, CButton } from "@coreui/react";
import { contactNumber } from "../Constants/constants.ts";
import { CloseCircleFilled } from '@ant-design/icons';

const PaymentDecline = () => {
    return (
        <CContainer>
            <CRow>
                <CCol>
                </CCol>
                <CCol>
                    <CRow>
                        <CCol className="d-flex justify-content-center align-items-center">
                            <CloseCircleFilled style={{color : "#ED0C6E" , fontSize : "60px"}}/>
                        </CCol>
                    </CRow>
                    <br/>
                    <CRow>
                        <CCol className="d-flex justify-content-center align-items-center">
                            <h2>
                                PAYMENT DECLINED
                            </h2>
                        </CCol>
                    </CRow>
                    <hr />
                    <br/>
                    <br/>
                    <CRow>
                        <CCol className="d-flex justify-content-center align-items-center">
                            <b>
                                Your booking has been cancelled. Please try again.
                            </b>
                        </CCol>
                    </CRow>
                    <br/>
                    <br/>
                    <CRow>
                        <CCol className="d-flex justify-content-center align-items-center">
                            <p className="text-center">
                                {`Please contact Cinema Cafe on ${contactNumber.CONTACT_NUMBER} for further details.
                                Sorry for the inconvenience occurred.`}
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

export default PaymentDecline;