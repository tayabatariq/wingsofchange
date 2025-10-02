import React from "react";
  import { Link ,useNavigate } from "react-router-dom";
  import teamimg from '../assets/team/teemm.jpg'

import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import {
  banner_blob,
  hand_price,
  homeimg,
  join_our_Team,
  parallel_lines,
  total_donations,
} from "../assets";
import ButtonSolid from "./ui/buttons/ButtonSolid";

const HomeSection = () => {
   const navigate = useNavigate();  // ✅ hook use karo

    const gotoContact = () => {
      navigate("/contact");  // ✅ React Router way
    };
  return (
    <>
      <section className="bg-[#eef4f8] relative z-[1] overflow-hidden">
        <img
          src={banner_blob}
          alt="blob shape"
          className="absolute left-0 -top-24 -z-[1]"
        />
        <img
          src={parallel_lines}
          alt="blob shape"
          className="absolute right-0 -z-[1] w-2/4 max-lg:hidden"
        />
        <div className="container w-full flex max-lg:flex-col max-2xl:items-start items-center">
          <div className="w-[55%] max-lg:w-full pt-44 max-2xl:pt-32 max-2xl:pb-24 max-xl:pt-20 max-xl:pb-20 max-lg:pt-12 max-lg:pb-5 max-sm:py-10 pb-36">
            <div className="max-2xl:max-w-[600px] max-lg:w-full">
              <h1 className="text-[74px] max-2xl:text-6xl max-xl:text-[42px] max-sm:text-4xl z-1 relative leading-[1.1] text-dark-navy">
                <YellowUnderlineHeading
                  className="font-bold"
                  strokeClassName="bottom-4"
                >
                  Empowering
                </YellowUnderlineHeading>
                <span className="font-bold"> Students </span>
                <span className="font-light">for a Better Tomorrow</span>
              </h1>
              <p className="text-light-gray text-lg max-xl:text-base mt-5 w-[85%] mb-14 max-2xl:mb-10 max-md:mb-9">
               We believe every student has the potential to become a confident leader and an active member of society. Through engaging social activities, workshops, and team-based learning, we inspire young minds to think creatively, communicate effectively, and take responsibility for creating a better future.

              </p>
              <ButtonSolid onClick={gotoContact} text="Contact us" />
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full">
            <div className="absolute w-fit  max-sm:max-w-[500px] max-sm:w-full max-lg:mx-auto max-lg:relative bottom-0">
              {/* max-xl:w-11/12 */}
              <img src={teamimg} className="w-full mb-36 max-2xl:w-[80%] max-xl:w-[60%] max-lg:w-[80%]" alt="" />
              {/* top-[5%] */}
              <div className="absolute right-[10%] left-[8%] max-xl:left-0 top-[30%] w-16 max-xl:w-12">
                {/* <img src={hand_price} alt="handpricelogo" /> */}
              </div>
            

              {/* bottom-14 right-[10rem] max-sm:right-0 max-sm:bottom-5 w-1/3 */}
              <img
                src={join_our_Team}
                className="absolute  top-[-10%] right-[-10%] max-2xl:right-0 max-xl:right-[15%] w-2/5 max-xl:w-2/6 max-lg:w-2/5 max-lg:-right-0 max-sm:w-[45%]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
