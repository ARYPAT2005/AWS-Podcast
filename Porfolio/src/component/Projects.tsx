import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Github, ExternalLink, Play } from "lucide-react"
import Podverse from "./Podverse.png"
import Pharma from "./Pharma.png"
import Poketrade from "./Poketrade.png"
import GTMovie from "./GTMovieStore.png"
import Tilt from 'react-parallax-tilt';

export const Projects = () => {
  const projects = [
    {
      title: "AWS Podverse ",
      description: "I developed and deployed a full-stack podcast platform using AWS services, including Lambda for serverless compute, EC2 for scalable hosting, S3 for media storage, DynamoDB for NoSQL data management, and Cognito for secure user authentication. I achieved 99.9% uptime, reduced latency by 50%, and optimized data handling by 60% through efficient cloud architecture.",
      technologies: [
        "AWS Lambda",
        "AWS EC2",
        "AWS S3",
        "AWS DynamoDB",
        "AWS Cognito",
        "AWS IAM",
        "React",
        "Next.js"
      ],
      github: "https://github.com/ARYPAT2005/AWS-Podcast",
      live: "https://www.podverse.site/",
      demo: "https://drive.google.com/file/d/16cHtIUIzxmvZmcALNuontJ094vGkDHXr/view?usp=sharing",
      image: Podverse
    },
    {
      title: "Pharma",
      description: "I built a study tool to help pharmacy students learn more effectively through a GPT-4o-powered chatbot and intelligent flashcard generator. I integrated OpenAI GPT-4o to provide real-time, personalized responses. I developed a RESTful API with Express.js and Node.js to manage flashcards and user data stored in MongoDB. I also implemented JWT authentication with token refresh and expiry to ensure secure and persistent user sessions.",
      technologies: ["Node.js", "React", "MongoDB", "Express.js", "JSON Web Token (JWT)"],
      github: "https://github.com/ARYPAT2005/Pharma",
      demo: "https://drive.google.com/file/d/1Pl7ypX87DTAzxwuOtCqxqZR0HkAth2gG/view",
      image: Pharma
    },
    {
      title: "PokéTrade",
      description: "I built a full-stack trading platform for virtual Pokémon cards as part of a team project. We followed Agile methodology to deliver the project iteratively while collaborating closely with a real-world client. This experience helped me develop strong teamwork skills and adapt to client feedback in a professional environment.",
      technologies: ["Django", "React", "Typescript"],
              github: "https://github.com/ARYPAT2005/Poketrade",
        live: "https://poketrade-s9qx.onrender.com/",
        image: Poketrade
    },
    {
      title: "GT Movie Store",
      description: "GT Movies Store is a web application that allows users to browse a catalog of movies, view detailed information about each movie—including name, price, description, and image—and place orders to purchase them. Users can also create, edit, and delete movie reviews.",
      technologies: ["Django"],
              github: "https://github.com/ARYPAT2005/GTMovieStore",
        demo: "https://drive.google.com/file/d/1Nynd9JZ-M_CRMlcHUQ9WMl2jTWZsuIte/view",
        image: GTMovie
    }

  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents different skills and technologies I've learned.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
             <Tilt
             glareEnable={true}
             glareMaxOpacity={0.2}
             scale={1.05}
                 className="focus:outline-none"
         >
                          <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {project.title.charAt(0)}
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-md hover:shadow-lg"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  )
} 