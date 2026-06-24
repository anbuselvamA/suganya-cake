"use client";
import { MapPin, Phone, Mail, Heart } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import { SCLogo } from "./SCLogo";

export default function Footer() {
  return (
    <footer className="bg-[#2A0808] text-white pt-16 pb-6">
      {/* Columns */}
      <div className="flex flex-col md:grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-8 mb-12">
        {/* Logo Col */}
        <ScrollReveal direction="up" delay={0.1} className="flex flex-col mb-4 md:mb-0">
          <Link href="/" className="flex items-center gap-3 select-none cursor-pointer mb-4">
            <SCLogo className="w-12 h-12 md:w-16 md:h-16 text-[14px] md:text-[20px] bg-white rounded-full p-1" />
            <div className="flex flex-col items-start">
              <div className="text-4xl font-normal tracking-normal flex items-center">
                <span className="text-white" style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>Suganya</span>
                <span className="text-pink-500 ml-2" style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>Cakes</span>
              </div>
            </div>
          </Link>
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
            Delicious cakes for every celebration. Made with love and the finest ingredients.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:contents">
          {/* Quick Links */}
          <ScrollReveal direction="up" delay={0.2} className="flex flex-col">
            <h4 className="text-pink-500 font-bold mb-4 md:mb-6 text-xs sm:text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2 md:gap-3 text-[11px] sm:text-xs text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/all-cakes" className="hover:text-white transition-colors">Shop</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
              <Link href="#" className="hover:text-white transition-colors">About Us</Link>
            </div>
          </ScrollReveal>

          {/* Customer Service */}
          <ScrollReveal direction="up" delay={0.3} className="flex flex-col">
            <h4 className="text-pink-500 font-bold mb-4 md:mb-6 text-xs sm:text-sm">Customer Service</h4>
            <div className="flex flex-col gap-2 md:gap-3 text-[11px] sm:text-xs text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
              <a href="#" className="hover:text-white transition-colors">Delivery Info</a>
              <a href="#" className="hover:text-white transition-colors">Returns</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Cond</a>
            </div>
          </ScrollReveal>

          {/* Contact Us */}
          <ScrollReveal direction="up" delay={0.4} className="flex flex-col">
            <h4 className="text-pink-500 font-bold mb-4 md:mb-6 text-xs sm:text-sm">Contact Us</h4>
            <div className="flex flex-col gap-2 md:gap-4 text-[11px] sm:text-xs text-gray-300">
              <div className="flex items-start gap-1.5 sm:gap-3">
                <Phone size={12} className="text-pink-500 mt-0.5 shrink-0 sm:w-[14px] sm:h-[14px]" fill="currentColor" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-1.5 sm:gap-3 break-all sm:break-normal">
                <Mail size={12} className="text-pink-500 mt-0.5 shrink-0 sm:w-[14px] sm:h-[14px]" />
                <span>info@cake.com</span>
              </div>
              <div className="flex items-start gap-1.5 sm:gap-3">
                <MapPin size={12} className="text-pink-500 mt-0.5 shrink-0 sm:w-[14px] sm:h-[14px]" />
                <span>Chennai, India</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="w-full h-px bg-[#4A1515] mb-6"></div>

      {/* Bottom */}
      <ScrollReveal direction="up" delay={0.5} className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-8 text-[10px] text-gray-400">
        <p>© 2024 CakeGallery. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center gap-1">
          Designed with <Heart size={10} className="text-red-500 fill-current" /> for cake lovers
        </p>
      </ScrollReveal>
    </footer>
  );
}
