import React, { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import BgVideo from "../assets/Kakao-Vids/Webflow - Kakao-main.mp4";
import BestRecentWorkVideo from "../assets/Kakao-Vids/best-recent-works.mp4";
import VRGamer from "../assets/Kakao-Vids/VRgamer.mp4";
import SunsetBeach from "../assets/Kakao-Vids/Sunset-beach.mp4";
import BalletDancer from "../assets/Kakao-Vids/Ballet-dancer.mp4";
import SunsetWithMountains from "../assets/Kakao-Vids/sunset-with-mountain.webm"
import RunningThroughField from "../assets/Kakao-Vids/woman-running-through-field.mp4"
import SnowyPeaks from "../assets/Kakao-Vids/snowy-peaks.mp4"
import GirlsRunningThroughField from "../assets/Kakao-Vids/girls-running-through-field.mp4"
import ExcitedVRLady from "../assets/Kakao-Vids/excited-vr-lady.mp4"
import FlowersAndReading from "../assets/Kakao-Vids/flowers and reading.mp4"
import { PiArrowDownRightBold } from "react-icons/pi";
import MobileHome from "./MobileHome";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {

  const contentData = [
    // {
    //   title: "Creating An Effective Video Ad Campaign",
    //   videoSource: VRGamer, // video source
    // },
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

          <div className="hidden laptop:block tablet:block">
            <h1 className="laptop:text-[5rem] text-[3rem] mx-2 laptop:mx- laptop:leading-[8rem] font-black">
              YOUR VIDEO WORLD
            </h1>

            <p className="mx-2">
              Welcome to Kakao, the ultimate video streaming
              platform designed to <br />
              elevate your entertainment experience. Enjoy the show!
            </p>
          </div>
          <div className="laptop:hidden block">
            <h1 className="mt-[12rem] mb-16 text-center text-[3.5rem] mx-2 leading-[4rem] font-black">
              YOUR <br /> VIDEO WORLD
            </h1>

            <p className="mx-1 text-center">
              Welcome to Kakao, the ultimate video streaming
              platform designed to
              elevate your entertainment experience. Enjoy the show!
            </p>
          </div>
        </div>

        {/* Mobile Home */}
        {/* <MobileHome /> */}
        {/* end of Mobile Home */}

        {/* our services */}
        <div className="my-3 hidden tablet:flex laptop:flex bg-black pt-28 laptop:mt-[11.91rem] laptop:mb-0 mx-4 laptop:mx-0">
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
        <div className=" hidden tablet:flex laptop:flex bg-black pt-28 laptop:mb-0 mx-4 laptop:mx-0">
          <div className="laptop:mx-[5.5rem] mb-28 w-full h-[rem] text-white grid grid-cols-2 gap-16">
            {/* gap-24 */}
            {/* video on the left */}
            <div className=" col-span-1">
              <video
                autoPlay
                loop
                muted
                // width="3000"
                // height="5000"
                className="w-screen h-screen"
              // min-h-[150%]
              >
                <source src={BestRecentWorkVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <span className="backdrop-brightness-50 w-full h-screen object-cover absolute top-0 left-0"></span> */}
            </div>
            {/* end of video on the left */}

            {/* content and video on the right */}
            <div className="col-span-1">
              <span className="">
                <p className="">
                  /BEST RECENT WORK
                </p>
              </span>

              <span className="flex gap-[10rem] mb-8">
                <h1 className="text-[3.5rem] mt-8  font-medium leading-[4rem]">
                  Creating An Effective Video Ad Campaign
                </h1>
              </span>

              <video
                autoPlay
                loop
                muted
                className="w-full"
              >
                <source src={VRGamer} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {contentData.map((item, index) => (
              <div className=" col-span-1 row-span-1" key={index}>
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

        {/* amazing video-watching adventure */}
        <div className="bg-black tablet:block hidden text-white">
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

            <div className="backdrop-brightness-50 w-full h-[calc(100vh-5.5rem)] object-cove -mt-[35.4rem] absolute left-0"></div>
          </div>
        </div>
        {/* end of amazing video-watching adventure */}

        {/* our works */}
        <div className="my- border border-white/25 border-x-transparent hidden tablet:flex laptop:flex bg-black pt-28 laptop:mt-[rem] laptop:mb-0 mx-4 laptop:mx-0">
          <div className="laptop:mx-[5.5rem] mb-16 w-full h-[22.2rem]  text-white">

            <div className="grid grid-cols-2 gap-8">
              <span className="mr-[rem]">
                <p className="text-">
                  /OUR WORK
                </p>
              </span>

              {worksData.map((item, index) => (
                <div className="gap-[3rem] justify-between flex pb-10" key={index}>
                  <span className="">
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-[%] min-h- rounded-md object-cover relativ"
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
                    <h1 className="text-[2rem] leading-[2.2rem]">
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
        <div className="text-white hidden laptop:block tablet:block bg-black py-8 my-">
          <Marquee loop={0} pauseOnHover>
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

          <Marquee loop={0} pauseOnHover delay={30}>
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
        <div className="mb-12  laptop:block bg-black pt-28 pb-[15rem] laptop:mt-[rem] laptop:mb-0 mx-4 laptop:mx-0">
          <div className="laptop:mx-[5.5rem] mb-16 w-full h-[22.2rem]  text-white">

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

export default Home;
