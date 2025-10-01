import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import bannerimg from '../assets/images/yateemkhanaiamghomebanner.jpg'

const OrganizationSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-50 to-blue-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image */}
        <div className="relative group">
          <img
            src={bannerimg} // apna image path yaha dalna
            alt="Organization"
            className="rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Join Us in Action!</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Visiting Organizations for Activities
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe in bringing creativity, awareness, and bonding through our 
            unique activities. From <span className="font-semibold">plantation</span> 
            to <span className="font-semibold">storytelling</span>, from 
            <span className="font-semibold">poems & songs</span> to 
            <span className="font-semibold">chatbot sticky notes</span>, we engage 
            communities and create meaningful experiences.  
          </p>

          {/* Location */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Our Location</h3>
            <p className="text-gray-600">748 Street 19, Tariqabad, Faisalabad</p>
            <a
              href="https://maps.app.goo.gl/sNx54tRa15ZgkaJv5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on Google Maps
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5 pt-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
