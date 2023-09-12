import React, { useState } from "react";
import { motion } from "framer-motion";
// import Thinking from "../assets/thinking.jpg";
// import Video1 from "../assets/agency-video.mp4";

// const imageStyles = [
//   "w-full laptop:w-1/2",         // Style for the first image
//   "w-full laptop:w-1/2",         // Style for the second image
//   "w-full laptop:w-1/2",         // Style for the third image
//   "w-full laptop:w-1/2",         // Style for the fourth image
//   "w-full laptop:w-1/2",         // Style for the fifth image
//   "w-full laptop:w-1/2",         // Style for the sixth image
//   "w-full laptop:w-1/2",         // Style for the seventh image
//   "w-full laptop:w-1/2",         // Style for the eighth image
//   "w-full laptop:w-1/2",         // Style for the ninth image
//   "w-full laptop:w-1/2",         // Style for the tenth image
// ];

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  return (
    <section className="text-black bg-white">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >
        <div className="laptop:mt-[20rem] h-[4rem] p-4 laptop:p-0 mt-[10rem] laptop:min-h-screen mb-0 laptop:mx-[7rem] ">
          <div>
            <h1 className="laptop:text-[9rem] text-[3rem] mx-2 laptop:mx-0 laptop:leading-[8rem] font-black">
              Video <br /> production.
            </h1>
          </div>
        </div>

        <div className="my-36 hidden laptop:block laptop:my-0 mx-4 laptop:mx-0">
          <div className="laptop:mx-[7rem] mb-16">

          </div>

        </div>


      </motion.div>
    </section>
  );
};

export default Home;
