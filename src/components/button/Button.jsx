import React from "react";

const Button = ({ title, onClick, className = "", type = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-greenTip py-3 px-16 rounded-full text-sm md:text-xl lg:text-2xl mt-6 ${className}`}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
