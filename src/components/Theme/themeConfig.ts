
import type { ThemeConfig } from "antd";

export const getThemeConfig = (mode: "light" | "dark"): ThemeConfig => ({
  token: {
    colorPrimary: mode === "dark" ? "#000C17" : "#285CE1",
    colorBgBase: mode === "dark" ? "#000C17" : "#ffffff", 
    colorTextBase: mode === "dark" ? "#ffffff" : "#000C17", 
  },
});
