import React from "react";
import { fb, insta, linkedin, logo, twitter } from "../assets";
import logoimg from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1a1e35] text-white pt-24 max-sm:pt-20">
      <div className="container mx-auto px-4 pb-16 grid max-md:flex max-md:gap-10 max-md:flex-col grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Section */}
        <div className="col-span-4 max-lg:col-span-5 lg:mr-10">
          <img src={logoimg} className="w-52 mb-5 max-sm:w-40" alt="logoimg" />
          <p className="mb-4 leading-relaxed max-lg:text-sm">
            Wings of Change is a fellowship-based initiative dedicated to
            empowering students through social activities, leadership training,
            and community engagement.
          </p>
          <p className="leading-relaxed max-lg:text-sm">
            Address:
            <br />
            C/O Inicheativ GmbH
            <br />
            Bodenseestr 217 81248, München.
            <br />
            Phone: +49 -151-40086034
            <br />
            Email: WingsofChange92@gmail.com
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="col-start-6 col-span-3">
          <h3 className="text-2xl max-lg:text-xl font-medium mb-6 2xl:mb-10">
            Quick Links
          </h3>
          <ul className="space-y-5">
            <li>
              <a href="about" className="transition hover:text-tomato-red">
                About us
              </a>
            </li>
            <li>
              <a href="gallery" className="transition hover:text-tomato-red">
                Gallery
              </a>
            </li>
            <li>
              <a href="contact" className="transition hover:text-tomato-red">
                Contact 
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Privacy Policy
              </a>
            </li>
          </ul>

          {/* Social Links under Quick Links */}
          <div className="flex gap-5 mt-6">
            <a href="https://www.facebook.com/share/1Hsa8xRctZ/" target="_blank">
              <img src={fb} alt="facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" target="_blank"/>
            </a>
            <a href="https://www.instagram.com/win.gsofchange?igsh=d2lodzV5YmdqY3R3" target="_blank">
              <img src={insta} alt="instagram" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" target="_blank" />
            </a>
          </div>
        </div>

        {/* Support Section */}
        <div className="col-span-4">
          <h3 className="text-2xl max-lg:text-xl font-medium mb-6 2xl:mb-10">
            Support
          </h3>
          <ul className="space-y-5">
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Help & FAQ
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-tomato-red py-3">
        <div className="container flex justify-between max-sm:flex-col max-sm:gap-5 items-center">
          <p className="text-base max-lg:text-sm">
            Copyright © 2025 All Rights Reserved
          </p>
          <p className="text-base uppercase max-lg:text-sm font-medium">
            Website designed by{" "}
            <span className="font-semibold">Tayaba & Imaan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
