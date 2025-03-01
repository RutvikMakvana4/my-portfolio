import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-4 bg-gradient-to-br from-gray-900 to-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;