"use client";

import useSWR from "swr";
import ManageBlogs from "@/components/ui/dashboard/Blogs/ManageBlogs";
import { Skeleton } from "antd";
import { TBlog } from "@/types/blog.types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ManageBlogsPage = () => {
  const { data, isLoading } = useSWR(
    "https://blog-rest-api-self.vercel.app/api/blogs",
    fetcher
  );
  
  if (isLoading) {
    return (
      <div>
        <Skeleton active /> 
      </div>
    );
  }

   const blogs:TBlog[] = data?.data
  return (
    <div>
      <ManageBlogs blogs={blogs}  />
    </div>
  );
};

export default ManageBlogsPage;
