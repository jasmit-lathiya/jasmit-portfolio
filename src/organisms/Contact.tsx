import { motion } from "framer-motion";
import { ReactComponent as MailIcon } from "../assets/Icons/mail.svg";
import { ReactComponent as LinkedInIcon } from "../assets/Icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/Icons/github.svg";
import { PrimaryButton } from "../atoms/Buttons";
import AnimatedText from "../molecules/animatedText";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-gray-100 dark:bg-[#0a0a0a] text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className=" text-center mb-2">
          <span className=" text-3xl font-bold text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent">
            Contact
          </span>
        </h2>
        <AnimatedText
          sentence="Have a project in mind?"
          className="text-gray-600 dark:text-gray-400"
        />

        <AnimatedText
          sentence="Let's build something amazing, Available for freelancing work."
          className="text-gray-600 dark:text-gray-400 mb-8"
        />

        <div className="flex flex-row gap-2 justify-center">
          <a
            href="mailto:lathiyajasmit@gmail.com"
            aria-label="Email Jasmit Lathiya"
            className="inline-flex px-6 py-3 rounded-lg bg-yellow-500 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500 text-white hover:scale-105 transition hover:text-green-400"
          >
            <MailIcon width="30px" height="30px" aria-hidden="true" />
          </a>

          <PrimaryButton
            aria-label="Open Jasmit Lathiya's LinkedIn profile"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/jasmit-lathiya-655424166",
              );
            }}
            className="text-white hover:text-[#0A66C2]"
          >
            <LinkedInIcon width="30px" height="30px" aria-hidden="true" />
          </PrimaryButton>
          <PrimaryButton
            aria-label="Open Jasmit Lathiya's GitHub profile"
            onClick={() => {
              window.open("https://github.com/jasmit-lathiya");
            }}
            className="text-white hover:text-black"
          >
            <GithubIcon width="30px" height="30px" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </motion.div>
    </section>
  );
}
