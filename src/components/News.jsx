import React from "react";
import SideShapeHeading from "./ui/Headings/SideShapeHeading";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import { black_boy_drinkwater, children_smiling, student_in_class } from "../assets";
import session1 from '../assets/student/session11.jpg'
import session3 from '../assets/student/session3/i45.jpg'
import session2 from '../assets/student/event.jpg'


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
                src={session1}
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
    In the first session, children were encouraged to express their 
    <b> dreams </b> by writing them on colorful <b> charts </b>. 
    This fun and interactive activity helped them imagine their future goals 
    in a more creative and confident way. Each child shared their unique vision, 
    which created a warm and inspiring environment in the room.
  </p>
  <p className="text-gray-600 mb-3">
    Along with the activity, we also played an exciting <b>match game</b> 
    with the students. This friendly game helped build a stronger 
    connection between our team and the children, making the session 
    more joyful and full of energy. It also encouraged teamwork, 
    sportsmanship, and confidence among the students.
  </p>
  <p className="text-sm text-gray-500 mb-1">
    Date: <b>5 October 2025 | 2:00 PM</b>
  </p>
  <p className="text-sm text-gray-500">
    Conducted in collaboration with <b>Hafsa NGO</b>, assigned by 
    <b> Philop </b>.
  </p>
</div>

          </div>

       {/* Session 2 */}
<div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
  {/* Image */}
  <div className="md:w-1/2">
    <img
      src={session2}
      alt="Naat, Poetry & Activities"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="md:w-1/2 p-6 flex flex-col justify-center">
    <h3 className="text-2xl font-semibold text-dark-navy mb-2">
      Session 2: Storytelling, Naat & Poetry Competition
    </h3>
    <p className="text-gray-600 mb-3">
      In this session, we engaged students in <b>storytelling</b> activities,
      followed by an exciting <b>Naat</b>, <b>Poetry</b>, and <b>Song competition</b>.
      The aim was to help them express their creativity and build confidence
      through fun and expressive performances. Later, we organized a friendly
      <b> match</b> to add some energy and teamwork, and concluded the day by
      <b> distributing fruits</b> among the children — lovingly brought by our
      <b> volunteers</b>.
    </p>
    <p className="text-sm text-gray-500 mb-1">
      Date: <b>5 October 2025 | 2:00 PM</b>
    </p>
    <p className="text-sm text-gray-500">
      Conducted in collaboration with <b>Hafsa NGO</b>, assigned by <b>Philop</b>.
    </p>
  </div>
</div>


          {/* Session 3 */}
<div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden">
  {/* Image */}
  <div className="md:w-1/2">
    <img
      src={session3}
      alt="Plantation and Pizza Party"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="md:w-1/2 p-6 flex flex-col justify-center">
    <h3 className="text-2xl font-semibold text-dark-navy mb-2">
      Session 3: Plantation & Celebration
    </h3>
    <p className="text-gray-600 mb-3">
      The final session was filled with both <b>learning</b> and <b>joy</b>.
      We began with a meaningful <b>Plantation Activity</b>, where the children
      enthusiastically planted trees, learning the importance of caring for
      nature and building a greener future.  
      <br />
      To make their day extra special, we ended the session with a cheerful
      <b> Pizza Party</b> — a small surprise organized by our <b>volunteers</b>,
      bringing smiles, laughter, and happy memories to everyone.
    </p>
    <p className="text-sm text-gray-500 mb-1">
      Date: <b>5 October 2025 | 2:00 PM</b>
    </p>
    <p className="text-sm text-gray-500">
      Conducted in collaboration with <b>Hafsa NGO</b>, assigned by <b>Philop</b>.
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default News;
