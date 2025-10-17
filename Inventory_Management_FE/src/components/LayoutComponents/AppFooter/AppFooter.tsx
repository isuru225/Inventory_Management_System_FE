import React from "react";
import {
  HomeOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  FileTextOutlined,
  CustomerServiceOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Layout, Row, Col, Typography, Button, Divider } from "antd";
//import "./Footer.css";

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer className="app-footer">
      <div className="footer-container">
        <Row gutter={[48, 24]}>
          {/* IMS NAVIGATION */}
          <Col xs={24} sm={12} md={8} lg={8}>
            <h3 className="footer-heading">IMS NAVIGATION</h3>
            <ul className="footer-list">
              <li>Dashboard Overview</li>
              <li>Raw Drugs Inventory</li>
              <li>Finished Goods Stock</li>
              <li>General Store Items</li>
              <li>Inventory Audit Log</li>
              <li>System Admin</li>
            </ul>
          </Col>

          {/* HOSPITAL & POLICY */}
          <Col xs={24} sm={12} md={8} lg={8}>
            <h3 className="footer-heading">HOSPITAL & POLICY</h3>
            <ul className="footer-list">
              <li><HomeOutlined /> About Ayurvedic Hospital</li>
              <li><SafetyCertificateOutlined /> Privacy Policy</li>
              <li><FileTextOutlined /> Terms of Service</li>
              <li><CustomerServiceOutlined /> Contact Support Team</li>
              <li><FormOutlined /> Feedback & Suggestions</li>
            </ul>
          </Col>

          {/* SYSTEM SUPPORT */}
          <Col xs={24} sm={12} md={8} lg={8}>
            <h3 className="footer-heading">SYSTEM SUPPORT</h3>
            <ul className="footer-list">
              <li><PhoneOutlined /> +94 11 555 1234 (IT Desk)</li>
              <li><MailOutlined /> support@ayurhospital.lk</li>
            </ul>

            <h3 className="footer-heading" style={{ marginTop: "1.5rem" }}>
              FOLLOW HOSPITAL
            </h3>
            <p className="footer-subtext">Stay connected for updates and news.</p>
          </Col>
        </Row>

        <Divider className="footer-divider" />

        {/* SYSTEM INFO */}
        <div className="footer-info">
          <h4 className="footer-info-heading">SYSTEM STATUS & INFO</h4>
          <p className="footer-info-text">
            IMS Version: <strong>3.0.0</strong>
          </p>
          <p className="footer-info-text">Last system update: October 2024</p>
          <p className="footer-warning">
            This system is for authorized hospital personnel only. Unauthorized
            access is strictly prohibited.
          </p>
          <Button type="default" className="footer-btn">
            View System Documentation
          </Button>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
