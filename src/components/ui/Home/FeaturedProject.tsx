"use client";

import useSWR from "swr";
import ProjectCard from "./Projects/ProjectCard";
import { TProject } from "@/types/project.types";
import { Alert, Skeleton, Typography } from "antd";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const FeaturedProject = () => {
  const { data, error, isLoading } = useSWR(
    "https://blog-rest-api-self.vercel.app/api/projects",
    fetcher
  );

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Alert message="Failed to load projects" type="error" showIcon />
      </div>
    );
  }

  const featuredProjects = data?.data?.filter((project: TProject) => project.featured);


  return (
    <div className="">
      <Typography.Title level={2} className="text-center mb-8">
        Featured Projects
      </Typography.Title>

      <Skeleton loading={isLoading} active>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mx-auto justify-center">
          {featuredProjects?.map((project: TProject) => (
            <ProjectCard key={project?._id} project={project}/>
          ))}
        </div>
      </Skeleton>
    </div>
  );
};

export default FeaturedProject;
