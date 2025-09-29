import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "../components/ContactForm"; // Apna form import karein
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT SIDE - About + Info */}
        <div className="bg-white shadow-sm rounded-xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Wings of Change</h2>
            <p className="text-gray-600 mb-6">
              <strong>Wings of Change</strong> is a social initiative under the{" "}
              <a
                href="https://www.amalacademy.org/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 font-medium hover:underline"
              >
                Amal Fellowship
              </a>
              . Our mission is to empower students and young professionals by
              fostering leadership, personal growth, and impactful community
              projects.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Get in Touch</h3>
            <ul className="space-y-2 text-gray-600">
              <li> Location: Lahore, Pakistan</li>
              <li> Phone: +92-300-1234567</li>
              <li> Email: wingsofchange@gmail.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mt-10">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
      <Footer/>
    </>

  );
}
