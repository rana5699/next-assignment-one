"use client";

import {  Layout, Menu, } from "antd";
import React from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/context/ThemeContext";
import Link from "next/link";
import ThemeToggle from "@/components/Theme/ThemeToggle";
// import { Session } from "next-auth";

const { Sider } = Layout;

const DashboardSidebar = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  const menuItems = [
    { key: "/dashboard", label: "Dashboard Home" },
    { key: "/dashboard/manage-blogs", label: "Manage Blogs" },
    { key: "/dashboard/manage-projects", label: "Manage Projects" },
    { key: "/dashboard/message", label: "Show Message" },
    { key: "/", label: "Home" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }} className="">
      <Sider className="p-3 w-64 sm:w-56 md:w-72">
        <nav>
          <Menu
            mode="inline"
            theme={theme}
            selectedKeys={[pathname]}
            items={menuItems.map((item) => ({
              key: item.key,
              label: (
                <Link href={item.key} aria-label={item.label}>
                  {item.label}
                </Link>
              ),
            }))}
          >
           
          </Menu>
          
          <ThemeToggle />


        </nav>
      </Sider>
    </Layout>
  );
};

export default DashboardSidebar;
