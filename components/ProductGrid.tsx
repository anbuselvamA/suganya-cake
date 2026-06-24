"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ScrollReveal } from "./ScrollReveal";

const products = [
  { name: "Mango Cake", price: "₹650.00", reviews: 23, img: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=400&fit=crop" },
  { name: "Strawberry Cake", price: "₹650.00", reviews: 23, img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop" },
  { name: "Chocolate Cake", price: "₹650.00", reviews: 23, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop" },
  { name: "Vanilla Cake", price: "₹650.00", reviews: 23, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop" },
];

export default function ProductGrid() {
  const router = useRouter();

  return (
    <div className="pt-12 pb-4 bg-white flex flex-col items-center">
      <ScrollReveal direction="up">
        <h2 className="text-3xl font-bold text-[#5D3F2E] mb-10">Top Trending Taste</h2>
      </ScrollReveal>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-4">
        {products.map((product, idx) => (
          <ScrollReveal direction="up" delay={idx * 0.1} key={idx} className="h-full">
            <div className="bg-white md:bg-[#f8f8f8] rounded-xl p-3 md:p-4 flex flex-col relative pb-14 md:pb-16 shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md h-full">
              <div className="w-full h-32 md:h-48 flex justify-center items-center overflow-hidden mb-3 md:mb-4 rounded-md">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover mix-blend-multiply drop-shadow-md rounded-md" />
              </div>
              
              <div className="flex flex-col items-start md:items-center text-left md:text-center px-1 md:px-2">
                <h3 className="text-[#5D3F2E] font-bold text-xs md:text-sm mb-1 leading-tight line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-1 hidden md:flex">
                   <div className="flex">
                     {[...Array(5)].map((_, i) => (
                       <span key={i} className="text-[#FF8C00] text-[10px] md:text-xs">★</span>
                     ))}
                   </div>
                   <span className="text-gray-500 text-[10px] md:text-xs ml-1">{product.reviews} Reviews</span>
                </div>
              </div>
              
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex justify-between items-center mt-2 md:mt-4 border-t border-gray-100 md:border-gray-200 pt-2 md:pt-3">
                <span className="font-bold text-[#3E2723] text-sm md:text-base">{product.price}</span>
                <button 
                  onClick={() => router.push(`/order?cake=${encodeURIComponent(product.name)}&image=${encodeURIComponent(product.img)}`)}
                  className="bg-black hover:bg-gray-800 md:bg-pink-500 md:hover:bg-pink-600 text-white p-1.5 md:p-1.5 rounded-full flex items-center justify-center transition-colors shadow-sm"
                >
                  <Plus size={14} strokeWidth={3} className="md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
