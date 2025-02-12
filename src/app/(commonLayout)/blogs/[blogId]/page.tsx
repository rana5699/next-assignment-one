"use client";
import { useParams } from "next/navigation";
import useSWR from "swr";
import {  Col, Row, Skeleton, } from "antd";
import { TBlog, TBlogResponse } from "@/types/blog.types";
import BlogDetails from "@/components/ui/Blogs/BlogDetails";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BlogPage = () => {
  const { blogId } = useParams();

  const url = process.env.BACK_END_API

  const { data, error, isLoading } = useSWR<TBlogResponse>(
    blogId ? `${process.env.BACK_END_API}/blog/${blogId}` : null,
    fetcher
  );

  console.log(data,url)

  if (isLoading) {
    return (
      <div className="loading-container">
        <Skeleton active avatar paragraph={{ rows: 4 }} />
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={22} md={18} lg={14}>
            {/* Skeleton for Author Info */}
            <Skeleton active avatar paragraph={{ rows: 2 }} title={false} />
            {/* Skeleton for Blog Content */}
            <Skeleton.Image active />
            <Skeleton paragraph={{ rows: 4 }} />
          </Col>
        </Row>
      </div>
    );
  }

  if (error || !data?.data) {
    return <div className="error-message">Error loading blog content.</div>;
  }

  const blogDetails: TBlog | undefined = data?.data;

  return (
    <div className="my-5 ">
    <BlogDetails blog={blogDetails}/>
    </div>
  );
};

export default BlogPage;
