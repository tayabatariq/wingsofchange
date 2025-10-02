import React from "react";
import post1 from '../assets/images/post1.jpg'
import post2 from '../assets/team/teemm.jpg'


// Posts Data
const posts = [
  {
    id: 1,
    title: "Empower Orphans. Build Futures.",
    desc: "Through Wings of Change, we aim to provide orphan children in Faisalabad with confidence & life skills, education support, fun, sports & creativity, and care & encouragement.",
    image: post1, // 👈 yahan tum apni post ki image ka path do
    date: "Oct 4, 2025",
    link: "https://www.instagram.com/p/DPTs1XkjCID/?utm_source=ig_web_copy_link&igsh=MXVubmp3cmpqOTk3dA==", // 👈 instagram post link
  },
  {
  id: 2,
  title: "Meet the Hearts Behind Wings of Change",
  desc: "We are a team of passionate Amal Fellows, united by one mission: to empower orphan children in Faisalabad through care, skills, and hope. Together, we believe in creating brighter futures where every child feels valued, supported, and inspired to dream big.",
  image: post2, // 👈 yahan apni image ka path do (assets se import karke bhi de sakti ho)
  date: "Oct 2, 2025",
  link: "https://www.instagram.com/p/DPTt5AMjEoP/?utm_source=ig_web_copy_link&igsh=MTBmMHkwcTNla3ppMA==/", // 👈 Instagram post link
}

];

const PostsSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="posts">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Latest Posts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our recent activities, events, and contributions. 
            These posts reflect our mission to bring positivity and learning into children's lives.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Post Image */}
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-56 object-cover"
              />
              
              {/* Content */}
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.desc}</p>
                
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 font-medium hover:underline"
                >
                  View on Instagram →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
