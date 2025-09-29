import React from "react";
import {
  AKPM,
  niche,
  katho,
  migrations,
  munchen,
  petra,
  sonneBrand,
} from "../assets";

const clients = [AKPM, niche, katho, migrations, munchen, sonneBrand, petra];

const Marquee = () => {
  return (
    <section className="px-5">
      <div className="container ">
        <div className="flex gap-14 flex-wrap justify-center items-center px-10 max-2xl:px-6 rounded-lg py-20 max-2xl:py-14 max-lg:py-10 shadow-4-6-24-0-0.08">
          {clients.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="client"
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
