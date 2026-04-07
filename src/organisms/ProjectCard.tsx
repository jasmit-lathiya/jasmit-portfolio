import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '../constants/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      onClick={() => setIsModalOpen(true)}
      className="
        relative p-6 rounded-2xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 
        overflow-hidden cursor-pointer
        transition-shadow duration-300
        hover:shadow-2xl
      "
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
    >
      {/* Gradient overlay */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `conic-gradient(
            from 180deg at ${mousePos.x}px ${mousePos.y}px,
            rgba(236,72,153,0.3),
            rgba(139,92,246,0.3),
            rgba(6,182,212,0.3),
            rgba(236,72,153,0.3)
          )`,
        }}
      />
      <h3 className="relative text-xl font-semibold">{project.title}</h3>
      <p className="relative text-gray-600 dark:text-gray-400 mt-2">
        {project.desc}
      </p>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            {/* Modal content */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-lg w-full shadow-xl relative max-w-[90vw] max-h-[90vh] overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <button
                  className="text-gray-500 hover:text-black dark:hover:text-white cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{project.desc}</p>

              {project.liveSiteURL && (
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  You can see live site here :{' '}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                      window.open(`https://${project.liveSiteURL}`)
                    }}
                  >
                    {project.liveSiteURL}
                  </span>
                </p>
              )}
              {/* Explanation list */}
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 max-h-[70vh] overflow-auto no-scrollbar mt-4 pt-4 border-t border-gray-300">
                {project.explanation?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
