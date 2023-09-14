import React, { useState } from "react";
import { motion } from "framer-motion";


const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const Blog = () => {

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
          className="hero laptop:min-h-[screen] min-h-screen border bg-black bg-center bg-contain">
          {/* style={{ backgroundImage: `url(${HeaderBg})` }} */}
          <h1 className="text-white text-[3rem]">
            BLOG
          </h1>

        </div>



      </motion.div>
    </section>
  )
}

export default Blog