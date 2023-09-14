import React, { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import BgVideo from "../assets/Kakao-Vids/Webflow - Kakao-main.mp4";
import BestRecentWorkVideo from "../assets/Kakao-Vids/pexels shvets production 7547019 3840x2160 25fps.mp4";
import VRGamer from "../assets/Kakao-Vids/VRgamer.mp4";
import SunsetBeach from "../assets/Kakao-Vids/Sunset-beach.mp4";
import BalletDancer from "../assets/Kakao-Vids/Ballet-dancer.mp4";
import SunsetWithMountains from "../assets/Kakao-Vids/sunset-with-mountain.webm"
import RunningThroughField from "../assets/Kakao-Vids/woman-running-through-field.mp4"
import { PiArrowDownRightBold } from "react-icons/pi";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {

  const contentData = [
    {
      title: "Creating An Effective Video Ad Campaign",
      videoSource: VRGamer, // video source
    },
    {
      title: "Best Technologies In Video Production",
      videoSource: BalletDancer, // video source
    },
    {
      title: "Creation Of Dynamic Visual Transitions",
      videoSource: SunsetBeach, // video source
    },
  ];

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
        <div className=" hidden laptop:flex bg-black pt-28 laptop:mb-0 mx-4 laptop:mx-0">
          <div className="laptop:mx-[5.5rem] mb-28 w-full h-[rem] text-white grid grid-cols-2 gap-24">
            {/* video on the left */}
            <div className="">
              <video
                autoPlay
                loop
                muted
                width="3000"
                height="5000"
                className="w-screen h-screen"
              >
                <source src={BestRecentWorkVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <span className="backdrop-brightness-50 w-full h-screen object-cover absolute top-0 left-0"></span> */}
            </div>
            {/* end of video on the left */}

            {/* content and video on the right */}
            {contentData.map((item, index) => (
              <div className="" key={index}>
                <span className="">
                  <p className="">
                    /BEST RECENT WORK
                  </p>
                </span>

                <span className="flex gap-[10rem] mb-8">
                  <h1 className="text-[3.5rem] mt-8  font-medium leading-[4rem]">
                    {item.title}
                  </h1>
                </span>

                <video
                  autoPlay
                  loop
                  muted
                  className="w-full"
                >
                  <source src={item.videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
            {/* end of content and video on the right */}
          </div>
        </div>
        {/* end of best recent work */}

        {/* end of amazing video-watching adventure */}
        <div className="bg-black text-white">
          <div className="">
            <div className="laptop:mx-[5rem] z-50 absolute">
              <h1 className="text-[3rem] mt-[10rem] leading-[3.4rem]">
                GET READY TO GO <br />
                ON AN AMAZING <br />
                VIDEO WATCHING <br />
                ADVENTURE!
              </h1>
            </div>

            <video
              autoPlay
              loop
              muted
              className="w-full max-h-[calc(100vh-5.5rem)] object-cover relative"
            >
              {/* max-h-[40rem] */}
              <source src={RunningThroughField} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="backdrop-brightness-50 w-full h-[calc(100vh-5.5rem)] object-cove -mt-[35.4rem] absolute"></div>
          </div>
        </div>
        {/* end of amazing video-watching adventure */}

        {/* maquee text */}
        <div className="text-white bg-black py-8 my-">
          <Marquee loop={1} pauseOnHover>
            <ul className="flex gap-4 text-[4rem]">
              <li className="text-[8rem]">
                Video
              </li>
              <span className="my-12 text-[4rem]"> • </span>
              <li className="text-outline text-[8rem]">
                Imagination
              </li>
              <span className="my-12 text-[4rem]"> • </span>
              <li className="text-[8rem]">
                Video
              </li>
              <span className="my-12 text-[4rem]"> • </span>
            </ul>
          </Marquee>

          <Marquee loop={1} delay={30}>
            <ul className="flex gap-4 text-[4rem]">
              <li className="text-outline text-[8rem]">
                Imagination
              </li>
              <span className="my-12 text-[4rem]"> • </span>
              <li className="text-[8rem]">
                Video
              </li>
              <span className="my-12 text-[4rem]"> • </span>
              <li className="text-outline text-[8rem]">
                Imagination
              </li>
              <span className="my-12 text-[4rem]"> • </span>
            </ul>
          </Marquee>
        </div>
        {/* end of marquee text */}

        {/* hire us */}
        <div className="bg-black text-white">
          <div className="">
            <div className="laptop:mx-[5rem] mt-[7.5rem] z-50 absolute">
              <h1 className="text-[3rem] mb-10 leading-[3.2rem]">
                Let's Create Smile-Worthy <br />
                Digital Content Together.
              </h1>
              <p className="">
                Get ready to unlock the power of visual storytelling and take your video <br />
                journey to new heights. Join us today and let your videos shine on Kakao!
              </p>
            </div>

            <video
              autoPlay
              loop
              muted
              className="w-full h-screen object-cover relative"
            >
              {/* max-h-[40rem] */}
              <source src={SunsetWithMountains} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="backdrop-brightness-50 w-full h-screen object-cover absolute -mt-[40.9rem]"></div>
          </div>
        </div>
        {/* end of hire us */}

        {/* our news */}
        <div className="my-3 hidden laptop:flex bg-black pt-28 laptop:mt-[11.91rem] laptop:mb-0 mx-4 laptop:mx-0">
          <div className="laptop:mx-[5.5rem] mb-16 w-full h-[22.2rem]  text-white">

            <div className="flex gap-[10rem] justify-betwee">
              <span className="">
                <p className="">
                  /OUR SERVICES
                </p>
              </span>

              <a className="flex text-[2.5rem] gap-[6rem] border uppercase border-y-white/25 border-x-transparent w-full py-12">
                <h1 className="font-medium leading-[3.6rem]">
                  6.17.23
                </h1>
                <Marquee>
                  <h1 className="font-medium text-[2.5rem] leading-[3.6rem]">
                    Measuring Video Success&nbsp;•&nbsp;Measuring Video Success&nbsp;•&nbsp;
                  </h1>
                </Marquee>
              </a>

            </div>


          </div>
        </div>
        {/* end of our news */}

      </motion.div>
    </section>
  );
};

export default Home;
