import React from "react";

const Button = ({ onClick , navbtn, className }) => {
  return (
    <>
      <button
       onClick={onClick}
        className={`px-5 py-2 text-sm text-dark-navy hover:bg-tomato-red hover:text-white border hover:border-white transition-all border-tomato-red rounded-md ${className}`}
      >
        {navbtn}
      </button>
    </>
  );
};

export default Button;
