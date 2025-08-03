import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const Contact = () => {
  const contacts = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/ARYPAT2005",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/aryan-patel-76b87a279/",
    },
    {
      name: "Email",
      icon: MdEmail,
      url: "mailto:arypat2005@gmail.com",
    },
  ]

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-slate-950 p-8 pt-20">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-5">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 shadow-md">
                  <Icon className="w-10 h-10 text-gray-800 dark:text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{contact.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}

