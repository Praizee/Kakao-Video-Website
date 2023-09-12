import React, { useState } from "react";
import { motion } from "framer-motion";
import Palm from "../assets/palm-frond.jpeg";
import ChainFence from "../assets/chain-fence.jpg";
import IceSkating from "../assets/ice-skating.jpg";
import Shrug from "../assets/shrug.jpeg";
import Eye from "../assets/eye.jpg";
import Freckles from "../assets/freckles.jpg";
import Boat from "../assets/boat.jpg";
import RugLady from "../assets/rug-lady.jpg";
import PillowLady from "../assets/pillow-lady.jpg";
import Thinking from "../assets/thinking.jpg";
import Video1 from "../assets/agency-video.mp4";

const imageStyles = [
  "w-full laptop:w-1/2",         // Style for the first image
  "w-full laptop:w-1/2",         // Style for the second image
  "w-full laptop:w-1/2",         // Style for the third image
  "w-full laptop:w-1/2",         // Style for the fourth image
  "w-full laptop:w-1/2",         // Style for the fifth image
  "w-full laptop:w-1/2",         // Style for the sixth image
  "w-full laptop:w-1/2",         // Style for the seventh image
  "w-full laptop:w-1/2",         // Style for the eighth image
  "w-full laptop:w-1/2",         // Style for the ninth image
  "w-full laptop:w-1/2",         // Style for the tenth image
];

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
            {[Palm, ChainFence, IceSkating, Shrug, Eye, Freckles, Boat, RugLady, PillowLady, Thinking].map((image, index) => (
              <div key={index} className={`relative ${imageStyles[index]} mx-auto my-2`}>
                <div
                  className="relative group"
                  onMouseEnter={() => setHoveredVideo(index)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <img
                    src={image}
                    className="laptop:w-[] w-full my-2 cursor-pointer"
                    alt=""
                  />
                  {hoveredVideo === index && (
                    <div className="absolute hidden inset-0 laptop:flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                      <video
                        src={Video1}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        preload="auto"
                      />
                      <div className="text-container text-center absolute text-white">
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-[1.5rem] font-bold"
                        >
                          Common Ground
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          Partner up to reinvent pop <br />
                          culture and street style
                        </motion.p>
                      </div>

                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* mobile */}
        <div className="my-36 laptop:hidden laptop:my-0 mx-4 laptop:mx-0">
          <div className="laptop:mx-[7rem] mx-4">

            {[Palm, ChainFence, IceSkating, Shrug, Eye, Freckles, Boat, RugLady, PillowLady, Thinking].map((image, index) => (
              <div key={index} className={`relative ${imageStyles[index]} mx-auto my-4`}>
                <img
                  src={image}
                  className="laptop:w-[] w-full cursor-pointer"
                  alt=""
                />

                <div className="absolut w-full items-center justify-center">
                  <div className="text-center w-auto py-12 text-white bg-black">
                    <h1 className="text font-black text-[1.4rem]">
                      Common Ground
                    </h1>
                    <p className="">
                      Partner up to reinvent pop <br />
                      culture and street style
                    </p>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>


      </motion.div>
    </section>
  );
};

export default Home;
