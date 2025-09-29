import React from "react";
import { gmail, group_of_people_in_sunshine, whatsapp } from "../assets";


const Appointment = () => {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat mb-36 max-lg:mb-24"
        style={{ backgroundImage: `url(${group_of_people_in_sunshine})` }}
      >
        <div className=" bg-dark-navy bg-opacity-70">
          <div className="container relative py-16 grid grid-cols-10 gap-12 max-lg:items-start max-lg:flex max-lg:flex-col max-lg items-center">
            <div className="col-span-6 max-lg:w-3/4 max-sm:w-full">
              <h2 className="text-[44px] max-2xl:text-4xl max-lg:text-3xl max-sm:text-2xl font-medium leading-snug mb-7 max-xl:mb-5 text-white">
              Building Bridges: Embracing Change, Strengthening Communities
              </h2>
              <p className="text-2xl max-2xl:text-xl max-lg:text-base max-sm:text-sm mb-7 max-xl:mb-5 text-white">
               Celebrating Student Growth, Building Connections...
              </p>
              <p className="text-2xl max-2xl:text-xl max-lg:text-base max-sm:text-sm text-white">
                We provide opportunities for students to learn, grow, and shine through social activities, leadership training, and community engagement.
              </p>
            </div>
         <div
  className="
    bg-white 
    col-start-8 col-span-6 
    max-2xl:-bottom-16 
    max-xl:col-span-4 max-xl:col-start-7 max-xl:-bottom-10 max-xl:w-fit 
    max-lg:col-span-2 max-lg:static
    text-dark-navy 
    rounded-2xl 
    shadow-xl drop-shadow-md 
    p-8 
    absolute -bottom-8 right-0
    leading-relaxed
  "
>
  <p className="text-lg font-medium">
    At <span className="font-semibold text-indigo-600">Wings of Change</span>, our
    focus is on empowering young minds by offering guidance, skill-building
    sessions, and platforms to explore their potential. From teamwork and
    communication to creativity and confidence, we help students prepare for
    challenges beyond the classroom and become active contributors to society.
  </p>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
