import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: farnoushfdf@gmail.com</p>
            <p>Location: Munich, Germany</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/farnoushdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/farnoush-daliran/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="hover:text-gray-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Resume
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:text-gray-300">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2025 Farnoush Daliran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
