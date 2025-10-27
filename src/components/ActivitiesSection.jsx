// ActivitiesSection.jsx — Updated with 4 Video Cards and Larger Video Height
// React + Tailwind component for displaying session videos

import React from 'react';

// --- Importing Session Videos ---
import session1 from '../assets/session1.mp4';
import session2 from '../assets/session2.mp4';
import session3 from '../assets/session3.mp4';
import session4 from '../assets/pizzastd.mp4';

export default function ActivitiesSection() {
  const sessions = [session1, session2, session3, session4];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Our Activities & Sessions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here’s a quick look at the meaningful activities and learning sessions we conducted as part of our journey.
        </p>
      </div>

      {/* Video Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sessions.map((src, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="bg-gray-100">
              <video
                controls
                src={src}
                className="w-full object-cover"
                preload="metadata"
                style={{
                  width: '100%',
                  height: '380px', // 👈 custom height (change as needed)
                  objectFit: 'cover',
                  borderRadius: '0.5rem',
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-5">
              <h4 className="font-semibold text-gray-900 text-lg mb-1">
                {idx === 3
                  ? 'Students Craving for Pizza '
                  : `Session ${idx + 1}`}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
