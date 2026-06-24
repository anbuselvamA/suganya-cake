import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const favorites = [
  { name: "Homemade Plum Cake", img: "/images/plum_cake.png" },
  { name: "Homemade Banana Cake", img: "/images/banana_cake.png" },
  { name: "Homemade Carrot Cake", img: "/images/carrot_cake.png" },
  { name: "Homemade Marble Cake", img: "/images/marble_cake.png" },
  { name: "Vanilla Sponge", img: "/images/vanilla_sponge.png" },
  { name: "Dates & Nut Cake", img: "/images/dates_nut_cake.png" },
  { name: "Coffee Cake", img: "/images/coffee_cake.png" },
  { name: "Red Velvet Cake", img: "/images/red_velvet.png" },
  { name: "Butter Cake", img: "/images/butter_cake.png" },
  { name: "Chocolate Brownie", img: "/images/chocolate_brownie.png" },
];

export default function ProductSlider() {
  return (
    <div id="favorites" className="py-12 bg-white flex flex-col items-center relative overflow-hidden">
      <ScrollReveal direction="up" className="w-full max-w-6xl px-4 md:px-8 flex flex-col items-center relative mb-6 md:mb-8 gap-3 md:gap-0">
        <h2 className="text-2xl md:text-3xl font-bold text-[#5D3F2E] text-center">Pick Your Favorites</h2>
        <Link href="/all-cakes" className="md:absolute md:right-8 text-xs md:text-sm font-bold text-pink-500 hover:text-pink-600 transition-colors uppercase tracking-wider flex items-center gap-1">
          VIEW ALL <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
        </Link>
      </ScrollReveal>

      <div className="w-full max-w-6xl px-4 md:px-8 relative group">
        <div className="grid grid-cols-2 gap-4 md:flex md:w-full md:overflow-x-auto md:gap-6 md:pb-4 md:snap-x no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {favorites.map((fav, idx) => (
            <ScrollReveal direction="up" delay={idx * 0.1} key={idx}>
              <Link href={`/all-cakes?category=${encodeURIComponent(fav.name)}`} className="bg-white md:bg-gray-50 rounded-xl p-4 md:min-w-[160px] md:max-w-[160px] flex flex-col items-center md:snap-center md:shrink-0 hover:shadow-md transition-all shadow-sm border border-gray-100 md:border-none cursor-pointer h-full">
                <div className="w-24 h-24 md:w-32 md:h-32 mb-4 overflow-hidden rounded-full flex justify-center items-center shadow-sm border-[3px] border-white drop-shadow-sm">
                  <img src={fav.img} alt={fav.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-[#5D3F2E] font-medium text-sm md:text-sm text-center leading-tight">
                  {fav.name}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        <button className="absolute right-0 bg-white p-2 rounded-full shadow-md text-[#5D3F2E] hover:text-pink-500 z-10 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
