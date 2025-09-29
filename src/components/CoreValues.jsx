import React from "react";
import { fourHands, groupLines, handsPeople, openBook, peopleContact } from "../assets";

const values = [
  {
    icon: openBook,
    title: "Empowering Students",
    bgColor: "bg-[#CAE4F7]",
  },
  {
    icon: handsPeople,
    title: "Leadership & Growth",
    bgColor: "bg-[#FDF0DD]",
  },
  {
    icon: fourHands,
    title: "Diversity & Inclusion",
    bgColor: "bg-[#E0EAFD]",
  },
  {
    icon: peopleContact,
    title: "Community Engagement",
    bgColor: "bg-[#D2F4F4]",
  },
];


const CoreValues = () => {
  return (
    <section className="pt-32 max-xl:pt-24 pb-64 max-xl:pb-32">
      <div className="container relative grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-center gap-7 max-lg:gap-y-20">
        {values.map((value, index) => (
          <div
            key={index}
            className={`relative group z-[1] p-6 pb-14 rounded-lg shadow-lg text-left ${value.bgColor}`}
          >
            <div
              className="-mt-20 mx-auto drop-shadow-md shadow-lg
 bg-white w-[120px] h-[120px] max-xl:w-[90px] max-xl:h-[90px] max-2xl:w-[105px] max-2xl:h-[105px] flex justify-center items-center p-6 max-2xl:p-7 rounded-full"
            >
              <img
                src={value.icon}
                alt="icon"
                width={54}
                height={54}
                className="object-contain group-hover:-rotate-12 transition-all group-hover:scale-125 will-change-transform max-xl:w-10 max-xl:h-10"
              />
            </div>
            <p className="mt-12 max-sm:mt-8 leading-tight text-3xl max-2xl:text-2xl max-xl:max-w-60 font-medium text-dark-navy">
              {value.title}
            </p>
            <img
              src={groupLines}
              alt="grouplines"
              className="w-24 h-24 max-sm:w-20 max-sm:h-20 absolute right-0 bottom-0 -z-[1] group-hover:-translate-y-10 transition-all"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
