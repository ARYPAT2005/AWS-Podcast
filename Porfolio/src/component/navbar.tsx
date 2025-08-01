import { useState } from "react"
import { Home, Folder, Briefcase, Settings, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ModeToggle } from "@/components/ui/mode-toggle"

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home")

  const tabs = [
    { name: "home", icon: Home, label: "Home" },
    { name: "folder", icon: Folder, label: "Projects" },
    { name: "briefcase", icon: Briefcase, label: "Experience" },
    { name: "settings", icon: Settings, label: "Contact" },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-100 p-2 rounded-full shadow-lg flex items-center justify-between gap-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      
        <div className="flex space-x-2">
          <TooltipProvider>
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.name
              return (
                <Tooltip key={tab.name}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`
                        rounded-full transition-colors duration-200
                        ${isActive
                          ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white shadow-inner"
                          : "text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        }
                      `}
                      onClick={() => setActiveTab(tab.name)}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tab.label}</p>
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </TooltipProvider>
           <ModeToggle />
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}