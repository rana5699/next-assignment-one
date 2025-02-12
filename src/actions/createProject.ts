"use server";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const session = await getServerSession(authOptions);

  const author = {
    name: session?.user?.name,
    email: session?.user?.email,
    profileUrl: session?.user?.image,
  };

  const projectData = Object.fromEntries(data.entries());

  let technologies = [];
  if (projectData.technologies) {
    try {
      technologies = JSON.parse(projectData.technologies as string);
    } catch (error) {
      console.error("Error parsing technologies:", error);
    }
  }

  const featured = projectData.featured === "true";

  const projectWithAuthor = {
    ...projectData,
    technologies,
    featured,
    author,
  };

  const res = await fetch(
    "https://blog-rest-api-self.vercel.app/api/projects",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectWithAuthor),
    }
  );

  const projectInfo = await res.json();

  if (projectInfo.success) {
    redirect(`/projects/${projectInfo?.data?.data?._id}`);
  }

 
  return projectInfo;
};
