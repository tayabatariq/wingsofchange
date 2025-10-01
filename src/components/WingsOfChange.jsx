import React from "react";
import SideShapeHeading from "./ui/Headings/SideShapeHeading";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";

import imgwing from "../assets/images/wing.jpg";

const WingsOfChange = () => {
  const projectHighlights = [
    {
      title: "Dreams Through Sticky Notes",
      desc: "Children write down their dreams on colorful sticky notes. This boosts imagination and gives them confidence to express their future goals.",
    },
    {
      title: "Poems & Song Sharing",
      desc: "Special sessions where kids share poems and songs to develop creativity, improve communication, and build confidence in public speaking.",
    },
    {
      title: "Plantation Activity",
      desc: "Through plantation, children learn the importance of a green environment, sustainability, and their role in protecting nature.",
    },
    {
      title: "Storytelling Circles",
      desc: "Engaging storytelling sessions to enhance imagination, empathy, and social bonding among children.",
    },
    {
      title: "Expected Outcome",
      desc: "Children will develop stronger confidence, creativity, and environmental awareness while forming positive social connections.",
    },
    {
      title: "Long-Term Impact",
      desc: "This initiative nurtures life skills, emotional growth, and awareness that helps orphanage children become empowered citizens.",
    },
  ];

  return (
    <section id="wings" className="py-20 bg-[#F9FBFD] relative z-[1]">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <SideShapeHeading
          headingClassName="max-2xl:text-[44px] max-lg:text-4xl"
          className="mx-auto w-fit mb-12 text-center font-medium"
        >
          Mega Project:{" "}
          <YellowUnderlineHeading className="max-sm:block">
            Wings of Change
          </YellowUnderlineHeading>
        </SideShapeHeading>

        {/* Image + Content Split */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src={imgwing}
              alt="Wings of Change"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Right Side - Description */}
          <div>
            <h3 className="text-3xl font-semibold text-dark-navy mb-4">
              Transforming Lives in Orphanages
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              <span className="font-semibold text-dark-navy">Wings of Change</span>{" "}
              is an initiative designed to bring hope, creativity, and growth to
              children living in orphanages. Through unique activities such as
              sticky note dreams, storytelling, plantation, and song sharing, 
              we aim to provide them with opportunities to express themselves, 
              learn valuable skills, and become confident individuals ready to
              shape their own futures.
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projectHighlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-dark-navy mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WingsOfChange;
