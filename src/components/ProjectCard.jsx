import { memo } from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = memo(({ title, description, image, link }) => (
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    className="bg-[#0f0f1b] rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm mt-3 text-violet-400 hover:underline"
        >
          View Project <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      )}
    </div>
  </div>
));

export default ProjectCard;
