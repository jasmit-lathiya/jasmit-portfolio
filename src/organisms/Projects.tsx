import { EXPERIANCES, PROJECTS } from '../constants/project'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center py-24 px-6 max-w-5xl mx-auto gap-16"
    >
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          {/* <span className="text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent"> */}
          <span className="text-yellow-500 dark:text-white">Experience</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {EXPERIANCES.map((experiance, i) => (
            <ProjectCard project={experiance} index={i} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          {/* <span className="text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent"> */}
          <span className="text-yellow-500 dark:text-white">Project</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCard project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
