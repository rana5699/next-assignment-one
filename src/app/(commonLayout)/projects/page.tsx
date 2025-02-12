"use client";

import useSWR from "swr";
import { Alert, Skeleton } from "antd";
import ProjectCard from "@/components/ui/Home/Projects/ProjectCard";
import { TProject, } from "@/types/project.types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProjectsPage = () => {
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

  const projects:TProject[] = data?.data

  return (
    <div className="p-5 mx-auto w-full flex justify-center ">
      <Skeleton loading={isLoading} active>
        <div className="grid grid-cols-1 flex-wrap  md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mx-auto justify-center">
          {projects?.map((project: TProject) => (
            <ProjectCard key={project?._id} project={project} />
          ))}
        </div>
      </Skeleton>
    </div>
  );
};

export default ProjectsPage;
