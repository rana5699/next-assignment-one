"use server";
import { redirect } from "next/navigation";

export const UpdateProject = async (data: FormData) => {
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
