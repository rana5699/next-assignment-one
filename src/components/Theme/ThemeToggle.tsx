// components/ThemeToggle.tsx
import { Switch } from "antd";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      checkedChildren="Dark"
      unCheckedChildren="Light"
    />
  );
};

export default ThemeToggle;
