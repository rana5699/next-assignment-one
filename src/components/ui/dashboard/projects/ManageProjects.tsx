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
import { EditOutlined, DeleteOutlined, LinkOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import { TProject } from "@/types/project.types";
import UpdateForm from "./ProjectUpdateForm";

interface DataType {
  key: string;
  title: string;
  featured: boolean;
  liveLink: string | undefined;
}

const ManageProjects = ({ projects }: { projects: TProject[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);


  const projectInfo: DataType[] =
    projects?.map((item: TProject) => ({
      key: item._id,
      title: item.title,
      featured: item.featured,
      liveLink: item.liveLink,
    })) || [];

  // Handle Edit
  const handleEdit = (projectId:string) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  // Handle Delete
  const handleDelete = (id: string) => {
    message.success(`Project with ID ${id} has been successfully deleted.`);
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
    { title: "Project Title", dataIndex: "title", key: "title" },
    {
      title: "Status",
      dataIndex: "featured",
      render: (featured: boolean) =>
        featured ? (
          <Tag color={"success"}>IsFeatured</Tag>
        ) : (
          <Tag color={"default"}>NotFeatured</Tag>
        ),
    },
    {
      title: "Live Link",
      dataIndex: "liveLink",
      render: (liveLink: string | undefined) =>
        liveLink ? (
          <Link href={liveLink} target="_blank" rel="noopener noreferrer" className="flex gap-1">
           <LinkOutlined  />  {liveLink}
          </Link>
        ) : (
          <Tag color={"warning"}>Link not provided</Tag>
        ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (  record: DataType) => (
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
            Project Overview
          </h1>
        </Col>
        <Col>
          <Link href="/dashboard/manage-projects/add-project">
            <Button size="large" className="font-bold text-lg" type="primary">Add New Project</Button>
          </Link>
        </Col>
      </Row>

      {/* Projects Table */}
      <Table dataSource={projectInfo} columns={columns} rowKey="id" />

      {/* Edit Project Modal */}
      <Modal
        title="Edit Project"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
      

        <UpdateForm projectId={selectedProject} />
      </Modal>
    </div>
  );
};

export default ManageProjects;
