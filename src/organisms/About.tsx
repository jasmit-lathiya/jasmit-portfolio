import { motion } from 'framer-motion'
import collegeLogoImg from '../assets/collegeLogo.png' // ✅ import image

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center py-24 px-6 max-w-5xl mx-auto gap-8 text-gray-600 dark:text-gray-400 leading-relaxed"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col gap-4 "
      >
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent">
            About me
          </span>
        </h2>

        <p>
          I am a passionate frontend-focused web developer dedicated to building
          modern, responsive and user-friendly web applications. I specialize in
          React.js and have strong expertise in JavaScript, HTML, CSS, Redux,
          and Material UI (MUI), enabling me to create clean, scalable and
          efficient user interfaces.
        </p>

        <p>
          I focus on writing maintainable, high-quality code and designing
          intuitive user experiences that work seamlessly across all devices. I
          enjoy transforming ideas into functional, real-world products with a
          strong emphasis on performance and usability.
        </p>

        <p>
          In addition to frontend development, I have hands-on experience with
          backend platforms such as Firebase and Supabase, which allows me to
          understand full-stack workflows and build complete applications when
          needed. I have also deployed projects using Vercel and Firebase
          Hosting with GitHub integration, ensuring smooth and efficient
          development processes.
        </p>

        <p>
          I am always eager to learn new technologies, continuously improve my
          skills, and take on challenging projects that contribute to my growth
          as a developer.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col gap-4"
      >
        <h2 className="w-full text-3xl font-bold mb-4">
          <span className="text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent">
            Education
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <img
            src={collegeLogoImg}
            alt="College Logo"
            className="relative z-10 h-full max-h-[200px] max-w-[200px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          />
          <div className="flex flex-col gap-4 justify-center">
            <span>
              Dhirubhai Ambani Institute of Information and Communication
              Technologies (DA-IICT)
            </span>
            <span>B. Tech</span>
            <span>2017 - 2021</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
