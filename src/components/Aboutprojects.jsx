import React from "react";  
import SideShapeHeading from "./ui/Headings/SideShapeHeading"; 
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading"; 

import wingLogo from "../assets/images/logo.png"; // Wings of Change logo
import amalLogo from "../assets/images/ammal.png"; 
import attiaLogo from "../assets/images/atialooogo.png"; // Attia Helping Hand logo (add in assets)

import {   
  book_with_pen_portrait,   
  triangleShape,    
} from "../assets";  

const organizations = [
  {
    name: "Wings of Change",
    description:
      "A student-led social impact initiative focused on empowering underprivileged children by organizing activities that build confidence, promote healthy living, and enhance essential life skills.",
    logo: wingLogo,
  },
  {
    name: "Amal Fellowship",
    description:
      "A leadership development program that empowers young people in Pakistan through career readiness, confidence building, and community-based impact projects.",
    logo: amalLogo,
  },
  {
    name: "Attia Helping Hand",
    description:
      "A non-profit organization dedicated to supporting orphanages and underprivileged communities through funding, guidance, and sustainable welfare initiatives.",
    logo: attiaLogo,
  },
];

const Aboutprojects = () => {  
  return (  
    <>  
      <section  
        id="project"  
        className="mb-36 mt-10 max-lg:mb-20 max-sm:mb-16 bg-white relative z-[1]"  
      >  
        <img  
          src={triangleShape}  
          alt="triangle shape"  
          className="absolute right-5 -z-[1] max-sm:top-14 max-lg:w-[140px]"  
        />  

        <div className="container">  
          <SideShapeHeading  
            headingClassName="max-2xl:text-[44px] max-lg:text-4xl"  
            className="mx-auto w-fit mb-12 max-lg:max-w-[80%] max-lg:text-center font-medium"  
          >  
            Our Work:{" "}  
            <YellowUnderlineHeading className="max-sm:block">  
              Wings of Change  
            </YellowUnderlineHeading>  
          </SideShapeHeading>  

          <div className="bg-white border border-dark-navy rounded-xl p-11 max-sm:p-7">  
            {/* Project Description */}  
            <div className="lg:w-4/5">  
              <h3 className="text-3xl max-2xl:text-2xl max-sm:text-xl font-medium text-dark-navy mb-4">  
                Wings of Change – Amal Fellowship Project  
              </h3>  
              <p className="text-light-gray mb-10 text-lg max-2xl:text-base max-sm:text-sm">  
                <b>Wings of Change</b> is a social impact project carried out under the <b>Amal Fellowship</b>.  
                The project focuses on engaging with orphanages in Faisalabad by organizing interactive  
                activities that foster creativity, confidence, and essential skills for the children.  
                Our goal is to provide them with opportunities to dream, learn, and express themselves.  
                <br /><br />  
                This initiative is proudly supported by <b>Attia Helping Hand</b>, who have not only assigned  
                us this meaningful project but are also providing funding and continuous guidance. Together,  
                we aim to make a lasting impact on children’s personal growth and their journey toward  
                becoming responsible members of society.  
                <br /><br />  
                Activities include:  
              </p>  

              <ul className="list-disc pl-6 text-light-gray text-lg max-2xl:text-base max-sm:text-sm mb-10">  
                <li>Chatbot & Sticky Notes – encouraging children to write down and share their dreams.</li>  
                <li>Poems & Songs Sharing – building confidence and enhancing creativity.</li>  
                <li>Plantation Activity – raising awareness about environmental care.</li>  
                <li>Storytelling Sessions – boosting imagination and bonding.</li>  
              </ul>  
            </div>  

            {/* Image + Organization Logos */}  
            <div className="flex flex-col lg:flex-row gap-8 items-start max-xl:items-start">  
              <img  
                src={book_with_pen_portrait}  
                alt="Wings of Change Activity"  
                className="rounded-xl shadow-md w-[46.5%] max-lg:w-full max-lg:max-w-[600px]"  
              />  

              <div className="flex flex-col gap-8 max-lg:w-[70%] max-md:w-full">  
                {organizations.map((org, index) => (  
                  <div  
                    key={index}  
                    className="flex max-sm:flex-col items-start gap-4 justify-between w-full border border-[#DFDBE1] rounded-lg p-4"  
                  >  
                    <img  
                      src={org.logo}  
                      alt={org.name}  
                      className="w-2/5 max-2xl:w-1/3 max-sm:w-2/4 rounded-lg border border-[#DFDBE1]"  
                    />  
                    <div>  
                      <h4 className="text-2xl max-2xl:text-xl max-lg:text-lg font-medium text-dark-navy mb-2">  
                        {org.name}  
                      </h4>  
                      <p className="text-light-gray text-base max-sm:text-sm">  
                        {org.description}  
                      </p>  
                    </div>  
                  </div>  
                ))}  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>  
    </>  
  );  
};  

export default Aboutprojects;  
