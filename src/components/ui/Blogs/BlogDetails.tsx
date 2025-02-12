"use client";
import { motion } from "framer-motion";
import { Avatar, Col, Row, Space, Typography, Divider, Button } from "antd";
import Image from "next/image";
import { TBlog } from "@/types/blog.types";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { useRouter } from "next/navigation";

const BlogDetails = ({ blog }: { blog: TBlog }) => {
  const router = useRouter();

  return (
    <div className="my-5">
      
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={22} md={18} lg={14}>
        <Button
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={() => router.back()}
      >
        Go Back
      </Button>
          {/* Blog Author Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Space
              align="center"
              className="author-info"
              size="middle"
              style={{ marginBottom: "20px" }}
            >
              <Avatar
                size={50}
                src={
                  blog?.author?.profileUrl ||
                  "https://i.ibb.co/fVy964XL/scott-rodgerson-708on-MVu9v-I-unsplash.jpg"
                }
              />
              <div>
                <div className="font-semibold">{blog?.author?.name}</div>
                <div className="text-sm text-gray-500">
                  {new Date(blog?.updatedAt).toLocaleDateString()}
                </div>
              </div>
            </Space>
          </motion.div>

          {/* Blog Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="content"
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              {/* Blog Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="blog-image mb-6 lg:mb-0 lg:w-1/2"
              >
                <Image
                  width={700}
                  height={400}
                  src={
                    blog?.imageUrl ||
                    "https://i.ibb.co/fVy964XL/scott-rodgerson-708on-MVu9v-I-unsplash.jpg"
                  }
                  alt={blog?.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Blog Text Content */}
              <div className="content-text lg:w-1/2">
                <Typography.Title level={2} className="text-2xl font-bold mb-4">
                  {blog?.title}
                </Typography.Title>
                <Typography.Paragraph className="text-lg">
                  {blog?.content}
                </Typography.Paragraph>
              </div>
            </div>

            {/* Divider for better separation */}
            <Divider />
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogDetails;
