import ProjectCard from "../components/ProjectCard";
import gymImage from "../assets/Gym-Bros.png";
import moodCocktailsImage from "../assets/Mood-Cocktails.png";

const MyProjects = () => {
  const projects = [
    {
      title: "GymBros",
      description:
        "Full-stack fitness tracker with authentication, protected routes, workout and meal data, progress tracking, and image upload support.",
      image: gymImage,
      tags: ["React", "Express", "MongoDB", "JWT", "Cloudinary"],
      sourceLink: "https://github.com/farnoushdf/gym-bros-frontend-v2",
    },
    {
      title: "Mood Cocktails",
      description:
        "Mood-based cocktail app with a React frontend, API-driven recommendations, routing, reusable components, and a separate backend.",
      image: moodCocktailsImage,
      tags: ["React", "Axios", "REST API", "Node.js"],
      sourceLink: "https://github.com/farnoushdf/mood-cocktails-frontend-v2",
    },
    {
      title: "Figma Translate Plugin",
      description:
        "TypeScript and Preact plugin project exploring translation workflows, Supabase integration, and single-file Vite plugin builds.",
      image: moodCocktailsImage,
      tags: ["TypeScript", "Preact", "Vite", "Supabase"],
      sourceLink: "https://github.com/farnoushdf/Frame-Translate-Plugin-Vite2",
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50 pt-16">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Selected work
          </p>
          <h1 className="mt-3 text-4xl font-bold text-stone-950">
            Projects that show full-stack product thinking
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            These projects highlight the skills I want to use professionally:
            React interfaces, API integration, authentication, data models, and
            deployment-ready application structure.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MyProjects;
