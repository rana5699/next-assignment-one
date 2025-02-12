"use client";

import { ConfigProvider } from "antd";
import { useTheme } from "../context/ThemeContext";
import { getThemeConfig } from "./themeConfig";

const ThemeProviderLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const themeConfig = getThemeConfig(theme);

  return (
    <ConfigProvider theme={themeConfig}>
      <div
        style={{
          backgroundColor: themeConfig?.token?.colorBgBase, 
          color: themeConfig?.token?.colorTextBase, 
          minHeight: "100vh",
          transition: "background-color 0.3s ease", 
        }}
      >
        {children}
      </div>
    </ConfigProvider>
  );
};

export default ThemeProviderLayout;
