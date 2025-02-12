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
          backgroundColor: themeConfig?.token.colorBgBase, // ✅ Apply global background color
          color: themeConfig.token.colorTextBase, // ✅ Apply global text color
          minHeight: "100vh", // ✅ Ensure full-page coverage
          transition: "background-color 0.3s ease", // ✅ Smooth transition
        }}
      >
        {children}
      </div>
    </ConfigProvider>
  );
};

export default ThemeProviderLayout;
