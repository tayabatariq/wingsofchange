import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import member1 from "../assets/team/member1.png";
import member2 from "../assets/team/member2.jpg";
import member3 from "../assets/team/member3.jpg";
import member6 from "../assets/team/member6.jpg";
import member4 from "../assets/team/member4.png";
import member5 from "../assets/team/member5.jpg";
import member7 from "../assets/team/member7.jpg";
import member8 from "../assets/team/member8.jpg";
import member9 from "../assets/team/member9.jpg";



const teamMembers = [
  { 
    name: "Muhammad Humza", 
    image: member1,
    facebook: "https://www.facebook.com/share/1H5JvcZJgd/",
    linkedin: "https://www.facebook.com/share/1H5JvcZJgd/"
  },
  { 
    name: "Maha Amjad", 
    image: member2,
    facebook: "https://www.facebook.com/share/17oSFdvCnH/",
    linkedin: "https://www.facebook.com/share/17oSFdvCnH/"
  },
  { 

    name: "Tayaba Tariq", 
    image: member4,
    facebook: "https://www.linkedin.com/in/tayaba-tariq-a272a8357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    linkedin: "https://www.linkedin.com/in/tayaba-tariq-a272a8357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  { 
    name: "Muhammad Shehryar", 
    image: member6,
    facebook: "https://www.linkedin.com/in/mrmshehryar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    linkedin: "https://www.linkedin.com/in/mrmshehryar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  { 
    name: "Imaan Maqsood", 
    image: member3,
    facebook: "https://www.linkedin.com/in/imaan-maqsood?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    linkedin: "https://www.linkedin.com/in/imaan-maqsood?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  
  { 
    name: "Faisal Farooq", 
    image: member5,
    facebook: "https://www.facebook.com/share/1FNKeQ1Lg5/",
    linkedin: "https://www.linkedin.com/in/faisal-farooq-ba6845199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  { 
    name: "Hajra Mansoor", 
    image: member7,
    facebook: "https://www.facebook.com/share/1FwUDRyJSF/",
    linkedin: "https://www.facebook.com/share/1FwUDRyJSF/"
  },
  { 
    name: "Amna Bibi", 
    image: member8,
    facebook: "https://www.facebook.com/share/1GpkSWnga2/",
    linkedin: "https://www.linkedin.com/in/amna-bibi-47201b37b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }, 
  { 
    name: "Sanaullah kalhoro", 
    image: member9,
    facebook: "https://www.facebook.com/share/16xNTjDsZ1/",
    linkedin: "https://www.facebook.com/share/16xNTjDsZ1/"
  },
];

const Teammembers = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]" id="team">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-dark-navy mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our dedicated fellowship team is working passionately to bring smiles and 
          meaningful change to the children we serve. Get to know the faces behind the project!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition"
            >
              {/* Image with overlay */}
              <div className="relative group w-32 h-32 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-top object-cover rounded-full border-4 border-[#EEF4F8]"
                />

                {/* Overlay with social icons */}
                <div className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teammembers;
