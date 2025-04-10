import React from "react";
import profilePic from "./../assets/fndf-profile-img.jpeg";

const AboutMe = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={profilePic}
              alt="Farnoush Daliran"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-lg text-gray-700 mb-6">
              Hi, I'm Farnoush Daliran, a passionate Full Stack Developer with
              over 5 years of experience in building web applications.
              Experienced in developing modern web applications with a strong
              command of JavaScript, React, TypeScript, and Node.js. Skilled in
              designing responsive interfaces, implementing cloud solutions like
              AWS, and managing databases such as MongoDB, Supabase, and SQL.
              Passionate about creating user-friendly, scalable, and efficient
              digital solutions while excelling in collaborative environments.
            </p>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Experience
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li> Full-stack Developer, Internship (10/2024–12/2024)</li>
                  <li> Frontend Web Developer (06/2015 – 07/2020)</li>
                  <li> IT Support Administrator (02/2014 – 05/2015)</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Education
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Master's in Computer Software Engineering (2016)</li>
                  <li>Bachelor's in Computer Software Engineering (2006)</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Interests
                </h2>
                <p className="text-gray-700">
                  I'm passionate about creating intuitive and efficient web
                  applications, with a growing interest in AI-powered tools and
                  their role in modern design. I enjoy exploring user-centered
                  design through Figma and expressing creativity through
                  photography, especially when capturing everyday stories and
                  travel moments. I'm always curious, constantly learning, and
                  inspired by the intersection of technology and human
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
