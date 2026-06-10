import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import profilePic from "../assets/fndf-profile-img.jpeg";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-stone-50 pt-16">
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
              <MapPin size={16} />
              Munich, Germany
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-normal text-stone-950 sm:text-5xl lg:text-6xl">
              Farnoush Daliran, full-stack developer building practical React
              applications.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              I build responsive web apps with React, TypeScript, Node.js,
              Express, and MongoDB. My work combines clean interfaces, API
              integration, authentication flows, and product thinking.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:farnoushfdf@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:border-emerald-700 hover:text-emerald-800"
              >
                Contact Me
                <Mail size={18} />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/farnoushdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-stone-600 transition hover:text-emerald-700"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/farnoush-daliran/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-stone-600 transition hover:text-emerald-700"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:farnoushfdf@gmail.com"
                aria-label="Email Farnoush"
                className="text-stone-600 transition hover:text-emerald-700"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-4 rounded-2xl bg-emerald-100" />
            <img
              src={profilePic}
              alt="Farnoush Daliran"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              label: "Frontend",
              value: "React, TypeScript, Tailwind CSS",
            },
            {
              label: "Backend",
              value: "Node.js, Express, MongoDB, REST APIs",
            },
            {
              label: "Strength",
              value: "Full-stack apps with auth, routing, and responsive UI",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                {item.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-stone-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
