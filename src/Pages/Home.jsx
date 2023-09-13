import React, { useState } from "react";
import { motion } from "framer-motion";
// import Thinking from "../assets/thinking.jpg";
import BgVideo from "../assets/Kakao-Vids/Webflow - Kakao-main.mp4";
import BgVideo from "../assets/Kakao-Vids/Webflow - Kakao-main.mp4";
import { PiArrowDownRightBold } from "react-icons/pi";

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

        {/* our services */}
        <div className="my-3 hidden laptop:flex bg-black pt-28 laptop:mt-[11.91rem] laptop:mb-0 mx-4 laptop:mx-0">
          <div className="laptop:mx-[5.5rem] mb-16 w-full h-[22.2rem]  text-white">

            <div className="flex gap-[rem] justify-between">
              <span className="">
                <p className="">
                  /OUR SERVICES
                </p>
              </span>

              <span className="flex gap-[10rem] border border-b-white/25 border-x-transparent border-t-transparent pb-10">
                <h1 className="text-[3.5rem] font-medium leading-[3.6rem]">
                  All Your Video Content <br />
                  Needs! Let's Create!
                </h1>

                <span className="p-4 border h-auto rounded-full ">
                  <PiArrowDownRightBold size={20} />
                </span>
              </span>

            </div>

            <div className="grid grid-cols-3 mt-2 gap-4 ml-[20.4rem]">
              <span className="p-4">
                <h1 className="mb-12 text-[2rem] font-medium">
                  Variety
                </h1>
                <p className="text-white/75 font-light">
                  Watch your favourite videos in <br />
                  one click.
                </p>
              </span>
              <span className="p-4">
                <h1 className="mb-12 text-[2rem] font-medium">
                  Quality
                </h1>
                <p className="text-white/75 font-light">
                  Watch your favourite videos in <br />
                  one click.
                </p>
              </span>
              <span className="p-4">
                <h1 className="mb-12 text-[2rem] font-medium">
                  Innovation
                </h1>
                <p className="text-white/75 font-light">
                  Watch your favourite videos in <br />
                  one click.
                </p>
              </span>
            </div>

          </div>
        </div>
        {/* our services */}

        {/* best recent work */}
        <div className=" hidden laptop:flex bg-black pt-28 laptop:mb-20 mx-4 laptop:mx-0">
          <div className="laptop:mx-[5.5rem] mb-16 w-full h-[rem] text-white grid grid-cols-2 gap-8">
            {/* <div className="grid grid-cols-2 gap-8"> */}
            <span className="">
              <span className="">
                <p className="">
                  /BEST RECENT WORK
                </p>
              </span>

              <span className="flex gap-[10rem]">
                <h1 className="text-[3.5rem] mt-8  font-medium leading-[4rem]">
                  Creating An Effective Video Ad Campaign
                </h1>
              </span>
            </span>

          </div>

        </div>
        {/* end of best recent work */}




      </motion.div>
    </section>
  );
};

export default Home;
