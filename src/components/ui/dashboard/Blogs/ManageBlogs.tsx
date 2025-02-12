"use client";

import '@ant-design/v5-patch-for-react-19';
import { Table, Button, Space, Modal, message, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";

const ManageBlogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy blog data (Replace with API data)
  const blogs = [
    { id: 1, title: "Next.js Best Practices", status: "Published", date: "2024-02-10" },
    { id: 2, title: "Understanding TypeScript", status: "Draft", date: "2024-01-28" },
    { id: 3, title: "React vs Vue: Which One to Choose?", status: "Published", date: "2024-02-05" },
  ];

  // Handle Edit
  const handleEdit = (record: any) => {
    setIsModalOpen(true);
  };

  // Handle Delete
  const handleDelete = (id: number) => {
    message.success(`Blog with ID ${id} deleted`);
  };

  // Table Columns
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space>
          <Button type="primary" icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="default" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)}>
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
          <h1 className="text-2xl font-semibold text-white">Blogs Overview</h1>
        </Col>
        <Col>
          <Link href="/dashboard/manage-blogs/add-blog">
            <Button type="primary">Add New Blog</Button>
          </Link>
        </Col>
      </Row>

      {/* Blog Table */}
      <Table dataSource={blogs} columns={columns} rowKey="id" />

      {/* Edit Blog Modal */}
      <Modal
        title="Edit Blog"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <p>Editing blog: Name</p>
      </Modal>
    </div>
  );
};

export default ManageBlogs;
