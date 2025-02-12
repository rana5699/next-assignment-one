import { Card, Button, Typography, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import Image from "next/image";
import { TProject } from "@/types/project.types";
import Link from "next/link";

const { Title, Paragraph } = Typography;


const ProjectCard = ({project}:{project:TProject}) => {
  return (
    <div>
      <Card
        cover={
          <div className="relative w-full h-48">
            <Image
              alt={project?.title}
              src={project?.image || "/placeholder.jpg"}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        }
        className="shadow-lg rounded-lg overflow-hidden"
      >
        <Title level={4} className="truncate">
          {project?.title}
        </Title>
        <Paragraph className="line-clamp-2">{project?.description}</Paragraph>

        <div className="mb-3">
          {project?.technologies?.map((tech) => (
            <Tag color="blue" key={tech}>
              {tech}
            </Tag>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">
            By {project?.author?.name || "Unknown"}
          </span>
          <Link  href={`/projects/${project?._id}`}>
          <Button
            type="primary"
            icon={<EyeOutlined />}
           
          >
            View Details
          </Button></Link>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
