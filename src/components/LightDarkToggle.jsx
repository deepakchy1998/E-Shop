import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const LightDarkToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300 transform hover:scale-110"
      title="Toggle Light/Dark Mode"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default LightDarkToggle;
