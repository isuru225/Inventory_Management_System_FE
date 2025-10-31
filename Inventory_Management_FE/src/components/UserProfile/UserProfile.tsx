import React, { useEffect, useState } from "react"
import { Card, Avatar, Row, Col } from 'antd';
import user from "../../assets/images/User/user2.png"
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { ConnectedProps, connect } from "react-redux";
import { UserProfileActions } from "../../actions/UserProfile/UserProfile.ts";
import { IsTokenExpiredOrMissingChecker, getAttributesFromToken } from "../../GlobalFunctions/Functions.tsx";
import { useNavigate } from "react-router-dom";

type props = propsFromRedux;

const UserProfile: React.FC<props> = (props) => {

    const { data, isLoading, getUserProfileInfo } = props ?? {};
    const [loaded, setLoaded] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (IsTokenExpiredOrMissingChecker()) {
            navigate('/login');
        } else {
            const { name } = getAttributesFromToken(['name'])
            getUserProfileInfo({
                email: name
            })
        }

    }, [])

    

    return (
        <div className="user-profile-container">
            <Row>
                <h1>User Profile</h1>
            </Row>
            <hr />
            <Row gutter={[32, 32]}>
                <Col span={12}>
                    <div className="p-6 max-w-3xl mx-auto">
                        <Card className="user-profile-card">
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={10} className="flex justify-center items-center">
                                    <Avatar
                                        size={160}
                                        icon={<UserOutlined />}
                                        className="user-avatar"
                                    />
                                </Col>

                                <Col xs={24} md={14} className="user-info">
                                    <h2 className="text-2xl font-bold mb-2">
                                        {data?.fullName}
                                    </h2>
                                    <br />
                                    <h5>
                                        <MailOutlined /> {data?.email}
                                    </h5>
                                    <br />
                                    <h5>
                                        <PhoneOutlined /> {data?.phoneNumber}
                                    </h5>
                                    <br />
                                    <h5>
                                        <UserOutlined /> {data?.role}
                                    </h5>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Col>

                <Col span={12} className="flex justify-center items-center">
                    <img src={user} alt="User"
                        loading="lazy"
                        onLoad={() => setLoaded(true)}
                        className={`user-profile-img ${loaded ? "loaded" : ""}`} />
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    const { UserProfileReducer } = state;
    const { data, isLoading } = UserProfileReducer
    return {
        data,
        isLoading
    }
}

const mapDispatchToProps = {
    getUserProfileInfo: UserProfileActions.profileInfo.get
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type propsFromRedux = ConnectedProps<typeof connector>
export default connector(UserProfile);