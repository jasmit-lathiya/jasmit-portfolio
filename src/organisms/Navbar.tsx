import { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../context/ThemeContext'

const navItems = ['About', 'Skills', 'Experience', 'Contact']

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext)

  const scrollToSection = (sectionName: string) => {
    const section = document.getElementById(sectionName)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50"
    >
      {/* Navbar */}
      <div
        className="
        px-2 sm:px-4 md:px-8 py-4 flex justify-between items-center backdrop-blur-xl
        bg-white/70 dark:bg-black/40
        border-b border-black/10 dark:border-white/10
        transition-colors duration-300
      "
      >
        {/* Logo */}
        <h1
          onClick={() => scrollToSection('hero')}
          className="hidden md:block text-3xl font-bold text-yellow-500 dark:bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text dark:text-transparent cursor-pointer"
        >
          Jasmit Lathiya
        </h1>
        {/* Menu */}
        <div className="w-full md:w-auto flex items-center justify-evenly md:justify-start gap-2 md:gap-4 lg:gap-8 text-sm text-gray-700 dark:text-gray-300">
          {navItems.map((item) => (
            <span
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={'cursor-pointer text-xs sm:text-sm lg:text-base'}
            >
              {item}
            </span>
          ))}

          {/* Right Controls */}
          {/* Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="
            relative w-8 sm:w-16 h-8 flex items-center rounded-full p-1
            bg-gray-300 dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-cyan-400
            transition-all duration-300
          "
          >
            {/* Inner Track */}
            <div className="absolute inset-[2px] rounded-full bg-white dark:bg-black/80 backdrop-blur-xl" />

            {/* Circle */}
            <div
              className={`relative z-10 w-6 h-6 rounded-full bg-black dark:bg-white text-xs flex items-center justify-center transition-transform duration-300
              ${theme === 'dark' ? 'translate-x-0 sm:translate-x-8' : 'translate-x-0'}`}
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="hidden dark:block h-[2px] w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 opacity-70 blur-sm" />
    </motion.div>
  )
}
