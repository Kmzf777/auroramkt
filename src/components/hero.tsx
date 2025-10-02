"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden bg-black">
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 10, times: [0, 0.1, 0.8, 0.9] }}
        autoPlay
        muted
        playsInline
        src="/hero_section_video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1] }}
        transition={{ duration: 10, times: [0, 0.8, 0.9] }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Aurora Marketing
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-green-300">
          Desperte o potencial do seu negócio.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;