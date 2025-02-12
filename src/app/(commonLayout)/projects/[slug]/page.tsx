"use client";
import useSWR from "swr";
// import { Metadata } from "next";
import { useParams } from "next/navigation";
import { Skeleton, Space } from "antd";
import { TProject, TProjectResponse } from "@/types/project.types";
import ProjectDetailsCard from "@/components/ui/Home/Projects/ProjectDetailsCard";

// export const metadata: Metadata = {
//   title: "Home | Projects | Project Name",
// };

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const ProjectPage = () => {
  const { slug } = useParams();

  const { data, error, isLoading } = useSWR<TProjectResponse>(
    slug ? `https://blog-rest-api-self.vercel.app/api/projects/${slug}` : null,
    fetcher
  );

  if (isLoading) {
    return (
      <div className="w-full mx-auto">
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Skeleton.Image style={{ width: "100%", height: 250 }} />
          <Skeleton active paragraph={{ rows: 2 }} />
          <Skeleton.Button active size="large" block />
          <Skeleton.Input active size="large" />
          <Skeleton.Button active size="large" block />
        </Space>
      </div>
    );
  }

  if (error || !data?.data) {
    return <div className="error-message">Error loading blog content.</div>;
  }

  const projectDetails: TProject | undefined = data?.data;

  return (
    <div>
      <ProjectDetailsCard project={projectDetails} />
    </div>
  );
};

export default ProjectPage;
