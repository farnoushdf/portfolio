import { Code2, Database, Palette, Server, Wrench } from "lucide-react";

const MySkills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 size={24} />,
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "REST APIs", "JWT Auth", "Multer"],
    },
    {
      title: "Data",
      icon: <Database size={24} />,
      skills: ["MongoDB", "Mongoose", "Supabase", "SQL basics"],
    },
    {
      title: "Design",
      icon: <Palette size={24} />,
      skills: [
        "Responsive UI",
        "Figma",
        "Accessibility basics",
        "Adobe Photoshop",
      ],
    },
    {
      title: "Workflow",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "Vite", "Netlify", "Render"],
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50 pt-16">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Skills
          </p>
          <h1 className="mt-3 text-4xl font-bold text-stone-950">
            Tools I use to build full-stack web apps
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            My strongest area is React frontend development, supported by
            backend API work with Node.js, Express, MongoDB, and deployment
            workflows.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <section
              key={category.title}
              className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold text-stone-950">
                  {category.title}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-stone-100 px-3 py-2 text-sm font-medium text-stone-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MySkills;
