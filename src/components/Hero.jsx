import { styles } from "../styles";
import SpaceCanvas from "./canvas/Space";

const Hero = () => {
  return (
    <section className="flex flex-row items-center justify-center relative w-full h-screen">
      <div
        className={`${styles.paddingX} absolute max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 z-10">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className={`${styles.heroHeadText} text-white z-10 text-center`}>
          <h1>
            Hi, I&#39;m <span className="text-[#915eff]">Mohamed Aly</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            front end developer passionate about crafting intuitive and visually
            appealing user interfaces.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 z-10">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
      </div>
      <SpaceCanvas />
    </section>
  );
};

export default Hero;
