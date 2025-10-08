import React from "react";

import SideShapeHeading from "./ui/Headings/SideShapeHeading";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import imgwing from '../assets/student/session11.jpg'
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

// 🔹 New Section: Our Project
const ProjectSection = () => (
  <div className="py-16 px-4 bg-gray-100">
    <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Our Fellowship Project</h2>
    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
      As part of our <strong>Amal Fellowship</strong>, our team planned an outreach activity in an orphanage house.
      The aim was to spend a day full of learning and fun with the children — engaging them in creative games,
      storytelling, and sharing small gifts to spread joy and hope. This initiative is not just an activity,
      but a step towards creating lasting positive memories for the children.
    </p>
    <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
      <img
        src="https://images.unsplash.com/photo-1588072432836-e10032774350"
        alt="Volunteers with children"
        className="rounded-xl shadow-lg object-cover w-full h-72"
      />
      <img
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
        alt="Activity with kids"
        className="rounded-xl shadow-lg object-cover w-full h-72"
      />
    </div>
  </div>
);
const Projects = () => {
  return (
    <>

      <section className="mb-28 max-lg:mb-20 max-sm:mb-16 bg-white ">
        <div className="container mx-auto relative z-[1]   px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="p-16 max-sm:px-7 h-[80%] flex flex-col justify-center border border-dark-navy lg:border-r-0 bg-white rounded-l-xl  max-lg:rounded-xl drop-shadow-md shadow-lg">
            <div className="lg:max-w-[440px] ">
              <h2 className="text-3xl max-2xl:text-[26px] max-lg:text-2xl max-sm:text-xl font-medium text-dark-navy mb-3">
                Wings of Change (WoC)
              </h2>
              <p className="text-light-gray text-lg 2xl:leading-[1.8] max-2xl:text-base max-sm:text-sm">
                A fellowship-driven initiative designed to inspire and empower students through social activities, leadership experiences, and community engagement. Our mission is to help young people build confidence, develop essential life skills, and grow into responsible future leaders.

                Through teamwork, creativity, and collaboration, Wings of Change provides opportunities for students to step beyond the classroom and make a positive impact in their communities.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-r-xl max-lg:max-w-[600px] max-lg:rounded-xl drop-shadow-md shadow-lg">
            <img
              src={imgwing}
              alt="Skills2Evolve Team"
              className=" object-cover "
            />
          </div>
        </div>
      </section>
      <section className="mb-36 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="container mx-auto relative z-[1] px-6 grid lg:grid-cols-12 items-center gap-8">

          {/* Left Image (Amal Logo) */}
          <div className="col-span-5 rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-white">
            <img
              src={amalLogo}
              alt="Amal Fellowship Logo"
              className="w-full md:w-3/4 h-96 object-cover"
            />

          </div>

          {/* Right Content */}
          <div className="p-10 col-span-7 bg-white rounded-xl drop-shadow-xl border-l-4 border-indigo-500">
            <div className="pb-6 mb-6 border-b border-gray-300">


              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
                About Amal Fellowship
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                We are proud to be part of the <strong>Amal Fellowship</strong>, an intensive program
                by <a href="https://www.amalacademy.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline">
                  Amal Academy</a>. This fellowship focuses on developing essential professional and
                leadership skills in students, enabling them to create meaningful change in their
                communities and beyond.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Student Growth</h3>
                <p className="text-gray-600 text-base">
                  We create opportunities for students to build teamwork, leadership,
                  and communication skills that prepare them for the future.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Community Impact</h3>
                <p className="text-gray-600 text-base">
                  By organizing meaningful social activities, we help students
                  connect with their communities and contribute positively to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectSection />
    </>
  );
};

export default Projects;
