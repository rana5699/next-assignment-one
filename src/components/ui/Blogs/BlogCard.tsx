import { TBlog } from "@/types/blog.types";
import { Button, Card, Divider, } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const BlogCard = ({blog}:{blog:TBlog}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      // className="w-full "
    >
      <Card
        className="flex flex-col w-full  shadow-lg rounded-lg"
        // hoverable
        cover={
          <Image
            width={200}
            height={100}
            // priority
            src={ "https://i.ibb.co.com/fVy964XL/scott-rodgerson-708on-MVu9v-I-unsplash.jpg"}
            alt={blog?.title}
            className="rounded-lg object-cover mx-auto"
          />
        }
      >
        <div className="flex flex-col flex-grow h-full">
          <Divider plain>
            <p className=" bg-[#285CE1]  text-white text-sm font-semibold px-2 py-1 rounded">
              {blog?.category}
            </p>
          </Divider>

          <div className="flex flex-col flex-grow w-full text-center">
            <h2 className=" font-bold text-xl min-h-[48px]">
              {blog?.title}
            </h2>

            <p className=" line-clamp-3">{blog?.content}</p>

          
            

            {/* Author */}
            {blog?.author && (
              <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
                <span>By</span>
                {blog?.author.profileUrl ? (
                  <Link href={blog?.author.profileUrl} target="_blank">
                    <span className="text-blue-500 font-medium hover:underline">
                      {blog?.author.name}
                    </span>
                  </Link>
                ) : (
                  <span className="font-medium">{blog?.author.name}</span>
                )}
              </div>
            )}

            {/* Read More Button */}
            <div className="mt-4">
              <Link href={`/blogs/${blog?._id}`}>
                <Button type="primary">Read More</Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
