import React from 'react'
import { motion } from "framer-motion";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const Signup = () => {
  return (
    <section>

      <div className="hero min-h-screen bg-[#f8f8fd]">
        <motion.div
          variants={animationConfiguration}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 3 }}
        >
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className=" text-[3.125rem] leading-[3.4375rem] font-bold uppercase text-[#25324B]">SIGN UP</h1>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default Signup