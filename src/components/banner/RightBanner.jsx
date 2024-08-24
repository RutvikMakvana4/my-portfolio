import React from "react";
import profileImg from "/profile.svg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center">
      <div className="relative w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">
        <img
          className="absolute bottom-0 w-[300px] h-[400px] lgl:w-[500px] lgl:h-[500px] object-contain"
          src={profileImg}
          alt="Profile Image"
        />
      </div>
    </div>
  );
};

export default RightBanner;
