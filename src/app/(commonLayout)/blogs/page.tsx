
import Blogs from "@/components/ui/Blogs/Blogs";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Home | Blog',
}

const BlogsPage = () => {

  return <>
  <Blogs />
</>;
};

export default BlogsPage;
