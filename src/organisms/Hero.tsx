import { motion } from 'framer-motion'
import devImg from '../assets/dev.png'
import { PrimaryButton } from '../atoms/Buttons'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center md:justify-between px-6 md:px-16 pt-28 relative overflow-hidden gap-4"
    >
      {/* 🌈 Gradient Glow */}
      <div className="hidden dark:block absolute w-[600px] h-[600px] bg-purple-500/30 blur-[150px] rounded-full left-[-200px] top-[100px]" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[150px] rounded-full right-[-150px] bottom-[100px]" />

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl z-10"
      >
        <p className="text-black dark:text-white font-semibold mb-3">Hello !</p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white">
          I'm{' '}
          <span className="text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent whitespace-nowrap">
            Jasmit Lathiya
          </span>
          <br />
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4 xl font-bold leading-tight text-black dark:text-white">
          Frontend Developer
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-400">
          Turning ideas into clean and scalable web experiences
        </p>

        {/* <div className="mt-8 flex gap-4">
          <PrimaryButton>Hire Me</PrimaryButton>

          <button className="px-6 py-3 rounded-lg border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition">
            Download CV
          </button>
        </div> */}
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      {/* RIGHT SIDE BACKGROUND EFFECT */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center w-[250px] sm:w-[350px] md:w-[450px] lg:w-[700px] h-[400px] md:h-[600px] relative z-10"
      >
        {/* 🔵 Main Neon Circle */}
        <div
          className="absolute w-[250px] md:w-[420px] h-[250px] md:h-[420px] rounded-full border border-cyan-400/30 
  shadow-[0_0_80px_rgba(34,211,238,0.4)]"
        />

        {/* 🟣 Inner Glow */}
        <div className="absolute w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-purple-500/20 blur-3xl" />

        {/* 🔵 Outer Glow */}
        <div className="absolute w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-cyan-400/10 blur-[120px]" />

        {/* ✨ Floating Particles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-3 h-3 bg-purple-400 rounded-full top-10 left-10 shadow-glow"
        />

        <motion.div
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full bottom-16 right-12 shadow-glow"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[280px] md:w-[480px] h-[280px] md:h-[480px] rounded-full border border-purple-400/20"
        />

        <motion.img
          src={devImg}
          alt="Developer"
          className="relative z-10 w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: 0 }}
        />
      </motion.div>
    </section>
  )
}
