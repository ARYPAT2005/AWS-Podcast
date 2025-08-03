import Image from "./Image.jpeg";
import { Button } from "../components/ui/button";
import { Download, Mail } from "lucide-react";
import { CardContent } from "../components/ui/card";
import Tilt from "react-parallax-tilt";

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <CardContent className="p-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl">
          <div className="flex-shrink-0 relative">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin"
              style={{ padding: "4px", animation: "spin 3s linear infinite" }}
            >
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 animate-pulse scale-110"></div>

            <div className="relative z-10">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                className="focus:outline-none"
              >
                <img
                  src={Image}
                  alt="Aryan Patel"
                  className="w-[250px] h-[250px] rounded-full object-cover shadow-2xl focus:outline-none"
                />
              </Tilt>
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Aryan Patel
              </h1>
              <p className="text-xl font-semibold text-gray-300">CS @ Georgia Tech</p>
            </div>

            <p className="text-lg leading-relaxed max-w-2xl text-white-400 font-light">
              I'm a passionate computer science student with a love for problem-solving and building innovative
              software solutions. Currently pursuing my degree at Georgia Tech, I enjoy working on projects that
              challenge me to learn new technologies and create meaningful impact through code. In my free time, I enjoy playing and watching sports like basketball, tennis, and football, as well as reading and spending time with friends and family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/Aryan_Patel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  scale={1.05}
                  className="focus:outline-none"
                >
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </Button>
                </Tilt>
              </a>

              <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05} className="focus:outline-none">
                <a href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50 hover:border-blue-300 px-8 py-3 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Me
                  </Button>
                </a>
              </Tilt>
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
};
