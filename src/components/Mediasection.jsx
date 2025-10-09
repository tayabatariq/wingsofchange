import React, { useState } from "react";



//  All new image imports 
import img1 from '../assets/galleryimg/img1.jpg'; 
import img2 from '../assets/galleryimg/img2.jpg'; 
import img3 from '../assets/galleryimg/img3.jpg';
import img4 from '../assets/galleryimg/img4.jpg';
import img5 from '../assets/galleryimg/img5.jpg'; 
import img6 from '../assets/galleryimg/img6.jpg';
import img7 from '../assets/galleryimg/img7.jpg';
import img8 from '../assets/galleryimg/img8.jpg';
import img9 from '../assets/galleryimg/img9.jpg';
import img10 from '../assets/galleryimg/img10.jpg';
import img11 from '../assets/galleryimg/img11.jpg';
import img12 from '../assets/galleryimg/img12.jpg';
import img13 from '../assets/galleryimg/img13.jpg';
import img14 from '../assets/galleryimg/img14.jpg';
import img15 from '../assets/galleryimg/img15.jpg';
import img16 from '../assets/galleryimg/img16.jpg';



// ✅ All new video imports 
import vid1 from '../assets/galleryimg/session1video1.mp4';
import vid2 from '../assets/galleryimg/session1video2.mp4';
import vid3 from '../assets/galleryimg/session1video3.mp4';
import vid5 from '../assets/galleryimg/s1v2.mp4';
import vid6 from '../assets/galleryimg/s1v3.mp4';
import vid7 from '../assets/galleryimg/s1v4.mp4';
import vid8 from '../assets/galleryimg/s1v5.mp4';
import vid9 from '../assets/galleryimg/s1v6.mp4';
import vid10 from '../assets/galleryimg/s1v7.mp4';
import vid11 from '../assets/galleryimg/s1v8.mp4';
import vid12 from '../assets/galleryimg/s1v9.mp4';
import vid13 from '../assets/galleryimg/s1v10.mp4';
import vid14 from '../assets/galleryimg/s1v11.mp4';
import vid15 from '../assets/galleryimg/s1v12.mp4';
import vid16 from '../assets/galleryimg/s1v13.mp4';




const Mediasection = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [filter, setFilter] = useState("all");

  //  Image data with sessions
  const images = [
    { src: img1, session: "session1" },
    { src: img2, session: "session1" },
    { src: img3, session: "session1" },
    { src: img4, session: "session1" },
    { src: img5, session: "session1" },
    { src: img6, session: "session1" },
    { src: img7, session: "session1" },
    { src: img8, session: "session1" },
    { src: img9, session: "session1" },
    { src: img10, session: "session1" },
    { src: img11, session: "session1" },
    { src: img12, session: "session1" },
    { src: img13, session: "session1" },
    { src: img14, session: "session1" },
    { src: img15, session: "session1" },
    { src: img16, session: "session1" },
   
  ];

  //  Video data with sessions 
  const videos = [
    // { src: videohometour, session: "session1" },
    { src: vid1, session: "session1" },
    { src: vid2, session: "session1" },
    { src: vid3, session: "session1" },
    { src: vid5, session: "session1" },
    { src: vid6, session: "session1" },
    { src: vid7, session: "session1" },
    { src: vid8, session: "session1" },
    { src: vid9, session: "session1" },
    { src: vid10, session: "session1" },
    { src: vid11, session: "session1" },
    { src: vid12, session: "session1" },
    { src: vid13, session: "session1" },
    { src: vid14, session: "session1" },
    { src: vid15, session: "session1" },
    { src: vid16, session: "session1" },
  ];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.session === filter);
  const filteredVideos =
    filter === "all" ? videos : videos.filter((vid) => vid.session === filter);

  return (
    <section className="w-full max-w-4xl mx-auto mt-10">
      <div className="flex justify-center gap-6 border-b pb-3 mb-6">
        <button
          className={`px-4 py-2 font-medium ${activeTab === "images"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
            }`}
          onClick={() => setActiveTab("images")}
        >
          Images
        </button>
        <button
          className={`px-4 py-2 font-medium ${activeTab === "videos"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
            }`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-1 rounded-full ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("session1")}
          className={`px-4 py-1 rounded-full ${filter === "session1" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
        >
          Session 1
        </button>
      </div>

      <div>
        {activeTab === "images" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt="gallery"
                className="rounded-lg shadow-md w-full h-48 object-cover"
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
                className="rounded-lg shadow-md w-full h-48 object-cover"
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