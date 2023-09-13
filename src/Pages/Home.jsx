import React, { useState } from "react";
import { motion } from "framer-motion";
// import Thinking from "../assets/thinking.jpg";
import BgVideo from "../assets/Kakao-Vids/Webflow - Kakao-main.mp4";

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

        <video
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover absolute top-0 left-0"
        >
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="backdrop-brightness-50 w-full h-screen object-cover absolute top-0 left-0"></div>

        <div className="laptop:mt-[25rem] text-white h-[4rem] relative z-10 p-4 laptop:p-0 mt-[10rem] mb-0 laptop:mx-[5rem] ">

          <div>
            <h1 className="laptop:text-[5rem] text-[3rem] mx-2 laptop:mx- laptop:leading-[8rem] font-black">
              YOUR VIDEO WORLD
            </h1>

            <p className="mx-2">
              Welcome to Kakao, the ultimate video streaming
              platform designed to <br />
              elevate your entertainment experience. Enjoy the show!
            </p>
          </div>
        </div>

        <div className="my-36 hidden laptop:flex bg-black laptop:my-[12rem] mx-4 laptop:mx-0">
          <div className="laptop:mx-[5.5rem] mb-16 text-white">
            <p className="">
              Welcome to Kakao, the ultimate video streaming
              platform designed to <br />
              elevate your entertainment experience. Enjoy the show!
            </p>
          </div>

        </div>


      </motion.div>
    </section>
  );
};

export default Home;
