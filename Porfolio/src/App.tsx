import { ThemeProvider } from "@/components/ui/theme-provider"
import { Navbar } from "./component/navbar.tsx"
import { Home } from "./component/Home.tsx"
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
