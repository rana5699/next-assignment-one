"use server";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
  const session = await getServerSession(authOptions);

  const blogData = Object.fromEntries(data.entries());

  const author = {
    name: session?.user?.name,
    email: session?.user?.email,
    profileUrl: session?.user?.image,
  };

  const isPublished = blogData.isPublished === "true";

  const blogWithAuthor = {
    ...blogData,
    isPublished,
    author,
  };

  const res = await fetch("https://blog-rest-api-self.vercel.app/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogWithAuthor),
  });

  const blogInfo = await res.json();
  
    if (blogInfo.success) {
      redirect(`/blogs/${blogInfo?.data?.data?._id}`);
    }

  return blogInfo;
};
