"use client";
import { useRouter } from "next/navigation";
import { Card, Typography, Tag, Button } from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { TProject } from "@/types/project.types";

const { Title, Paragraph } = Typography;

const ProjectDetailsCard = ({ project }: { project: TProject }) => {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Button
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={() => router.back()}
      >
        Back
      </Button>

      <Card className="shadow-lg rounded-lg">
        <Image
          alt={project?.title}
          width={800}
          height={400}
          src={project?.image || "/placeholder.jpg"}
        />
        <Title>{project?.title}</Title>
        <Paragraph>{project?.description}</Paragraph>

        <div className="mb-4">
          <strong>Technologies:</strong>
          <div className="mt-2">
            {project?.technologies.map((tech: string) => (
              <Tag color="blue" key={tech}>
                {tech}
              </Tag>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          {project?.githubRepo && (
            <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
              <Button type="primary" icon={<GithubOutlined />}>
                GitHub Repo
              </Button>
            </a>
          )}
          {project?.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <Button type="primary" icon={<LinkOutlined />}>
                Live Link
              </Button>
            </a>
          )}
        </div>

        <div className="mt-6">
          <Title level={5}>Author: {project?.author?.name}</Title>
          <Paragraph>Email: {project?.author?.email}</Paragraph>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetailsCard;
