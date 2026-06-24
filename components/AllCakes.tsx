"use client";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const filterCategories = [
  "All", 
  "Homemade Plum Cake", 
  "Homemade Banana Cake", 
  "Homemade Carrot Cake", 
  "Homemade Marble Cake", 
  "Vanilla Sponge", 
  "Dates & Nut Cake", 
  "Coffee Cake", 
  "Red Velvet Cake", 
  "Butter Cake", 
  "Chocolate Brownie"
];

const cakeImages = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1534432182912-63863115e106?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop",
];

const colors = ["Classic", "Dark", "Premium", "Special", "Delight"];

// Generate 5 products per category
const allProducts = filterCategories.filter(c => c !== "All").flatMap((category, catIdx) => {
  return Array.from({ length: 5 }).map((_, i) => ({
    name: `${colors[i]} ${category.replace('Homemade ', '')}`,
    category: category,
    price: `₹${(650 + i * 50).toFixed(2)}`,
    reviews: 15 + i * 12 + catIdx,
    img: cakeImages[(catIdx * 5 + i) % cakeImages.length]
  }));
});

export default function AllCakes() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (categoryParam && filterCategories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="py-12 bg-white flex flex-col items-center pb-24">
      {/* Three dots decoration */}
      <div className="flex gap-1 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-pink-200"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-pink-200"></div>
      </div>
      
      <h2 className="text-3xl font-bold text-[#5D3F2E] mb-6">All Cakes</h2>
      
      {/* Category Filters */}
      <div className="flex overflow-x-auto gap-3 mb-10 w-full max-w-6xl px-4 no-scrollbar pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {filterCategories.map((category, idx) => {
          const count = category === "All" 
            ? allProducts.length 
            : allProducts.filter(p => p.category === category).length;
            
          return (
            <button 
              key={idx}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category 
                  ? "bg-pink-500 text-white shadow-md" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>
      
      {/* Grid of Cakes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl px-4">
        {filteredProducts.map((product, idx) => (
          <div key={idx} className="bg-white md:bg-[#f8f8f8] rounded-xl p-3 md:p-4 flex flex-col relative pb-14 md:pb-16 shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md">
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
        ))}
      </div>
    </div>
  );
}
