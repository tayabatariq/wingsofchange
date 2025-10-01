import React from 'react';
import { Heart, Compass, Shield } from 'lucide-react';
import Servicess from "../components/Servicess";


const IMAGE_PLACEHOLDERS = {
  hero: "https://miramar.usmc-mccs.org/modules/media/t/5253ade0e5f544c4993fded7da8cfbcd.png?m=638312775111330000",
  kidsLearning: "https://scitechdaily.com/images/Children-Language-School.jpg",
  mealTime: "https://www.amaven.co.uk/files/styles/blog___news_node_image/public/image/blog/School-lunch2.jpg?itok=iA3NMAfu",
  activities: "https://tist.school/uploads/media/social-skills66c6b9d074d3e.webp",
  facilities: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04cVhnjTxAvkDxWqSFSSg37X9U8xzuT3kOA&s"
};

const images = [
  { src: IMAGE_PLACEHOLDERS.kidsLearning, caption: "Children Learning" },
  { src: IMAGE_PLACEHOLDERS.mealTime, caption: "Meal Time" },
  { src: IMAGE_PLACEHOLDERS.activities, caption: "Fun Activities" },
  { src: IMAGE_PLACEHOLDERS.facilities, caption: "Our Facilities" },
];

const ServicesSection = () => (
  <div className="py-16 px-4 bg-gray-50">
    <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">What We Do</h2>
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      <ServiceCard icon={<Compass className="w-10 h-10 text-pink-500" />} title="Holistic Education" description="We provide full-time schooling, tutoring, and life skills training to ensure a bright future." />
      <ServiceCard icon={<Heart className="w-10 h-10 text-pink-500" />} title="Nutritional Care" description="Every child receives three balanced and healthy meals daily, essential for growth and learning." />
      <ServiceCard icon={<Shield className="w-10 h-10 text-pink-500" />} title="Safe Shelter" description="A secure, loving, and nurturing environment where children can thrive without fear." />
    </div>
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);





const AboutSection = () => {
const gotoContact = () => {
  window.location.href = "/contact";  // <-- .href use karna hota hai
};

  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
      
      {/* Hero Section */}
      <div
        className="hero-section bg-cover bg-center text-white py-20 px-4 md:py-32 flex flex-col justify-center items-center shadow-inner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${IMAGE_PLACEHOLDERS.hero})`,
        }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center">About Wings of Change</h1>
        <p className="text-lg md:text-xl max-w-3xl text-center mb-8 font-light">
          We are a non-profit organization dedicated to supporting underprivileged children 
          through education, nutrition, and care. Together, we can make a difference!
        </p>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          onClick={gotoContact}
        >
          Contact us
        </button>
      </div>

                <Servicess />


      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 mt-16 md:mt-24">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">A Look Inside Our Home</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {images.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-xl">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/ccc/333?text=Image+Unavailable" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-bold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission, Vision, Support */}
      <div className="max-w-7xl mx-auto px-4 mt-12 md:mt-20">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-pink-500 text-center hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Our Mission</h2>
            <p className="text-gray-600">Empowering underprivileged children by providing education, care, and support, giving them a foundation for a successful life.</p>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-pink-500 text-center hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Our Vision</h2>
            <p className="text-gray-600">A world where every child, regardless of background, has equal opportunities to learn, grow, and succeed to their full potential.</p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-pink-500 text-center hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Support Us</h2>
            <p className="text-gray-600">Volunteer, make a monthly contribution, or spread awareness. Every single action brings a tangible, positive change!</p>
          </div>
        </div>
      </div>

      <ServicesSection />
    </>
  );
};

export default AboutSection;
