"use client";
import { Layout, Row, Col, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";

const { Text } = Typography;
export const NextFooter = () => {
  return (

   <Layout.Footer style={{ textAlign: "center", padding: "24px 0" }}>
      <Row justify="center" gutter={16}>
        <Col>
          <Text>© {new Date().getFullYear()} Your Website. All Rights Reserved.</Text>
        </Col>
      </Row>
      <Row justify="center" gutter={16}>
        <Col>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <GithubOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
          </a>
        </Col>
        <Col>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
          </a>
        </Col>
        <Col>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined style={{ fontSize: "24px", margin: "0 10px" }} />
          </a>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

