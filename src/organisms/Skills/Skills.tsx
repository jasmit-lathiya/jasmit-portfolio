import { ReactComponent as ReactIcon } from '../../assets/Icons/react.svg'
import { ReactComponent as JavaScriptIcon } from '../../assets/Icons/javascript.svg'
import { ReactComponent as TypeScriptIcon } from '../../assets/Icons/typescript.svg'
import { ReactComponent as HtmlIcon } from '../../assets/Icons/html.svg'
import { ReactComponent as CSSIcon } from '../../assets/Icons/css.svg'
import { ReactComponent as SASSIcon } from '../../assets/Icons/sass.svg'
import { ReactComponent as MUIIcon } from '../../assets/Icons/mui.svg'
import { ReactComponent as TailwindIcon } from '../../assets/Icons/tailwind.svg'
import { ReactComponent as ReduxIcon } from '../../assets/Icons/redux.svg'
import { ReactComponent as NextjsIcon } from '../../assets/Icons/nextjs.svg'
import { ReactComponent as FarmerIcon } from '../../assets/Icons/framer.svg'
import { ReactComponent as FirebaseIcon } from '../../assets/Icons/firebase.svg'
import { ReactComponent as SupabaseIcon } from '../../assets/Icons/supabase.svg'
import { ReactComponent as GitIcon } from '../../assets/Icons/git.svg'
import { ReactComponent as GithubIcon } from '../../assets/Icons/github.svg'
import { ReactComponent as VSCodeIcon } from '../../assets/Icons/vscode.svg'
import { ReactComponent as CursorIcon } from '../../assets/Icons/cursor.svg'
import { ReactComponent as PostmanIcon } from '../../assets/Icons/postman.svg'
import { ReactComponent as FigmaIcon } from '../../assets/Icons/figma.svg'
import { ReactComponent as VercelIcon } from '../../assets/Icons/vercel.svg'
import SkillCard from './molecules/SkillCard'

const skills = [
  { name: 'React.js', icon: ReactIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'HTML', icon: HtmlIcon },
  { name: 'CSS', icon: CSSIcon },
  { name: 'SASS', icon: SASSIcon },
  { name: 'Material UI', icon: MUIIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'Redux', icon: ReduxIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'Framer', icon: FarmerIcon },
]

const beAndHosting = [
  { name: 'Firebase', icon: FirebaseIcon },
  { name: 'Supabase', icon: SupabaseIcon },
  { name: 'Vercel', icon: VercelIcon },
]

const tools = [
  { name: 'Git', icon: GitIcon },
  { name: 'Github', icon: GithubIcon },
  { name: 'VS Code', icon: VSCodeIcon },
  { name: 'Cursor', icon: CursorIcon },
  { name: 'Postman', icon: PostmanIcon },
  { name: 'Figma', icon: FigmaIcon },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className=" min-h-screen flex flex-col items-center justify-evenly py-24 px-6 bg-gray-100 dark:bg-[#0a0a0a] gap-10"
    >
      <h2 className="text-3xl font-bold text-center">
        <span className="text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent">
          Skills
        </span>
      </h2>

      <div className="flex flex-col justify-center gap-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center ">
          <span className="text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent">
            Frontend Development
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <SkillCard skillName={skill.name} index={i} Icon={skill.icon} />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center">
          <span className="text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent">
            Backend Development & Hosting
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {beAndHosting.map((skill, i) => (
            <SkillCard skillName={skill.name} index={i} Icon={skill.icon} />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center">
          <span className="text-yellow-500 dark:bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text dark:text-transparent">
            Tools
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((skill, i) => (
            <SkillCard skillName={skill.name} index={i} Icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
