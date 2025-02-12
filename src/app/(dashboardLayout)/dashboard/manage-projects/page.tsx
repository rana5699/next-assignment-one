"use client";

import useSWR from "swr";
import ManageProjects from "@/components/ui/dashboard/projects/ManageProjects";
import { Skeleton } from "antd";
import { TProject } from "@/types/project.types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ManageProjectsPage = () => {
  const { data, isLoading } = useSWR(
    "https://blog-rest-api-self.vercel.app/api/projects",
    fetcher
  );

  if (isLoading) {
    return (
      <div>
        <Skeleton active /> 
      </div>
    );
  }

   const projects:TProject[] = data?.data

  return (
    <div>
      <ManageProjects projects={projects} />
    </div>
  );
};

export default ManageProjectsPage;
