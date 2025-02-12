"use client";

import "@ant-design/v5-patch-for-react-19";
import {
  Table,
  Button,
  Space,
  Modal,
  message,
  Row,
  Col,
  TableColumnsType,
  Tag,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import { TBlog } from "@/types/blog.types";
import BlogUpdateForm from "./BlogUpdateForm";

interface DataType {
  key: string;
  title: string;
  isPublished: boolean;
  category: string | undefined;
}

const ManageBlogs = ({ blogs }: { blogs: TBlog[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);

  const blogInfo: DataType[] =
    blogs?.map((item: TBlog) => ({
      key: item._id,
      title: item.title,
      isPublished: item.isPublished,
      category: item.category,
    })) || [];

  // Handle Edit
  const handleEdit = (blogId: string) => {
    setSelectedBlog(blogId);
    setIsModalOpen(true);
  };

  // Handle Delete
  const handleDelete = (id: string) => {
    message.success(`Blog with ID ${id} has been successfully deleted.`);
    // console.log("handle data delete id", id);
    // const toastId = toast.loading("Loading...");

    // const res = await deleProduct(id);

    // if (res?.data?.success) {
    //   toast.success(res?.data?.message, { id: toastId });
    // }
    // if (!res?.data?.success) {
    //   toast.error(res?.data?.message, { id: toastId });
    // }
  };

  // Table Columns
  const columns: TableColumnsType<DataType> = [
    { title: "Blog Title", dataIndex: "title", key: "title" },
    {
      title: "Publish Status",
      dataIndex: "isPublished",
      render: (isPublished: boolean) =>
        isPublished ? (
          <Tag color={"success"}>isPublished</Tag>
        ) : (
          <Tag color={"default"}>NotPublished</Tag>
        ),
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (category: string) => <Tag color={"success"}>{category}</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: DataType) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record?.key)}
          >
            Edit
          </Button>
          <Button
            type="default"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record?.key)}
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
      <Row
        justify="space-between"
        align="middle"
        className="mb-4 p-4 bg-blue-500 rounded"
      >
        <Col>
          <h1 className="text-2xl font-semibold text-white">
            Blog Overview
          </h1>
        </Col>
        <Col>
          <Link href="/dashboard/manage-projects/add-project">
            <Button size="large" className="font-bold text-lg" type="primary">
              Add New Blog
            </Button>
          </Link>
        </Col>
      </Row>

      {/* Projects Table */}
      <Table dataSource={blogInfo} columns={columns} rowKey="id" />

      {/* Edit Project Modal */}
      <Modal
        title="Edit Project"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <BlogUpdateForm blogId={selectedBlog} />
      </Modal>
    </div>
  );
};

export default ManageBlogs;
