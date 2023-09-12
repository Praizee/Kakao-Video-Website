//<br className="hidden laptop:block" />
import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const AboutUs = () => (
  <section className=" bg-[#010886]">

    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 3 }}
    >
      {/* <div className='min-h-screen'> */}
      <div className="hero place-content-start ">


      </div>


    </motion.div>


  </section>
)

export default AboutUs