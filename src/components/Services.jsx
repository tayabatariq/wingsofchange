import React from "react";
import ServiceCard from "./ui/cards/ServiceCard";

import SideShapeHeading from "./ui/Headings/SideShapeHeading";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import {
  book_bulb,
  file_flowchart,
  people_globe,
  rings_shape,
  target_arrow,
} from "../assets";

const services = [
  {
    title: "Education and skills development",
    desc: "Sometimes finding the right educational path and skill to pursue is a challenge especially in a new country. We offer job and skills training to ensure you get into professions that will create a sustainable future for all. We also do offer supporting for CV development, job search training and processes to get you into your desired profession.",
    icon: book_bulb,
  },
  {
    title: "Counseling on migration",
    desc: "We offer individual as well as group counselling sessions on migration laws, updates and information on various topics on migration and the many possibilities in Germany. We work together with partners who provide migration services or information that help in the migration process (like helping to find lawyers or organizations that support migrants and refugees, etc.)",
    icon: people_globe,
  },
  {
    title: "Integration support",
    desc: "Having to go through processes alone can be overwhelming and some of our volunteers have had firsthand experiences on the challenges migrants face. We also help with topics like parenting, the school system in Germany, entrepreneurship, etc.",
    icon: file_flowchart,
  },
  {
    title: "Intercultural communication",
    desc: "Workers in the social and refugee space as well as migrants and refugees do sometimes meet challenges working with each other. Misunderstandings arise quickly when communication is lost in transition. With our experts with strong experience in intercultural communication competencies, we offer trainings for migrant and social workers as well as migrants and refugees.",
    icon: target_arrow,
  },
];

const ServicesSection = () => {
  return (
    <section className="pb-28 max-sm:pb-20 pt-36 max-lg:pt-28 relative z-[1] overflow-hidden">
      <img
        src={rings_shape}
        alt="rings shape"
        className="absolute rotate-12 -bottom-32 right-0 -z-[1]"
      />
      <div className="container">
        <SideShapeHeading className="w-fit mx-auto mb-12 " headingClassName="max-md:text-4xl max-lg:text-[40px] max-2xl:text-[44px]">
          <YellowUnderlineHeading className="leading-none">
            Services
          </YellowUnderlineHeading>
        </SideShapeHeading>
        <div className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-8 items-start">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
