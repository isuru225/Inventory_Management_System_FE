import React, { useEffect, useState, useRef } from 'react'
import { Button, Col, Row, Timeline, Carousel } from 'antd';

import homeImg from '../../assets/images/Home/Home.png'
import ayurvedaImg from '../../assets/images/Home/ayurveda.png'
import docImage from '../../assets/images/Home/doctor.png'
import treatmentImg from '../../assets/images/Home/treatment.png'
import { connect, ConnectedProps } from 'react-redux';
import { HomeActions } from '../../actions/Home/Home.ts';
import { description, errorMessages, projectButtonColorCode } from "./Constants/Constants.ts";
import { getSelectedProject, JWTDecoder, techStackHandler, userValidationHandler } from './Functions/Functions.tsx';
import { IProject } from './Interfaces/Interface.ts';
import { useNavigate } from 'react-router-dom';
import { IsTokenExpiredOrMissingChecker } from '../../GlobalFunctions/Functions.tsx';

type props = PropsFromRedux;

const Home: React.FC<props> = (props) => {

    const { data, isLoading, getAllProjects } = props ?? {};

    const [isProjectInfoVisible, setIsProjectInfoVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<IProject>();

    const navigate = useNavigate();

    console.log("MAN", data);
    //get all available projects
    useEffect(()=>{
        if(IsTokenExpiredOrMissingChecker()){
            navigate('/login');
        }else{
            getAllProjects({});
        }
    },[])

    // Create a reference to the target scroll point
    const scrollTargetRef = useRef<HTMLDivElement>(null);

    const projectHandler = (projectId: string) => {
        console.log("scania", projectId);
        const result = getSelectedProject(data, projectId)
        setSelectedProject(result);
        scrollToSectionHandler();
    }

    // Scroll handler function
    const scrollToSectionHandler = () => {
        // Check if the reference is valid, then scroll to the element
        if (scrollTargetRef.current) {
            scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const ButtonHandler = (projectList: any) => {
        let count = -1;
        const result = projectList?.map((project: any) => {
            if (count == projectButtonColorCode.length) {
                count = 0;
            }

            count++;

            return (
                <Row key={project.id}>
                    <Button className="project-btn" style={{ backgroundColor: `${projectButtonColorCode[count]}` }} onClick={() => { projectHandler(project.id) }}>
                        {project.projectName}
                    </Button>
                </Row>
            )
        })

        return result;
    }

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
                    <div className="project-btn-container">
                        {ButtonHandler(data)}
                    </div>
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
            {/* {selectedProject &&
                <div ref={scrollTargetRef}>
                    <Row>
                        <Col>
                            <h1>
                                PROJECT INFO
                            </h1>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col span={14}>
                            <h2>
                                About
                            </h2>
                            <div>
                                <p>
                                    {selectedProject.description}
                                </p>
                            </div>
                            <Button type="primary" disabled={!checkAccessibility(selectedProject.applicationUsers)}>
                                Access
                            </Button>
                            {!checkAccessibility(selectedProject.applicationUsers) &&
                                <small className='error-msg'>{errorMessages.NOT_ASSIGNED}</small>
                            }
                        </Col>
                        <hr />
                        <Col span={10}>
                            <h2>
                                Tech Stack
                            </h2>

                            <div>
                                <Timeline className='tech-timeline'
                                    items={techStackHandler(selectedProject.technologies)}
                                />
                            </div>
                        </Col>
                        <hr />
                    </Row>
                </div>
            } */}

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

