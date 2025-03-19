"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; // Import theme icons

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // This will only run on the client after the component has mounted
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Sync theme with the document and localStorage
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-300 transition-all"
    >
      {theme === "light" ? <Moon size={24} className="text-gray-800" /> : <Sun size={24} className="text-yellow-400" />}
    </button>
  );
};

export default ThemeSwitcher;
