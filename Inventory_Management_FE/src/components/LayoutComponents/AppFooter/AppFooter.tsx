import React from 'react';
import { CContainer, CRow, CCol, CButton } from "@coreui/react";

const AppFooter: React.FC = () => {
    return (

        <footer className="footer">
            <CContainer>
                <CRow>
                    <CCol xs={8}>
                        <CRow className="footer-links">
                            <CCol>
                                <div className="link-column">
                                    <p>HOME</p>
                                    <p>MOVIES</p>
                                    <p>LOCATIONS</p>
                                    <p>DEALS AND EXCLUSIVES</p>
                                    <p>ADVERTISE</p>
                                    <p>ABOUT US</p>
                                </div>
                            </CCol>
                            <CCol>
                                <div className="link-column">
                                    <p>CAREERS</p>
                                    <p>CONTACT US</p>
                                    <p>EVENTS</p>
                                    <p>DISCLAIMER</p>
                                    <p>TERMS AND CONDITIONS</p>
                                </div>
                            </CCol>
                            <CCol>
                                <div className="footer-social">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-instagram"></i>
                                </div>

                            </CCol>
                        </CRow>
                        <CRow>
                            <div className="footer-subscribe">
                                <p>SUBSCRIBE FOR NEWSLETTER</p>
                                <div className="subscribe-form">
                                    <input type="email" placeholder="Enter Email" />
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                        </CRow>
                        <CRow>
                            <CCol>
                                <div className="footer-bottom text-start">
                                    <p>©2024 Cinema Cafe All Right Reserved. Developed by QuantumByte.</p>
                                </div>
                            </CCol>
                        </CRow>
                    </CCol>
                    <CCol xs={4}>
                        <div className="footer-apps">
                            <p>FIND US ON APP STORE AND GOOGLE PLAY</p>
                            <div className="app-buttons">
                                
                            </div>
                        </div>
                    </CCol>
                </CRow>
            </CContainer>
        </footer>


    );
}

export default AppFooter;


{/* <div className="footer-links">
                    <div className="link-column">
                        <p>HOME</p>
                        <p>MOVIES</p>
                        <p>LOCATIONS</p>
                        <p>DEALS AND EXCLUSIVES</p>
                        <p>ADVERTISE</p>
                        <p>ABOUT US</p>
                    </div>
                    <div className="link-column">
                        <p>CAREERS</p>
                        <p>CONTACT US</p>
                        <p>EVENTS</p>
                        <p>DISCLAIMER</p>
                        <p>TERMS AND CONDITIONS</p>
                    </div>
                </div>

                <div className="footer-subscribe">
                    <p>SUBSCRIBE FOR NEWSLETTER</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Enter Email" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>

                <div className="footer-social">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                </div>

                <div className="footer-apps">
                    <p>FIND US ON APP STORE AND GOOGLE PLAY</p>
                    <div className="app-buttons">
                        <img src="appstore.png" alt="App Store" />
                        <img src="googleplay.png" alt="Google Play" />
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>©2024 Cinema Cafe All Right Reserved. Developed by QuantumByte.</p>
                </div> */}