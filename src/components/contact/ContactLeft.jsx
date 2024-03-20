import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { socialMedia } from '../../utils/socialMedia';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rutvik Makvana</h3>
        <p className="text-lg font-normal text-gray-400">
          Node Js Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          💻 Passionate full-stack developer dedicated to crafting impactful digital solutions. Let's collaborate and build something extraordinary!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6355423641</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">rutvikmakvana432@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
  );
}

export default ContactLeft