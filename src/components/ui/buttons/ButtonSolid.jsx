import React from "react";

const ButtonSolid = ({ text = "Contact us", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}   // ✅ onClick add karo
      className={`bg-tomato-red hover:bg-white hover:text-tomato-red border-[1px] border-transparent hover:border-tomato-red transition-all text-white text-lg max-2xl:text-base font-medium px-7 py-3 max-2xl:px-6 max-2xl:py-[10px] rounded-[4px] max-sm:text-sm ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonSolid;
