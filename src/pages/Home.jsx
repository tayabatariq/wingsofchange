import React from "react";
import Header from "../components/Header";
import HomeSection from "../components/HomeMain";
import CoreValues from "../components/CoreValues";
import AboutSection from "../components/Aboutmain";
import Appointment from "../components/Appointment";
import ServicesSection from "../components/Services";
import NewsSection from "../components/News";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Marquee from "../components/Marquee";

const Home = () => {
  return (
    <>
      <main className="w-full">
        <HomeSection />
        <CoreValues />
        <AboutSection />
        <Appointment />
        <Projects />
        <Marquee />
        <ServicesSection />
        <NewsSection />
        <Footer /> 
      </main>
    </>
  );
};

export default Home;
