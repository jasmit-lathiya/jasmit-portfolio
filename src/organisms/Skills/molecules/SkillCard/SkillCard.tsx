import { motion } from 'framer-motion'
import { FunctionComponent, SVGProps } from 'react'

interface SkillCardProps {
  skillName: string
  index?: number
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
}

export default function SkillCard({ skillName, index, Icon }: SkillCardProps) {
  return (
    <motion.div
      key={skillName}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index ? index * 0.1 : 0 }}
      className="
                flex items-center gap-2 px-5 py-2
                bg-white dark:bg-black/40
                border border-black/10 dark:border-white/10
                rounded-full
                hover:scale-110
                transition-transform duration-300
                cursor-default
                text-gray-800 dark:text-gray-200
              "
    >
      {Icon && <Icon width="20px" height="20px" />}
      <span className="font-semibold">{skillName}</span>
    </motion.div>
  )
}
