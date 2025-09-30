import React from "react";

// Example logos (replace these with your own company logo paths)
import logo1 from "../assets/images/ataialogo.jpg";
import logo2 from "../assets/images/ammallogo.png";
import logo3 from "../assets/images/logo.png";

const clients = [logo1, logo2, logo3, logo1, logo2, logo3];

const Marquee = () => {
return ( <section className="w-full py-12 bg-white"> <div className="overflow-hidden relative"> <div className="flex gap-16 md:gap-24 animate-marquee">
{clients.concat(clients).map((item, index) => ( <div key={index} className="flex-shrink-0">
<img
src={item}
alt={`client-${index}`}
className="h-12 md:h-20 lg:h-24 object-contain transition-transform duration-300 hover:scale-110 hover:shadow-lg"
/> </div>
))} </div> </div> </section>
);
};

export default Marquee;
