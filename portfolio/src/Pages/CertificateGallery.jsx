import React from "react";
import Certificate from "../components/Certificate";

// ✅ Just an array of public URLs — no import needed
const certificateData = [
  { id: 1, image: "/certificates/photo1.png" },
  { id: 2, image: "/certificates/photo2.png" },
  { id: 3, image: "/certificates/photo3.png" },
  { id: 4, image: "/certificates/photo4.png" },
  { id: 5, image: "/certificates/photo5.png" },
  { id: 6, image: "/certificates/photo6.png" },
];

const CertificateGallery = () => {
  return (
    <div className="px-6 sm:px-10 lg:px-20 py-12 min-h-screen bg-[#0f172a] text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
        My Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificateData.map((cert) => (
            <div key={cert.id} className="rounded-lg overflow-hidden shadow-md">
              <img src={cert.image} alt={`Certificate ${cert.id}`} className="w-full h-auto" />
            </div>
             ))}
      </div>
    </div>
  );
};

export default CertificateGallery;
