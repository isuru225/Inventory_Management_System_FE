import React, { useEffect, useState, useRef } from 'react'
import { Button, Col, Row, Carousel } from 'antd';
import ayurvedaImg from '../../assets/images/Home/ayurveda.png'
import docImage from '../../assets/images/Home/doctor.png'
import treatmentImg from '../../assets/images/Home/treatment.png'
import { connect, ConnectedProps } from 'react-redux';
import { HomeActions } from '../../actions/Home/Home.ts';
import { description } from "./Constants/Constants.ts";
import { JWTDecoder, userValidationHandler } from './Functions/Functions.tsx';
import { useNavigate } from 'react-router-dom';
import { IsTokenExpiredOrMissingChecker } from '../../GlobalFunctions/Functions.tsx';

type props = PropsFromRedux;

const Home: React.FC<props> = (props) => {

    const { data } = props ?? {};

    const navigate = useNavigate();

    
    //get all available projects
    useEffect(()=>{
        if(IsTokenExpiredOrMissingChecker()){
            navigate('/login');
        }
    },[])

    // Create a reference to the target scroll point
    const scrollTargetRef = useRef<HTMLDivElement>(null);


    const checkAccessibility = (authorizedUsers: Array<string>) => {
        const encodedValue = localStorage.getItem('token');
        if (encodedValue !== null) {
            const decodedPayload = JWTDecoder(encodedValue);
            const { userId } = decodedPayload;
            const isAssignedUser = userValidationHandler(userId, authorizedUsers);

            return isAssignedUser;

        } else {
            navigate('/login');
            return false;
        }
    }

    return (
        <>
            <Row>
                <Col span={12} >
                    <Row>
                        <h2>
                            Kandakaduwa Ayurvedic Hospital
                        </h2>
                    </Row>
                    <hr />
                    <br />
                    <Row>
                        <div className="hospital-description"
                            dangerouslySetInnerHTML={{ __html: description }}>
                        </div>
                    </Row>
                    <hr />
                    <br />
                    <Row>
                        <div className="arch-btn">
                            <Button className="achievement-btn">
                                Achievements
                            </Button>
                        </div>
                    </Row>
                    <br />
                </Col>
                <Col span={12}>
                    {/*  */}
                    <Carousel autoplay>
                        <div>
                            <img src={ayurvedaImg} className="Carousel-Image" />
                        </div>
                        <div>
                            <img src={treatmentImg} className="Carousel-Image" />
                        </div>
                        <div>
                            <img src={docImage} className="Carousel-Image" />
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const { HomeReducer } = state;
    const { data, isLoading } = HomeReducer;

    return {
        data,
        isLoading
    };
}

const mapDispatchToProps = {
    getAllProjects: HomeActions.allProjects.get
}


const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(Home);

