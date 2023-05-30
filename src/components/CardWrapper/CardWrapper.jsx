import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center md:p-24 lg:mx-8 shadow-lg border-solid rounded-xl mb-12 bg-[#B0DAB9] p-12 max-w-[350px] max-h-[500px]">
      {children}
    </div>
  );
};

export default CardWrapper;
