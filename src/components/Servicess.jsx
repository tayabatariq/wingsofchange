import React from "react";
import Slider from "react-slick";
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

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-yellow-400 text-white p-2 rounded-full shadow-lg hover:bg-yellow-500"
      onClick={onClick}
    >
      ➡
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-yellow-400 text-white p-2 rounded-full shadow-lg hover:bg-yellow-500"
      onClick={onClick}
    >
      ⬅
    </div>
  );
};

const services = [
  {
    title: "Chatbot and Sticky Notes",
    desc: "A creative activity designed to help participants write down their dreams, goals, and aspirations using digital sticky notes and chatbot prompts. This exercise encourages self-reflection, goal setting, and developing a clear vision for the future while making the process engaging and interactive.",
    icon: book_bulb,
  },
  {
    title: "Poems and Songs Sharing",
    desc: "An open platform for participants to share poems and songs as a way of building creativity and confidence. By expressing their emotions through art and performance, individuals not only improve their communication skills but also enhance self-confidence and develop stronger connections with others.",
    icon: people_globe,
  },
  {
    title: "Plantation Activity",
    desc: "An awareness activity focused on environmental sustainability, where participants take part in planting trees and greenery. This hands-on experience promotes responsibility towards nature, spreads awareness about climate change, and fosters a sense of contribution towards creating a greener and healthier environment.",
    icon: file_flowchart,
  },
  {
    title: "Storytelling Sessions",
    desc: "Interactive storytelling sessions that inspire imagination, creativity, and emotional bonding. Participants share stories or listen to others, which helps in improving language, enhancing creative thinking, and building stronger community relationships through shared experiences and values.",
    icon: target_arrow,
  },
];


const Servicess = () => {
const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,   // desktop
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 2 } }, // tablet
    { breakpoint: 768, settings: { slidesToShow: 1 } },  // mobile
  ],
};



  return (
    <section className="pb-28 max-sm:pb-20 pt-36 max-lg:pt-28 relative z-[1] overflow-hidden">
      <img
        src={rings_shape}
        alt="rings shape"
        className="absolute rotate-12 -bottom-32 right-0 -z-[1]"
      />
      <div className="container">
        <SideShapeHeading className="w-fit mx-auto mb-12 ">
          <YellowUnderlineHeading className="leading-none">
            Our Activities
          </YellowUnderlineHeading>
        </SideShapeHeading>

        {/* Carousel */}
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3">
              <ServiceCard
                title={service.title}
                icon={service.icon}
                desc={service.desc}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Servicess;
