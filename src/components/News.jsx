import React from "react";
import SideShapeHeading from "./ui/Headings/SideShapeHeading";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import { black_boy_drinkwater, children_smiling, student_in_class } from "../assets";

const News = () => {
  return (
    <section
      id="news"
      className="pt-32 pb-36 max-lg:py-24 max-md:py-20 relative after:absolute after:w-full after:h-3/4 max-lg:after:h-full after:top-0 after:left-0 after:bg-[#EEF4F8] z-0 after:-z-[1]"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-light-gray text-2xl block mb-1 max-2xl:text-xl max-xl:text-lg max-sm:text-lg">
             Sessions
            </span>
          <h2 className="text-4xl text-dark-navy relative inline-block">
            <SideShapeHeading headingClassName="font-medium max-md:text-4xl max-lg:text-[40px] max-2xl:text-[44px]">
              Recent  <YellowUnderlineHeading> Sessions</YellowUnderlineHeading>
            </SideShapeHeading>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-4">
  Highlights from our recent project activities, assigned by <b>Ammal Fellowship</b> 
  and organized in collaboration with <b>Hafsa NGO</b>, showcasing the 
  impact of creative expression, cultural competitions, and environmental action.
</p>

        </div>

        {/* Sessions */}
        <div className="space-y-12">
          {/* Session 1 */}
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={children_smiling}
                alt="Dream Activity"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-dark-navy mb-2">
                Session 1: Dream Activity
              </h3>
              <p className="text-gray-600 mb-3">
                In the first session, children were encouraged to express their{" "}
                <b>dreams</b> by writing them on colorful <b>charts</b>. This
                activity helped them to visualize their goals in a creative way.
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Date: <b>5 October 2025 | 2:00 PM</b>
              </p>
              <p className="text-sm text-gray-500">
                Conducted in collaboration with <b>Hafsa NGO</b>, assigned by{" "}
                <b>Philop</b>.
              </p>
            </div>
          </div>

          {/* Session 2 */}
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={student_in_class}
                alt="Poetry Competition"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-dark-navy mb-2">
                Session 2: Naat & Poetry Competition
              </h3>
              <p className="text-gray-600 mb-3">
                The second session featured a <b>Naat</b> and <b>Poetry</b>{" "}
                competition, providing students an opportunity to showcase their
                creativity and confidence in front of their peers.
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Date: <b>5 October 2025 | 2:00 PM</b>
              </p>
              <p className="text-sm text-gray-500">
                Conducted in collaboration with <b>Hafsa NGO</b>, assigned by{" "}
                <b>Philop</b>.
              </p>
            </div>
          </div>

          {/* Session 3 */}
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={black_boy_drinkwater}
                alt="Plantation Drive"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-dark-navy mb-2">
                Session 3: Plantation Activity
              </h3>
              <p className="text-gray-600 mb-3">
                The final session was a <b>Plantation Drive</b>, where children
                actively participated in planting trees to contribute towards a
                greener and healthier environment.
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Date: <b>5 October 2025 | 2:00 PM</b>
              </p>
              <p className="text-sm text-gray-500">
                Conducted in collaboration with <b>Hafsa NGO</b>, assigned by{" "}
                <b>Philop</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
