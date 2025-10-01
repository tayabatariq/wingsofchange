  import React, { useState } from "react";
  import { Link ,useNavigate } from "react-router-dom";
  import Button from "./ui/buttons/Button";
  import { burger, logo } from "../assets";
  import logoimg from "../assets/images/logo.png";
  import { IoClose } from "react-icons/io5"; // ❌ close icon for mobile menu

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Events", path: "/events" },
  ];

  const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();  // ✅ hook use karo

    const gotoContact = () => {
      navigate("/contact");  // ✅ React Router way
    };

    return (
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container">
          <nav className="w-full py-3 flex justify-between items-center relative">
            {/* Logo */}
            <div className="logo">
              <Link to="/">
                <img
                  src={logoimg}
                  className="w-20 md:w-32 xl:w-32 2xl:w-[100px]"
                  alt="logo img"
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((nav, index) => (
                <Link
                  key={index}
                  to={nav.path}
                  className="relative text-dark-navy transition hover:text-tomato-red cursor-pointer after:mx-auto after:block after:h-[2px] after:w-0 after:bg-tomato-red after:transition-all hover:after:w-8 after:mt-1"
                >
                  {nav.name}
                </Link>
              ))}
            </div>

            {/* Donate Button */}
            <Button onClick={gotoContact} navbtn="Contact us" className="hidden lg:block" />

            {/* Mobile Burger Button */}
            <button
              type="button"
              className="lg:hidden"
              onClick={() => setIsExpanded(true)}
            >
              <img width={30} height={30} src={burger} alt="hamburger menu" />
            </button>
          </nav>
        </div>

        {/* Mobile Menu - Slide In */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
            isExpanded ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center px-5 py-4 border-b">
            <img src={logoimg} className="w-28" alt="logo" />
            <button onClick={() => setIsExpanded(false)}>
              <IoClose size={28} className="text-gray-600 hover:text-tomato-red" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col p-5 gap-5">
            {navLinks.map((nav, index) => (
              <Link
                key={index}
                to={nav.path}
                className="text-dark-navy text-lg font-medium hover:text-tomato-red transition"
                onClick={() => setIsExpanded(false)} // close menu on click
              >
                {nav.name}
              </Link>
            ))}

            {/* Donate Button */}
            <Button onClick={gotoContact} navbtn="Contact us" className="mt-4" />
          </div>
        </div>

        {/* Background Overlay when menu open */}
        {isExpanded && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </header>
    );
  };

  export default Header;
