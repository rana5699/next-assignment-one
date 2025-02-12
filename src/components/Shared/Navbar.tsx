"use client";
import "@ant-design/v5-patch-for-react-19";
import { useState } from "react";
import Link from "next/link";
import { Drawer, Menu, Button, Avatar, Tooltip } from "antd";
import { usePathname } from "next/navigation";
import { MenuFoldOutlined } from "@ant-design/icons";
import ThemeToggle from "../Theme/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import GoogleLoginBtn from "./GoogleLoginBtn";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

export const Navbar = ({ session }: { session: Session | null }) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/projects", label: "Projects" },
    { key: "/blogs", label: "Blogs" },
    { key: "/contact", label: "Contact" },
  ];

  if (session?.user) {
    menuItems.push({ key: "/dashboard", label: "Dashboard" });
  }

  const handleLogOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <header
      className={`flex items-center justify-between px-6 py-4  sticky top-0 z-50 bg-${theme}`}
    >
      <Link href="/" className="text-xl font-bold " aria-label="Go to Home">
        <h2>Blogs</h2>
      </Link>

      {/* Desktop Menu */}
      <nav>
        <Menu
          mode="horizontal"
          selectedKeys={[pathname]}
          theme={theme}
          color={theme}
          items={menuItems.map((item) => ({
            key: item.key,
            label: (
              <Link href={item.key} aria-label={item.label}>
                {item.label}
              </Link>
            ),
          }))}
          className="hidden sm:block gap-3"
        />
      </nav>

      <div className="flex justify-center gap-5 items-center">
        <ThemeToggle />
        {/* Social Login*/}
        <div className=" text-center">
          {session?.user ? (
            <div className="flex flex-col items-center m-4">
              <Tooltip
                title={
                  <Button type="primary" onClick={handleLogOut}>
                    Log out
                  </Button>
                }
                placement="top"
              >
                <Avatar
                  src={session.user.image}
                  alt={session.user.name!}
                  className="rounded-full"
                />
              </Tooltip>
            </div>
          ) : (
            <GoogleLoginBtn />
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <Button
        icon={<MenuFoldOutlined />}
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
      />

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <nav>
          <Menu
            mode="vertical"
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
          />
        </nav>
        <ThemeToggle />

        {/* Social Login*/}
        <div className=" text-center">
          <GoogleLoginBtn />
        </div>
      </Drawer>
    </header>
  );
};
