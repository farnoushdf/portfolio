import React from "react";
import { Code2, Server, Database, Palette } from "lucide-react";

const MySkills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={24} />,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: [
        "Node.js",
        "Express",
        "Python",
        "REST APIs",
      ],
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MongoDB", "MySQL", "Supabase"],
    },
    {
      title: "UI/UX Design",
      icon: <Palette size={24} />,
      skills: ["Figma", "Responsive Design", "Adobe photoshop"],
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          My Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-50 rounded-lg p-3 text-gray-700 text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Experience Level
          </h2>
          <div className="space-y-6">
            {[
              "Frontend Development",
              "Backend Development",
              "Database Management",
              "UI/UX Design",
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">{skill}</span>
                  <span className="text-gray-500">85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MySkills;
