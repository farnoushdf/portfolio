import { Link } from "react-router-dom";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 hidden h-screen w-16 flex-col items-center bg-stone-950 py-8 text-white md:flex">
      <div className="space-y-8">
        <Link
          to="/"
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Home size={24} />
        </Link>
        <Link
          to="/about"
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <User size={24} />
        </Link>
        <Link
          to="/projects"
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Briefcase size={24} />
        </Link>
        <Link
          to="/skills"
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Code size={24} />
        </Link>
        <a
          href="#contact"
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
