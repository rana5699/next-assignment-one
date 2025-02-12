"use client";
import { Card, Col, Row, Statistic, Avatar, Button } from "antd";
import {
  ProjectOutlined,
  FileTextOutlined,
  UserOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { TUser } from "@/types/user.types";
import { signOut } from "next-auth/react";

const DashboardHome = ({ user }: { user: TUser | null }) => {
  const handelLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div>
      {" "}
      <div className="w-full max-w-6xl mx-auto ">
        {/* 🌟 Dashboard Banner */}
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-6 mb-6 shadow-lg">
          <div className="flex items-center space-x-4">
            <Avatar size={80} src={user?.image} icon={<UserOutlined />} />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Welcome back, {user?.name}.
              </h1>
              <p className="text-sm md:text-base opacity-90">
                Manage your blogs and projects efficiently.
              </p>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <Button
              onClick={handelLogout}
              type="primary"
              className="mt-4  text-blue-600 font-medium "
            >
              Log Out
            </Button>
          </div>
        </div>

        {/* 📊 Dashboard Stats */}
        <Row gutter={[16, 16]} className="w-full">
          <Col xs={24} sm={12} lg={8}>
            <Card className="shadow-lg">
              <Statistic
                title="Total Blogs"
                value={15}
                prefix={<FileTextOutlined />}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card className="shadow-lg">
              <Statistic
                title="Total Projects"
                value={25}
                prefix={<ProjectOutlined />}
              />
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card className="shadow-lg">
              <Statistic
                title="Completed Projects"
                value={18}
                prefix={<CheckCircleOutlined />}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardHome;
