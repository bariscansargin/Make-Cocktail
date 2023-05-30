import React from "react";
import { Link } from "react-router-dom";
import { DiGithubBadge } from "react-icons/di";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full h-24 bg-[#B0DAB9] text-black">
      <div className="ml-8">
        <p className="text-center">Made by Barışcan Sargın</p>
      </div>

      <Link to={"https://github.com/bariscansargin"}>
        <DiGithubBadge className="w-28  text-2xl text-black hover:text-white" />
      </Link>
    </div>
  );
};

export default Footer;
