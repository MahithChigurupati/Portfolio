import { motion } from "framer-motion";
import Typed from "react-typed";

import { styles } from "../styles";
import { AvatarCanvas } from "./canvas";

const texts = [
  "Software Engineer",
  "Blockchain Developer",
  "Full Stack Developer",
];

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5 sm:flex-row sm:items-start`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="text-center sm:text-left">
          <h1 className={`${styles.sectionSubText} text-white`}>
            Hello, It's Me
          </h1>

          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#915EFF]">Mahith</span>
          </h1>

          <h2 className={`${styles.sectionSubText} text-white mb-8`}>
            And I'm a{" "}
            <span className="text-[#915EFF]">
              <Typed strings={texts} typeSpeed={50} backSpeed={30} loop />
            </span>
          </h2>

          <p className={`${styles.heroSubText} mt-2 mb-12 text-white-100`}>
            I develop Web 3.0 dApps, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      <AvatarCanvas />

      <div className="absolute xs:bottom-10 w-full flex justify-center items-center fixed bottom-0 left-0">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
