"use client";

import "@ant-design/v5-patch-for-react-19";
import { Table, Button, Space, Modal, message, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image"; // Import next/image
import Link from "next/link";

const ManageProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy project data (Replace with actual API data)
  const projects = [
    {
      id: 1,
      title: "Next.js Best Practices",
      status: "Published",
      date: "2024-02-10",
      imageUrl: "/images/nextjs.jpg",
    },
    {
      id: 2,
      title: "Understanding TypeScript",
      status: "Draft",
      date: "2024-01-28",
      imageUrl: "/images/typescript.jpg",
    },
    {
      id: 3,
      title: "React vs Vue: Which One to Choose?",
      status: "Published",
      date: "2024-02-05",
      imageUrl: "/images/react-vue.jpg",
    },
  ];

  // Handle Edit
  const handleEdit = (record: any) => {
    setIsModalOpen(true);
  };

  // Handle Delete
  const handleDelete = (id: number) => {
    message.success(`Project with ID ${id} has been successfully deleted.`);
  };

  // Table Columns
  const columns = [
    { title: "Project Title", dataIndex: "title", key: "title" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            type="default"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
       {/* Banner Section */}
       <Row justify="space-between" align="middle" className="mb-4 p-4 bg-blue-500 rounded">
        <Col>
          <h1 className="text-2xl font-semibold text-white">Project Overview</h1>
        </Col>
        <Col>
          <Link href="/dashboard/manage-projects/add-project">
            <Button type="primary">Add New Project</Button>
          </Link>
        </Col>
      </Row>

      {/* Projects Table */}
      <Table dataSource={projects} columns={columns} rowKey="id" />

      {/* Edit Project Modal */}
      <Modal
        title="Edit Project"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <p>Editing project: Placeholder Name</p>
      </Modal>
    </div>
  );
};

export default ManageProjects;
