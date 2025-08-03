import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Calendar, MapPin, Building } from "lucide-react"

export const Experience = () => {
  const experiences = [
    {
      title: "Undergraduate Researcher",
      company: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      period: "Aug 2025 - Present",
      description: "Working on the Autonomous and Connected Transportation Driving Simulator Team led by Dr. Srinivas Peeta. Contributing to research in autonomous vehicle technology and transportation systems.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Simulation", "Research"],
      type: "Research"
    },
    {
      title: "Academic Tutor",
      company: "Knack",
      location: "Atlanta, GA",
      period: "Jul 2025 - Present",
      description: "Providing one-on-one tutoring sessions focused on reinforcing concepts in Object-Oriented Programming (inheritance, polymorphism, encapsulation), Data Structures (arrays, linked lists, stacks, queues, trees, graphs), and Discrete Mathematics (logic, set theory, combinatorics, proofs).",
      technologies: ["Java", "Data Structures", "Discrete Mathematics", "Tutoring", "Object-Oriented Programming"],
      type: "Part-time"
    },
    {
      title: "Software Engineer Intern",
      company: "Biotechnology Skills Development Program",
      location: "Atlanta, GA",
      period: "Mar 2025 - Present",
      description: "Developed the Molecular Evolution Core Lab website using the MERN stack to improve the lab's online presence and showcase research initiatives and services. Built a responsive contact form, enabling over 20 clients to easily reach out for service and collaboration inquiries. Implemented and maintained automated Jest tests, increasing backend reliability by 25% and reducing bug-related issues by 40%.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "Jest", "JavaScript"],
      type: "Internship"
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the valuable experiences that have shaped my career in technology.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {experience.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Building className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-300 font-medium">
                        {experience.company}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.location}
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">
                      {experience.type}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {experience.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 