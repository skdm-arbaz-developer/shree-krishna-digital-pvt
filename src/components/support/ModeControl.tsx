import { Button } from "antd";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

export default function ModeControl() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className="dark-light-button mx-2">
      {theme === "dark" ? <FiSun /> : <BsFillMoonStarsFill />}
    </Button>
  );
}
