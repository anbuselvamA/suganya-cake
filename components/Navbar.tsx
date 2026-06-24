"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SCLogo } from "./SCLogo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm sticky top-0 z-50 min-h-[72px] relative">
      
      {/* Logo (Left on Desktop / Left & Center on Mobile) */}
      <div className="flex justify-start">
        <Link href="/" className="flex items-center select-none cursor-pointer">
          <SCLogo className="w-10 h-10 md:w-16 md:h-16 text-[12px] md:text-[20px] md:mr-2" />
          <div className="flex flex-col items-center mt-1 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-auto">
            <div className="text-3xl md:text-5xl tracking-normal font-normal flex items-center">
              <span className="text-[#4A2C2A]" style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>Suganya</span>
              <span className="text-pink-500 ml-1.5 md:ml-2" style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>Cakes</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Desktop Links & Icons (Right) */}
      <div className="flex items-center justify-end gap-6 text-[#5D3F2E] flex-1">
        <div className="hidden md:flex items-center gap-8 text-sm font-medium mr-2">
          <Link href="/" className={isActive("/") ? "text-pink-500 font-bold" : "hover:text-pink-500 transition-colors"}>Home</Link>
          <Link href="/all-cakes" className={isActive("/all-cakes") ? "text-pink-500 font-bold" : "hover:text-pink-500 transition-colors"}>Shop</Link>
          <Link href="#" className="hover:text-pink-500 transition-colors">About Us</Link>
          <Link href="#" className="hover:text-pink-500 transition-colors">Contact</Link>
        </div>

        <button className="md:hidden p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-2 text-[#5D3F2E] md:hidden z-50 border-t border-gray-100">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className={`block py-2 border-b border-gray-50 ${isActive("/") ? "text-pink-500 font-bold" : "font-medium"}`}>Home</Link>
          <Link href="/all-cakes" onClick={() => setIsMenuOpen(false)} className={`block py-2 border-b border-gray-50 ${isActive("/all-cakes") ? "text-pink-500 font-bold" : "font-medium"}`}>Shop</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-gray-50 font-medium">About Us</Link>
          <Link href="#" onClick={() => setIsMenuOpen(false)} className="block py-2 font-medium">Contact</Link>
        </div>
      )}
    </nav>
  );
}
