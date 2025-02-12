"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Avatar, Button, Card } from "antd";
import Image from "next/image";
import { FilePdfOutlined } from "@ant-design/icons";

// Role Options for Dynamic Text
const roles = ["Web Designer", "Frontend Developer", "UI/UX Enthusiast"];

const bannerData = {
  name: "Alex Smith",
  description:
    "Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi.",
  profileImage:
    "https://i.ibb.co/fVy964XL/scott-rodgerson-708on-MVu9v-I-unsplash.jpg", // Replace with actual profile image URL
};

const Banner = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center  px-4">
      {/* Card Container */}
      <Card
        className="rounded-3xl w-full shadow-lg p-3 md:p-0 lg:max-w-6xl mx-auto text-center border"
        bordered={false}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <Avatar
            size={160}
            src={
              <Image
                src={bannerData.profileImage}
                alt={bannerData.name}
                width={160}
                height={160}
                className="object-cover rounded-full"
              />
            }
          />
        </motion.div>

        {/* Name */}
        <motion.h2
          className="text-4xl font-bold mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {bannerData.name}
        </motion.h2>

        {/* Dynamic Role Text with Smooth Animation */}
        <div className="relative h-10 overflow-hidden mt-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[currentRole]}
              className="text-lg  absolute w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {roles[currentRole]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          className=" mt-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {bannerData.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Resume Download */}
          <div className="text-center">
            <Button
              type="primary"
              size="large"
              icon={<FilePdfOutlined />}
              href="/resume.pdf"
              download
            >
              Download Resume
            </Button>
          </div>
          {/* <Button type="primary"  size="large">
            Contact
          </Button> */}
        </motion.div>
      </Card>
    </div>
  );
};

export default Banner;
