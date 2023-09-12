import React, { useState } from "react";
import { motion } from "framer-motion";


const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const Details = () => {

  return (
    <section className="">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >
        <div
          className="hero laptop:min-h-[screen] min-h-screen bg-center bg-contain">
          {/* style={{ backgroundImage: `url(${HeaderBg})` }} */}


        </div>



      </motion.div>
    </section>
  )
}

export default Details