import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { socialMedia } from '../../utils/socialMedia';

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          {socialMedia.map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="bannerIcon">
              {item.title === 'github' && <FaGithub />}
              {item.title === 'twitter' && <FaTwitter />}
              {item.title === 'linkedin' && <FaLinkedinIn />}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Media