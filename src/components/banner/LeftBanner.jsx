import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Node Js Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I&apos;m{" "}
          <span className="text-designColor capitalize">Rutvik Makvana</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          ⚡ Innovative Backend Developer from Surat, Crafting the Digital
          Backbone of Tomorrow To transform complex challenges into elegant,
          efficient solutions that power the next generation of digital
          experiences. Where backend logic meets forward-thinking design, and
          every project is a step toward the future.
        </p>
        <p
          className="relative p-6 mt-8 text-lg font-medium text-center text-gray-100 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne 
    before:content-['“'] before:absolute before:text-5xl before:text-designColor before:top-[-30px] before:left-[-20px] 
    after:content-['”'] after:absolute after:text-5xl after:text-designColor after:bottom-[-30px] after:right-[-20px] 
    transition-transform transform hover:scale-105 hover:rotate-1 hover:bg-opacity-100 duration-700 ease-in-out"
        >
          <span className="text-2xl font-bold text-designColor">
            My Mission:
          </span>
          <br />
          <span className="text-xl font-semibold text-white italic">
            Keep evolving, never stand still.
          </span>
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
