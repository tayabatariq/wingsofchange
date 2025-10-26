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

// image 2 for session
import s2img1 from '../assets/student/session2/v1.jpg';

// image 3 for session.
import s3img1 from '../assets/student/session3/i1.jpg';
import s3img2 from '../assets/student/session3/i2.jpg';
import s3img3 from '../assets/student/session3/i3.jpg';
import s3img4 from '../assets/student/session3/i4.jpg';
import s3img5 from '../assets/student/session3/i5.jpg';
import s3img6 from '../assets/student/session3/i6.jpg';
import s3img7 from '../assets/student/session3/i7.jpg';
import s3img8 from '../assets/student/session3/i8.jpg';
import s3img9 from '../assets/student/session3/i9.jpg';
import s3img10 from '../assets/student/session3/i10.jpg';
import s3img11 from '../assets/student/session3/i11.jpg';
import s3img12 from '../assets/student/session3/i12.jpg';
import s3img13 from '../assets/student/session3/i13.jpg';
import s3img14 from '../assets/student/session3/i14.jpg';
import s3img15 from '../assets/student/session3/i15.jpg';
import s3img16 from '../assets/student/session3/i17.jpg';
import s3img17 from '../assets/student/session3/i18.jpg';
import s3img18 from '../assets/student/session3/i19.jpg';
import s3img19 from '../assets/student/session3/i20.jpg';
import s3img20 from '../assets/student/session3/i21.jpg';
import s3img21 from '../assets/student/session3/i22.jpg';
import s3img22 from '../assets/student/session3/i23.jpg';
import s3img23 from '../assets/student/session3/i24.jpg';
import s3img24 from '../assets/student/session3/i25.jpg';
import s3img25 from '../assets/student/session3/i26.jpg';
import s3img26 from '../assets/student/session3/i27.jpg';
import s3img27 from '../assets/student/session3/i28.jpg';
import s3img28 from '../assets/student/session3/i29.jpg';
import s3img29 from '../assets/student/session3/i30.jpg';
import s3img31 from '../assets/student/session3/i32.jpg';
import s3img32 from '../assets/student/session3/i33.jpg';
import s3img33 from '../assets/student/session3/i34.jpg';
import s3img34 from '../assets/student/session3/i35.jpg';
import s3img35 from '../assets/student/session3/i36.jpg';
import s3img36 from '../assets/student/session3/i37.jpg';
import s3img37 from '../assets/student/session3/i38.jpg';
import s3img38 from '../assets/student/session3/i39.jpg';
import s3img39 from '../assets/student/session3/i40.jpg';
import s3img40 from '../assets/student/session3/i41.jpg';
import s3img41 from '../assets/student/session3/i42.jpg';
import s3img42 from '../assets/student/session3/i43.jpg';
import s3img43 from '../assets/student/session3/i44.jpg';
import s3img44 from '../assets/student/session3/i45.jpg';









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


// session 2 videos
import s2v1 from '../assets/student/session2/v2.mp4';
import s2v2 from '../assets/student/session2/v3.mp4';
import s2v3 from '../assets/student/session2/v4.mp4';
import s2v4 from '../assets/student/session2/v5.mp4';
import s2v5 from '../assets/student/session2/v6.mp4';
import s2v6 from '../assets/student/session2/v7.mp4';
import s2v7 from '../assets/student/session2/v8.mp4';
import s2v8 from '../assets/student/session2/v9.mp4';
import s2v9 from '../assets/student/session2/v10.mp4';
import s2v10 from '../assets/student/session2/v11.mp4';
import s2v11 from '../assets/student/session2/v12.mp4';
import s2v12 from '../assets/student/session2/v13.mp4';
import s2v13 from '../assets/student/session2/v14.mp4';
import s2v14 from '../assets/student/session2/v15.mp4';
import s2v15 from '../assets/student/session2/v16.mp4';
import s2v16 from '../assets/student/session2/v17.mp4';
import s2v17 from '../assets/student/session2/v18.mp4';
import s2v18 from '../assets/student/session2/v19.mp4';
import s2v19 from '../assets/student/session2/v20.mp4';
import s2v20 from '../assets/student/session2/v21.mp4';
import s2v21 from '../assets/student/session2/v22.mp4';
import s2v22 from '../assets/student/session2/v23.mp4';
import s2v23 from '../assets/student/session2/v24.mp4';
import s2v24 from '../assets/student/session2/v25.mp4';
import s2v25 from '../assets/student/session2/v26.mp4';
import s2v26 from '../assets/student/session2/v27.mp4';
import s2v27 from '../assets/student/session2/v28.mp4';
import s2v28 from '../assets/student/session2/v29.mp4';
import s2v29 from '../assets/student/session2/v30.mp4';
import s2v30 from '../assets/student/session2/v31.mp4';
import s2v31 from '../assets/student/session2/v32.mp4';
import s2v32 from '../assets/student/session2/v33.mp4';
import s2v33 from '../assets/student/session2/v34.mp4';
import s2v34 from '../assets/student/session2/v35.mp4';
import s2v35 from '../assets/student/session2/v36.mp4';
import s2v36 from '../assets/student/session2/v37.mp4';
import s2v37 from '../assets/student/session2/v38.mp4';
import s2v38 from '../assets/student/session2/v39.mp4';


// session 3 videos 

import s3v1 from '../assets/student/session3/s3v1.mp4';
import s3v2 from '../assets/student/session3/s3v2.mp4';
import s3v3 from '../assets/student/session3/s3v3.mp4';
import s3v4 from '../assets/student/session3/s3v4.mp4';
import s3v5 from '../assets/student/session3/s3v5.mp4';
import s3v6 from '../assets/student/session3/s3v6.mp4';
import s3v7 from '../assets/student/session3/s3v7.mp4';
import s3v8 from '../assets/student/session3/s3v8.mp4';
import s3v9 from '../assets/student/session3/s3v9.mp4';
import s3v10 from '../assets/student/session3/s3v10.mp4';
import s3v11 from '../assets/student/session3/s3v11.mp4';
import s3v12 from '../assets/student/session3/s3v12.mp4';
import s3v13 from '../assets/student/session3/s3v13.mp4';
import s3v14 from '../assets/student/session3/s3v14.mp4';







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
    // session2 images
    { src: s2img1, session: "session2" },
  //  session3 images
    { src: s3img1, session: "session3" },
    { src: s3img2, session: "session3" },
    { src: s3img3, session: "session3" },
{ src: s3img4, session: "session3" },
{ src: s3img5, session: "session3" },
{ src: s3img6, session: "session3" },
{ src: s3img7, session: "session3" },
{ src: s3img8, session: "session3" },
{ src: s3img9, session: "session3" },
{ src: s3img10, session: "session3" },
{ src: s3img11, session: "session3" },
{ src: s3img12, session: "session3" },
{ src: s3img13, session: "session3" },
{ src: s3img14, session: "session3" },
{ src: s3img15, session: "session3" },
{ src: s3img16, session: "session3" },
{ src: s3img17, session: "session3" },
{ src: s3img18, session: "session3" },
{ src: s3img19, session: "session3" },
{ src: s3img20, session: "session3" },
{ src: s3img21, session: "session3" },
{ src: s3img22, session: "session3" },
{ src: s3img23, session: "session3" },
{ src: s3img24, session: "session3" },
{ src: s3img25, session: "session3" },
{ src: s3img26, session: "session3" },
{ src: s3img27, session: "session3" },
{ src: s3img28, session: "session3" },
{ src: s3img29, session: "session3" },
{ src: s3img31, session: "session3" },
{ src: s3img32, session: "session3" },
{ src: s3img33, session: "session3" },
{ src: s3img34, session: "session3" },
{ src: s3img35, session: "session3" },
{ src: s3img36, session: "session3" },
{ src: s3img37, session: "session3" },
{ src: s3img38, session: "session3" },
{ src: s3img39, session: "session3" },
{ src: s3img40, session: "session3" },
{ src: s3img41, session: "session3" },
{ src: s3img42, session: "session3" },
{ src: s3img43, session: "session3" },
{ src: s3img44, session: "session3" },


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

    // videos from session 2
    { src: s2v1, session: "session2" },
    { src: s2v2, session: "session2" },
    { src: s2v3, session: "session2" },
    { src: s2v4, session: "session2" },
    { src: s2v5, session: "session2" },
    { src: s2v6, session: "session2" },
    { src: s2v7, session: "session2" },
    { src: s2v8, session: "session2" },
    { src: s2v9, session: "session2" },
    { src: s2v10, session: "session2" },
    { src: s2v11, session: "session2" },
    { src: s2v12, session: "session2" },
    { src: s2v13, session: "session2" },
    { src: s2v14, session: "session2" },
    { src: s2v15, session: "session2" },
    { src: s2v16, session: "session2" },
    { src: s2v17, session: "session2" },
    { src: s2v18, session: "session2" },
    { src: s2v19, session: "session2" },
    { src: s2v20, session: "session2" },
    { src: s2v21, session: "session2" },
    { src: s2v22, session: "session2" },
    { src: s2v23, session: "session2" },
    { src: s2v24, session: "session2" },
    { src: s2v25, session: "session2" },
    { src: s2v26, session: "session2" },
    { src: s2v27, session: "session2" },
    { src: s2v28, session: "session2" },
    { src: s2v29, session: "session2" },
    { src: s2v30, session: "session2" },
    { src: s2v31, session: "session2" },
    { src: s2v32, session: "session2" },
    { src: s2v33, session: "session2" },
    { src: s2v34, session: "session2" },
    { src: s2v35, session: "session2" },
    { src: s2v36, session: "session2" },
    { src: s2v37, session: "session2" },
    { src: s2v38, session: "session2" },
    // session 3 videos
    { src: s3v1, session: "session3" },
    { src: s3v2, session: "session3" },
{ src: s3v3, session: "session3" },
{ src: s3v4, session: "session3" },
{ src: s3v5, session: "session3" },
{ src: s3v6, session: "session3" },
{ src: s3v7, session: "session3" },
{ src: s3v8, session: "session3" },
{ src: s3v9, session: "session3" },
{ src: s3v10, session: "session3" },
{ src: s3v11, session: "session3" },
{ src: s3v12, session: "session3" },
{ src: s3v13, session: "session3" },
{ src: s3v14, session: "session3" },

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
 {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {["all", "session1", "session2", "session3"].map((session) => (
          <button
            key={session}
            onClick={() => setFilter(session)}
            className={`px-4 py-1 rounded-full transition-all duration-200 ${
              filter === session
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {session === "all"
              ? "All"
              : session.replace("session", "Session ")}
          </button>
        ))}
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