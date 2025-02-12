"use client";

import useSWR from "swr";
import { Col, Empty, Row, Skeleton } from "antd";
import BlogCard from "./BlogCard";
import { TBlog } from "@/types/blog.types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Blogs = () => {
  const { data, error, isLoading } = useSWR(
    "https://blog-rest-api-self.vercel.app/api/blogs",
    fetcher
  );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-6 mb-5">
      {/* Responsive Product Grid */}
      <Skeleton loading={isLoading} active>
        <Row gutter={[16, 16]} justify="center" className="mt-7">
          {data?.data && data?.data.length > 0 ? (
            data?.data.map((blog: TBlog, index: number) => (
              <Col key={index} xs={24} sm={12} lg={6} xl={6}>
                <BlogCard key={index} blog={blog} />
              </Col>
            ))
          ) : (
            <Empty />
          )}
        </Row>
      </Skeleton>
    </div>
  );
};

export default Blogs;
