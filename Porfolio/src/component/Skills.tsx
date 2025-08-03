import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiDjango,
  SiTailwindcss,
  SiVite,
  SiDocker,
  SiJest,
  SiStorybook,
  SiMongodb,
  SiGit,
  SiGithub,
  SiExpress
} from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
export const Skills = () => {
    const skills = [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
    ];

  return (
   <>
   <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 mb-1">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center space-y-3 hover:scale-110 transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-all duration-300">
                    <IconComponent
                      className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  )
}

