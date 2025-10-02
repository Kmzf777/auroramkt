"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden bg-black">
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 8, times: [0, 0.125, 0.9875, 0.99875] }}
        autoPlay
        muted
        playsInline
        src="/hero_section_video.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 7.99 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold uppercase font-[family-name:var(--font-audiowide)] tracking-tight">
          AURORA MARKETING
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-green-300 font-[family-name:var(--font-poppins)]">
          Desperte o potencial do seu negócio.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;