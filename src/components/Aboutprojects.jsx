import React from "react";

import SideShapeHeading from "./ui/Headings/SideShapeHeading";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import imgwing from '../assets/images/wing.jpg'
import amalLogo from "../assets/images/ammal.png";


import {
  book_with_pen_portrait,
  impowegirl,
  MOHOWO,
  movingman,
  MWEC,
  people_in_front_of_laptop,
  projectsBlob,
  sonne,
  treeShape,
  triangleShape,
  
} from "../assets";

const projects = [
  {
    name: "MOWOWO",
    description:
      "Helping women to build careers through coaching and information sharing.",
    logo: MOHOWO,
  },
  {
    name: "EmpowHer Girls",
    description:
      "Empowers young girls through mentorship, education, and skill-building.",
    logo: impowegirl,
  },
  {
    name: "Moving Women Empowerment Conference",
    description: "An event to connect with the sisterhood.",
    logo: MWEC,
  },
  {
    name: "Moving Woman Magazine",
    description: "Showcasing and providing insights into women’s issues.",
    logo: movingman,
  },
];

const Aboutprojects = () => {
  return (
    <>


     <section
            id="project"
            className="mb-36 max-lg:mb-20 max-sm:mb-16 bg-white relative z-[1]"
          >
            <img
              src={triangleShape}
              alt="triangle shape"
              className="absolute right-5 -z-[1] max-sm:top-14 max-lg:w-[140px]"
            />
           
            <div className="container">
              <SideShapeHeading
                headingClassName="max-2xl:text-[44px] max-lg:text-4xl max-lg:max-w-"
                className="mx-auto w-fit mb-12 max-lg:max-w-[80%] max-lg:text-center font-medium"
              >
                Our Work:{" "}
                <YellowUnderlineHeading className="max-sm:block">
                  Projects
                </YellowUnderlineHeading>
              </SideShapeHeading>
              <div className="bg-white border border-dark-navy rounded-xl p-11 max-sm:p-7">
                <div className="lg:w-4/5">
                  <h3 className="text-3xl max-2xl:text-2xl max-sm:text-xl font-medium text-dark-navy mb-4">
                    Moving Women Empowerment Network (MWEN)
                  </h3>
                  <p className="text-light-gray mb-10 text-lg max-2xl:text-base max-sm:text-sm">
                    MWEN (Moving Women Empowerment Network) Supporting the
                    advancement of women by providing resources and support for them
                    to succeed in their communities and professional lives.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 items-start max-xl:items-start">
                  <img
                    src={book_with_pen_portrait}
                    alt="MWEN Event"
                    className="rounded-xl shadow-md w-[46.5%] max-lg:w-full max-lg:max-w-[600px]"
                  />
                  <div className="flex flex-col gap-12 max-xl:gap-5 max-lg:w-[70%] max-md:w-full">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="flex max-sm:flex-col items-start gap-4 justify-between w-full"
                      >
                        <img
                          src={project.logo}
                          alt={project.name}
                          className="w-2/5 max-2xl:w-1/3 max-sm:w-2/4 rounded-lg border border-[#DFDBE1] "
                        />
                        <div>
                          <h4 className="text-2xl max-2xl:text-xl max-lg:text-lg max-xl:mb-2 font-medium text-dark-navy">
                            {project.name}
                          </h4>
                          <p className="text-light-gray text-base max-sm:text-sm">
                            {project.description}
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
  )
}

export default Aboutprojects