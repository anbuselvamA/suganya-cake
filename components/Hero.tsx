"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const cakeImages = [
  "/images/hero_cake_1.png",
  "/images/hero_cake_2.png",
  "/images/hero_cake_3.png",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cakeImages.length);
    }, 2000); // 2 seconds swipe
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#111111] text-white flex flex-col md:flex-row items-center justify-between px-8 py-16 md:px-24 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Cake Image Left */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 relative min-h-[400px]">
        {/* Glow effect removed as requested */}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
          >
            <img 
              src={cakeImages[currentIndex]} 
              alt="Delicious Cake" 
              className="w-[120%] h-[120%] object-contain mix-blend-screen drop-shadow-2xl max-w-none ml-[-10%] mt-[-10%]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Right */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-4 z-20">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex items-center gap-3 mb-2 opacity-80">
            <span className="w-10 h-[1px] bg-pink-500"></span>
            <span className="text-pink-400 uppercase tracking-[0.2em] text-xs font-bold">Premium Bakery</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-normal text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Delicious Cakes <br />
            <span className="italic opacity-90 block mt-1" style={{ color: '#E8D3C3' }}>for Every Occasion</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-sm mt-2 mb-6">
            Freshly baked, handcrafted cakes for your most special moments.
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.4}>
          <button 
            onClick={() => document.getElementById('favorites')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 bg-white hover:bg-gray-100 text-[#5D3F2E] py-3.5 px-8 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(255,255,255,0.2)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.3)] mt-2"
          >
            <span className="uppercase tracking-wider text-sm font-bold">Explore Collection</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollReveal>

        {/* Carousel indicators */}
        <ScrollReveal direction="up" delay={0.5} className="flex gap-2 mt-12 self-center md:self-start">
          {cakeImages.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-pink-500' : 'bg-gray-600'}`}
            ></div>
          ))}
        </ScrollReveal>
      </div>
    </div>
  );
}
