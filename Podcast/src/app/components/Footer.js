import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-4">
          <p className="text-white font-medium">
            &copy; 2025 AWS Podverse. Built with Next.js and AWS.
          </p>
        </div>

        <div className="flex items-center justify-center items-center mx-auto max-w-xs text-slate-400">
          <div className="flex space-x-4">
            <a
              href="https://github.com/ARYPAT2005"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-patel-76b87a279/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
