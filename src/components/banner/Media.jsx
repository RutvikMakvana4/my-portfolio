import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { socialMedia } from "../../utils/socialMedia";
import { FaXTwitter } from "react-icons/fa6";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              {item.title === "github" && <FaGithub />}
              {item.title === "twitter" && <FaXTwitter />}
              {item.title === "linkedin" && <FaLinkedinIn />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
