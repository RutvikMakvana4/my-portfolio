import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import BackToTop from "../BackToTop";

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen py-20 px-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-32 h-32 bg-pink-500/20 rounded-full absolute top-20 left-1/2 transform -translate-x-1/2 blur-3xl opacity-20" />
        <div className="w-48 h-48 bg-purple-500/20 rounded-full absolute bottom-20 right-1/4 blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center gap-12">
        <LeftBanner />
        <RightBanner />
      </div>
      <BackToTop />
    </section>
  );
};

export default Banner;