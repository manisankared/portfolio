import { memo } from "react";
import { FileText } from "lucide-react";

const CertificateCard = memo(({ title, issuer, date, image, link }) => (
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    className="bg-[#0f0f1b] rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-[1.02] transition-transform duration-300"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
      <p className="text-xs text-gray-400">{issuer}</p>
      <p className="text-xs text-gray-500 mb-2">{date}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-pink-400 hover:underline"
        >
          View Certificate <FileText className="ml-1 w-4 h-4" />
        </a>
      )}
    </div>
  </div>
));

export default CertificateCard;

