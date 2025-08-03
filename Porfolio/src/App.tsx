import { ThemeProvider } from "./components/ui/theme-provider"
import { Navbar } from "./component/navbar.tsx"
import { Home } from "./component/Home.tsx"
import { Projects } from "./component/Projects.tsx"
import { Experience } from "./component/Experience.tsx"
import { Skills } from "./component/Skills.tsx"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Contact } from "./component/Contact.tsx"
function App() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (

       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div className="mt-10" id="skills">
          <Skills />
        </div>
        <div className="mt-0" id="contact">
          <Contact />
        </div>

        
      </div>
    </ThemeProvider>
  );
}

export default App
