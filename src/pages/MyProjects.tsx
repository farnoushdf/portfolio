import React from "react";
import ProjectCard from "../components/ProjectCard";
import gymImage from "../assets/Gym-Bros.png";
import moodCocktailsImage from "../assets/Mood-Cocktails.png";

const MyProjects = () => {
  const projects = [
    {
      title: "GymBros",
      description:
        "A full-stack fitness tracking app built with React, Node.js, MongoDB, and Express.",
      image: gymImage,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://your-gym-bros.netlify.app/",
    },
    {
      title: "Mood Cocktails",
      description:
        "An interactive app for mood-based cocktail recommendations using React, Axios, and REST APIs",
      image: moodCocktailsImage,
      tags: ["React", "Axios", "REST API"],
      link: "https://mood-cocktails.netlify.app/",
    },
    // {
    //   title: "Weather Dashboard",
    //   description:
    //     "A weather application with detailed forecasts and animations",
    //   image:
    //     "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    //   tags: ["React", "Weather API", "CSS Animations"],
    //   link: "https://github.com",
    // },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
