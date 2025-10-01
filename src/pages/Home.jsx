import React from "react";
import Header from "../components/Header";
import HomeSection from "../components/HomeMain";
import CoreValues from "../components/CoreValues";
import AboutSection from "../components/Aboutmain";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Marquee from "../components/Marquee";
import Teammembers from "../components/Teammembers";
import PartnerSection from "../components/PartnerSection";
import OrganizationSection from "../components/OrganizationSection";

const Home = () => {
  return (
    <>
      <main className="w-full">
        <HomeSection />
        <CoreValues />
        <AboutSection />
        <Teammembers/>
<PartnerSection/>
<OrganizationSection/>
        <Marquee />
<br />
        <Appointment />
        <Projects />
        <br />
        <Footer /> 
      </main>
    </>
  );
};

export default Home;
