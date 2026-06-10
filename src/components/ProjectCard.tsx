import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  sourceLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveLink,
  sourceLink,
}) => {
  return (
    <article className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-950">{title}</h3>

        <p className="mt-3 leading-7 text-stone-600">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-stone-100 px-3 py-1 text-sm font-medium text-stone-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          )}

          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
            >
              Source Code <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
