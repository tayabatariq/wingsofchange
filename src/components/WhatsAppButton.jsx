import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 flex items-center z-50 group">
      {/* Text Bubble (hidden by default, visible on hover) */}
      <div className="opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 bg-white text-gray-800 shadow-lg px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 mr-3">
        <p>💬 How can I help you?</p>
        <p className="text-green-600 font-semibold">Join or Volunteer Team</p>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://chat.whatsapp.com/HUW1A3VhXUuIrHczv1kvC9" // 👉 apna WhatsApp number dalna
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
