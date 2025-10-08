import React, { useState } from "react";
import orpahnegs from '../assets/galleryimg/orpahnegs.jpg'
import vsiit1 from '../assets/images/visitimg.jpg'
import vsiit2 from '../assets/images/visitimg2.jpg'
import vsiit3 from '../assets/images/visitimg3.jpg'
import videohometour from '../assets/galleryimg/videoohometour.mp4'

const Mediasection = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [filter, setFilter] = useState("all");

  // Image data with sessions
  const images = [
    { src: orpahnegs, session: "session1" },
    { src: vsiit1, session: "session2" },
    { src: vsiit2, session: "session3" },
    { src: vsiit3, session: "session1" },
  ];

  // Video data with sessions
  const videos = [
    { src: videohometour, session: "session1" },
    { src: videohometour, session: "session2" },
    { src: videohometour, session: "session3" },
    { src: videohometour, session: "session1" },
    { src: videohometour, session: "session2" },
    { src: videohometour, session: "session3" },
    { src: videohometour, session: "session1" },
  ];

  // Filter function
  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.session === filter);
  const filteredVideos =
    filter === "all" ? videos : videos.filter((vid) => vid.session === filter);

  return (
    <section className="w-full max-w-4xl mx-auto mt-10">
      {/* Navbar */}
      <div className="flex justify-center gap-6 border-b pb-3 mb-6">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "images"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("images")}
        >
          Images
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "videos"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-1 rounded-full ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("session1")}
          className={`px-4 py-1 rounded-full ${
            filter === "session1" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Session 1
        </button>
        <button
          onClick={() => setFilter("session2")}
          className={`px-4 py-1 rounded-full ${
            filter === "session2" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Session 2
        </button>
        <button
          onClick={() => setFilter("session3")}
          className={`px-4 py-1 rounded-full ${
            filter === "session3" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Session 3
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === "images" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt="gallery"
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {filteredVideos.map((vid, index) => (
              <video
                key={index}
                src={vid.src}
                className="rounded-lg shadow-md"
                allowFullScreen
                width="100%"
                height="120px"
                controls
              ></video>
            ))}
          </div>
        )}
      </div>
      <br /><br />
    </section>
  );
};

export default Mediasection;
