import React, { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import VRGamer from "../assets/Kakao-Vids/VRgamer.mp4";
import SunsetBeach from "../assets/Kakao-Vids/Sunset-beach.mp4";
import BalletDancer from "../assets/Kakao-Vids/Ballet-dancer.mp4";
import SunsetWithMountains from "../assets/Kakao-Vids/sunset-with-mountain.webm"
import RunningThroughField from "../assets/Kakao-Vids/woman-running-through-field.mp4"
import SnowyPeaks from "../assets/Kakao-Vids/snowy-peaks.mp4"
import GirlsRunningThroughField from "../assets/Kakao-Vids/girls-running-through-field.mp4"
import ExcitedVRLady from "../assets/Kakao-Vids/excited-vr-lady.mp4"
import FlowersAndReading from "../assets/Kakao-Vids/flowers and reading.mp4"
import VRShooter from "../assets/Kakao-Vids/VR-shooter.mp4"
import SnowStorm from "../assets/Kakao-Vids/snow-storm.mp4"
import Eyes from "../assets/Kakao-Vids/eyes.mp4"
import PlayButton from "../assets/Play-button.webp"
import { PiArrowUpRightBold } from "react-icons/pi";
import { PiArrowDownRightBold } from "react-icons/pi";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const MobileHome = () => {

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

  const worksData = [
    {
      title: "CREATIVE CHRONICLES",
      heading: "Digital Dreamscape",
      button: "LEARN MORE",
      videoSource: GirlsRunningThroughField, // video source
    },
    {
      title: "EMOTIONAL JOURNEYS",
      heading: "Visual Alchemy",
      button: "LEARN MORE",
      videoSource: ExcitedVRLady, // video source
    },
    {
      title: "VISUAL SYMPHONY",
      heading: "Motion Mosaics",
      button: "LEARN MORE",
      videoSource: FlowersAndReading, // video source
    },
  ];

  const servicesData = [
    {
      title: "Variety",
      description: "Digital Dreamscape",
      videoSource: VRShooter, // video source
    },
    {
      title: "Quality",
      description: "Digital Dreamscape",
      videoSource: SnowStorm, // video source
    },
    {
      title: "Innovation",
      description: "Digital Dreamscape",
      videoSource: Eyes, // video source
    },
  ];

  return (
    <section className=" bg-black block tablet:hidden laptop:hidden">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >

        {/* continued from Home.jsx */}

        {/* our services */}
        <div className="my-3 block bg-black mt-[32rem] pt-16 p-4 mb-0 mx-0">
          <div className=" mb-16 w-full h-[22.2rem]  text-white">

            <div className="">
              <p className="">
                /OUR SERVICES
              </p>

              <span className="py-8">
                <h1 className="text-[2.5rem] border border-b-white/25 border-x-transparent border-t-transparent pb-10 font-medium leading-[2.9rem]">
                  All Your Video Content
                  Needs! Let's Create!
                </h1>
              </span>

            </div>

            <div className="grid grid-cols-1 mt-8 gap-4">
              {servicesData.map((item, index) => (
                <div className="" key={index}>
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg bg-cover object-cover w-full h-[11.5rem]"
                  >
                    <source src={item.videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <span className="-mt-[11.5rem] px-6 py-8 z-50 absolute backdrop-brightness-50">
                    <h1 className="mb-12 text-[2rem] font-medium">
                      {item.title}
                    </h1>
                    <p className="text-white font-light">
                      Watch your favourite videos in
                      one click.
                    </p>
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
        {/* our services */}

        {/* best recent work */}
        <div className="mt-[21rem] bg-black pt-28 mb-0">
          <div className=" mb-16 mx-4 w-full h-[rem] text-white grid grid-cols-1 gap-16">

            {/* content and video on the right */}
            {contentData.map((item, index) => (
              <div className="" key={index}>
                <span className="">
                  <p className="">
                    /BEST RECENT WORK
                  </p>
                </span>

                <span className="flex gap-[10rem] mb-8">
                  <h1 className="text-[2.5rem] w-[90%] mt-8  font-medium leading-[3rem]">
                    {item.title}
                  </h1>
                </span>

                <video
                  autoPlay
                  loop
                  muted
                  className="w-[90%]"
                >
                  <source src={item.videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-white/50 w-[90%] py-4">
                  Step into a captivating realm of digital creativity, where video artistry knows no bounds. Welcome to Kakao, your gateway to a mesmerizing collection of video masterpieces.
                </p>
                <span className="">
                  <button className="btn mt-4 bg-transparent text-white hover:bg-transparent font-almostsemibold border uppercase rounded-full transition duration-300 ease-linear hover:shadow-[0_.5px_8px_white]">
                    learn more
                    <span className="">
                      {/* hover:-translate-y-2 */}
                      <PiArrowUpRightBold size={15} />
                    </span>
                  </button>
                </span>
              </div>
            ))}
            {/* end of content and video on the right */}
          </div>
        </div>
        {/* end of best recent work */}

        {/* amazing video-watching adventure */}
        <div className="bg-black text-white">
          <div className="">
            <div className="mx-[rem] z-50 absolute">
              <h1 className="text-[2.5rem] text-center w-[80%] mx-8 mt-[7rem] leading-[3.2rem]">
                <span className="">
                  <img src={PlayButton} className="border p-6 mx-auto mb-16 rounded-full" alt="play-button" />
                </span>
                Your Amazing Video Watching Adventure!
              </h1>
            </div>

            <video
              autoPlay
              loop
              muted
              className="w-full min-h-[35rem] object-cover relative"
            >
              {/* max-h-[40rem] */}
              <source src={RunningThroughField} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="backdrop-brightness-50 w-full h-[35rem] -mt-[35rem] absolute left-0"></div>
          </div>
        </div>
        {/* end of amazing video-watching adventure */}

        {/* our work */}
        <div className="my-  bg-black pt-28 mt-[rem] mb-0">
          {/* border border-white/25 border-x-transparent */}
          <div className=" mb-16 w-full h-[22.2rem]  text-white border-white/25 border-t-transparent border-x-transparent">

            <div className="grid grid-cols-1 gap-8 mx-4 ">
              <span className="mr-[rem]">
                <p className="text-">
                  /OUR WORK
                </p>
              </span>

              {worksData.map((item, index) => (
                <div className="gap-[3rem] pb-10" key={index}>
                  <span className="">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full min-h-[20rem] mb-8 rounded-lg object-cover relativ"
                    >
                      {/* max-h-[40rem] */}
                      <source src={item.videoSource} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* <div className="backdrop-brightness-50 w-full h-[calc(100vh-5.5rem)] object-cove -mt-[35.4rem] absolute"></div> */}
                  </span>

                  <span className="">
                    <a className="text-[0.8rem] hover:text-white/50 cursor-pointer transition duration-500 ease-linear">
                      {item.title}
                    </a>
                    <h1 className="text-[1.7rem] py-4 leading-[2.2rem]">
                      {item.heading}
                    </h1>
                    <a className="text-[0.8rem] hover:text-white/50 border border-b-white/25 border-x-transparent border-t-transparent pb-2 cursor-pointer transition duration-500 ease-linear">
                      LEARN MORE
                    </a>
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
        {/* end of our works */}

        {/* maquee text */}
        <div className="text-white bg-black py-8 block mt-[80rem]">
          <Marquee loop={0} pauseOnHover>
            <ul className="flex gap-4 text-[3rem]"> &nbsp;
              <li className="text-[3rem]">
                Video
              </li>
              <span className="my-5 text-[1.5rem]"> • </span>
              <li className="text-outline text-[3rem]">
                Imagination
              </li>
              <span className="my-5 text-[1.5rem]"> • </span>
              <li className="text-[3rem]">
                Video
              </li>
              <span className="my-5 text-[1.5rem]"> • </span>
            </ul>
          </Marquee>

          <Marquee loop={0} pauseOnHover delay={30}>
            <ul className="flex gap-4 text-[3rem]"> &nbsp;
              <li className="text-outline text-[3rem]">
                Imagination
              </li>
              <span className="my-5 text-[1.5rem]"> • </span>
              <li className="text-[3rem]">
                Video
              </li>
              <span className="my-5 text-[1.5rem]"> • </span>
              <li className="text-outline text-[3rem]">
                Imagination
              </li>
              <span className="my-5 text-[1.5rem]"> • </span>
            </ul>
          </Marquee>
        </div>
        {/* end of marquee text */}

        {/* hire us */}
        <div className="bg-black text-white">
          <div className="">
            <div className="mx-5 mt-[7.5rem] z-50 absolute">
              <h1 className="text-[2.5rem] mb-10 text-center leading-[3.2rem]">
                Let's Create Smile-Worthy
                Digital Content Together.
              </h1>
              <p className="text-center text-white/75">
                Get ready to unlock the power of visual storytelling and take your video
                journey to new heights. Join us today and let your videos shine on Kakao!
              </p>
              <p className="uppercase text-[0.875rem] mt-20 mx-[9rem] text-center py-12 px- w-[40%] rotate-45 hover:rotate-0 transition ease-linear border rounded-full">
                Hire us!
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

            <div className="backdrop-brightness-50 w-full h-screen object-cover absolute -mt-[47.7rem]"></div>
          </div>
        </div>
        {/* end of hire us */}

        {/* our news */}
        <div className="mb-12 block bg-black pt-28 pb-[15rem] mt-[rem]">
          <div className="mx-[5.5rem] mb-16 w-full h-[22.2rem]  text-white">

            <div className="flex relative justify-betwee gap-[rem] mr-[rem]">
              <div className="w-full">
                <p className="w-full">
                  /OUR NEWS
                </p>
              </div>

              <div className="w-">
                <a className="flex text-[2rem] border uppercase border-y-white/25 border-x-transparent py-12">
                  <h1 className="font-medium leading-[3.6rem]">
                    6.17.23
                  </h1>
                  <span className="border border-white/25 flex w-16 h-0 p-0 mx-8 my-6 absolut"></span>
                  <Marquee pauseOnHover loop={0}>
                    <h1 className="font-medium text-[2rem] leading-[3.6rem]">
                      Measuring Video Success&nbsp;•&nbsp;Measuring Video Success&nbsp;•&nbsp;
                    </h1>
                  </Marquee>
                </a>
                <a className="flex text-[2rem] gap-[6rem] border uppercase border-y-white/25 border-x-transparent py-12">
                  <h1 className="font-medium leading-[3.6rem]">
                    6.12.23
                  </h1>
                  <Marquee pauseOnHover>
                    <h1 className="font-medium text-[2rem] leading-[3.6rem]">
                      Virtual Reality and Video&nbsp;•&nbsp;Virtual Reality and Video&nbsp;•&nbsp;
                    </h1>
                  </Marquee>
                </a>
                <a className="flex text-[2rem] gap-[6rem] border uppercase border-y-white/25 border-x-transparent py-12">
                  <h1 className="font-medium leading-[3.6rem]">
                    6.8.23
                  </h1>
                  <Marquee pauseOnHover>
                    <h1 className="font-medium text-[2rem] leading-[3.6rem]">
                      Capturing Aerial Perspectives&nbsp;•&nbsp;Capturing Aerial Perspectives&nbsp;•&nbsp;
                    </h1>
                  </Marquee>
                </a>
                <a className="flex text-[2rem] gap-[6rem] border uppercase border-y-white/25 border-x-transparent py-12">
                  <h1 className="font-medium leading-[3.6rem]">
                    6.1.23
                  </h1>
                  <Marquee pauseOnHover>
                    <h1 className="font-medium text-[2rem] leading-[3.6rem]">
                      Exploring Color Grading&nbsp;•&nbsp;Exploring Color Grading&nbsp;•&nbsp;
                    </h1>
                  </Marquee>
                </a>

              </div>

            </div>

          </div>
        </div>
        {/* end of our news */}

        {/* snowy peak video */}
        <div className="">
          <video
            autoPlay
            loop
            muted
            className="w-full h-[25rem] object-cover"
          >
            <source src={SnowyPeaks} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="backdrop-brightness-75 w-full h-[25.1rem] object-cover -mt-[25rem] absolute"></div>
        </div>
        {/* end snowy peak video */}


      </motion.div>
    </section>
  );
};

export default MobileHome;
