import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-stone-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Farnoush Daliran</h3>
            <p className="mt-3 text-stone-300">
              Full-stack developer based in Munich, Germany.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=farnoushfdf@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Farnoush"
              className="mt-3 block text-stone-300 transition hover:text-emerald-300"
            >
              farnoushfdf@gmail.com
            </a>
            <p className="mt-2 text-stone-300">Munich, Germany</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://github.com/farnoushdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-stone-300 transition hover:text-emerald-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/farnoush-daliran/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-stone-300 transition hover:text-emerald-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=farnoushfdf@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Farnoush"
                className="text-stone-300 transition hover:text-emerald-300"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-5 flex gap-4 text-sm text-stone-300">
              <Link
                className="transition hover:text-emerald-300"
                to="/projects"
              >
                Projects
              </Link>
              <Link className="transition hover:text-emerald-300" to="/skills">
                Skills
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-stone-800 pt-8 text-center text-sm text-stone-400">
          <p>Copyright 2026 Farnoush Daliran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
