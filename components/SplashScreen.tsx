"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#E2D8CD] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle shadow overlay for the "window blinds" effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.3) 50%, transparent 55%), linear-gradient(135deg, transparent 60%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.3) 70%, transparent 75%)'
          }}></div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-[#5D4037] z-10 relative"
          >
            {/* Logo Icon Mockup */}
            <div className="relative flex items-center justify-center mb-6 w-24 h-24">
               {/* S and C interlocking text */}
               <span className="text-6xl absolute -translate-x-3 -translate-y-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>S</span>
               <span className="text-6xl absolute translate-x-3 translate-y-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>C</span>
               {/* Cake icon on top */}
               <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" className="absolute -top-4 left-1/2 -translate-x-1/2">
                 <path d="M12 2v2m-4 4h8a4 4 0 0 1 4 4v2H4v-2a4 4 0 0 1 4-4zm-6 6h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z" />
                 <circle cx="12" cy="5" r="1" fill="currentColor" />
               </svg>
            </div>

            <h1 className="text-3xl md:text-4xl tracking-[0.2em] mb-4 text-[#4A3226]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              SUGANYA CAKES
            </h1>

            <div className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-[#6D4C41] mb-3">
              <span className="w-8 h-[1px] bg-[#6D4C41] opacity-50"></span>
              <span>Baked with Love ♡</span>
              <span className="w-8 h-[1px] bg-[#6D4C41] opacity-50"></span>
            </div>

            <span className="text-[10px] tracking-[0.2em] text-[#6D4C41] opacity-70 mb-4 uppercase">Est. 2024</span>

            <div className="flex items-center gap-1 opacity-60">
              <span className="w-6 h-[1px] bg-[#6D4C41]"></span>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="1" fill="none">
                <path d="M12 4v16m-4-4h8m-8-8h8" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              <span className="w-6 h-[1px] bg-[#6D4C41]"></span>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
