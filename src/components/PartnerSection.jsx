import React from "react";
import { Instagram } from "lucide-react"; // for Instagram icon
import attaiLogo from "../assets/images/ataialogo.jpg"; // <-- apna logo path yahan dalna

const PartnerSection = () => {
  return (
    <section className="py-20 bg-[#EEF4F8]" id="partners">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-dark-navy mb-6">
          Our Supporting Partner
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          We are grateful to receive the support of{" "}
          <span className="font-semibold text-dark-navy">
            Attai Helping Hands
          </span>, under the guidance of project manager{" "}
          <span className="font-semibold text-dark-navy">Hafsa</span>.  
          Their commitment has played a vital role in helping us organize meaningful 
          activities for children in orphanages, enabling them to learn, express, and grow.
        </p>

        {/* Partner Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg mx-auto flex flex-col items-center">
          {/* Logo */}
          <img
            src={attaiLogo}
            alt="Attai Helping Hands Logo"
            className="w-24 h-24 object-contain mb-4"
          />
          <h3 className="text-2xl font-semibold text-dark-navy mb-1">
            Attai Helping Hands
          </h3>
          <p className="text-gray-600 mb-2">Partner Organization</p>
          <p className="text-sm text-gray-500 mb-4">
            Project Manager: <b>Hafsa</b>
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/attia_helping_hands?igsh=YXBta25kaGJ0cTBr" // <-- apna Insta link yahan dalna
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transition"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
