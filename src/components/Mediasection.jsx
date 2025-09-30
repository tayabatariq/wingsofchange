import React, { useState } from "react";
import orpahnegs from '../assets/galleryimg/orpahnegs.jpg'
import videohometour from '../assets/galleryimg/videoohometour.mp4'
const Mediasection = () => {
  const [activeTab, setActiveTab] = useState("images");

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

      {/* Content */}
      <div>
        {activeTab === "images" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src={orpahnegs}
              alt="Random"
              className="rounded-lg shadow-md"
            />
            <img
              src={orpahnegs}
              alt="Random"
              className="rounded-lg shadow-md"
            />
            <img
              src={orpahnegs}
              alt="Random"
              className="rounded-lg shadow-md"
            />
             <img
              src={orpahnegs}
              alt="Random"
              className="rounded-lg shadow-md"
            />
          </div>
        )}

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
            <video src={videohometour} title="Random Video 2"
              className="rounded-lg shadow-md"
              allowFullScreen  width="100%"
              height="  20px" controls>

            </video>
             <video  src={videohometour} title="Random Video 2"
              className="rounded-lg shadow-md"
              allowFullScreen  width="100%"
              height="120px" controls>

            </video>
             <video src={videohometour} title="Random Video 2"
              className="rounded-lg shadow-md"
              allowFullScreen  width="100%"
              height="120px" controls>

            </video>
             <video src={videohometour} title="Random Video 2"
              className="rounded-lg shadow-md"
              allowFullScreen  width="100%"
              height="120px" controls>

            </video>
             <video src={videohometour} title="Random Video 2"
              className="rounded-lg shadow-md"
              allowFullScreen  width="100%"
              height="120px" controls>

            </video>
             <video src={videohometour} title="Random Video 2"
              className="rounded-lg shadow-md"
              allowFullScreen  width="100%"
              height="120px" controls>

            </video>
             <video src={videohometour} title="Random Video 2"
              className="rounded-lg shadow-md"
              allowFullScreen  width="100%"
              height="120px" controls>

            </video>
           
           
          </div>
        )}
      </div>
      <br /><br />
    </section>
  );
};

export default Mediasection;
