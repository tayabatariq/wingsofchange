import React from "react";
import { Instagram } from "lucide-react"; 
import attaiLogo from "../assets/images/atialooogo.png"; 
import partnerImg from "../assets/images/partenrimg.jpg"; // 👈 yahan apni image ka path do

const PartnerSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#EEF4F8] to-[#E6EEF4]" id="partners">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Supporting Partner
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            We are grateful to receive the support of{" "}
            <span className="font-semibold text-gray-900">Attai Helping Hands</span>, 
            under the guidance of project manager{" "}
            <span className="font-semibold text-gray-900">Hafsa</span>.  
            Their commitment has played a vital role in helping us organize meaningful 
            activities for children in orphanages, enabling them to learn, express, and grow.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <img 
              src={partnerImg} 
              alt="Partner Support"
              className="rounded-3xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Partner Card */}
          <div className="bg-white w-full shadow-xl rounded-3xl p-10 max-w-lg mx-auto flex flex-col items-center hover:shadow-2xl transition duration-300">
            
            {/* Logo */}
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-md border-4 border-white ring-2 ring-blue-200 mb-6">
              <img
                src={attaiLogo}
                alt="Attai Helping Hands Logo"
                className="w-full h-full object-contain p-3 bg-gray-50"
              />
            </div>

            {/* Text */}
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              Attai Helping Hands
            </h3>
            <p className="text-gray-600 mb-2">Partner Organization</p>
            <p className="text-sm text-gray-500 mb-6">
              Project Manager: <b>Hafsa</b>
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/attia_helping_hands?igsh=YXBta25kaGJ0cTBr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 hover:bg-pink-200 transition"
              >
                <Instagram size={26} className="text-pink-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
