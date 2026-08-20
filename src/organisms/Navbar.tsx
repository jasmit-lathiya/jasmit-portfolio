import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import NavItem from "../molecules/navItem";

const navItems = ["About", "Skills", "Experience", "Contact"];

const scrollToSection = (sectionName: string) => {
  const section = document.getElementById(sectionName);
  section?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 w-full z-50 h-16"
    >
      {/* Navbar */}
      <div
        className="
        px-2 sm:px-4 md:px-8 py-4 flex justify-between items-center backdrop-blur-md
        border-b border-black/10 dark:border-white/10
        transition-colors duration-300
      "
      >
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("hero")}
          className="text-3xl font-bold cursor-pointer whitespace-nowrap"
        >
          <span className="text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent whitespace-nowrap">
            Jasmit Lathiya
          </span>
          {/* Jasmit Lathiya */}
        </h1>
        {/* Menu */}
        <div className="w-full md:w-auto flex items-center justify-end md:justify-start gap-2 md:gap-4 lg:gap-8 text-sm text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <NavItem
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </NavItem>
          ))}

          {/* Right Controls */}
          {/* Toggle */}
          <button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
            relative w-8 md:w-16 h-8 flex items-center rounded-full p-1
            bg-gray-300 dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-cyan-400
            transition-transform duration-300
          "
          >
            {/* Inner Track */}
            <div className="absolute inset-[2px] rounded-full bg-white dark:bg-black/80 backdrop-blur-xl" />

            {/* Circle */}
            <div
              className={`will-change-transform relative z-10 w-6 h-6 rounded-full bg-black dark:bg-white text-xs flex items-center justify-center transition-transform duration-300
              ${theme === "dark" ? "md:translate-x-8" : "translate-x-0"}`}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="hidden dark:block h-[2px] w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 opacity-70 blur-sm" />
    </motion.div>
  );
}
