import { Truck, Award, ShieldCheck, Heart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function FeaturesBanner() {
  return (
    <ScrollReveal direction="up" className="w-full max-w-6xl mx-auto px-4 md:hidden mb-8 -mt-6 relative z-10">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-row items-center py-2 px-1 divide-x divide-gray-100 w-full overflow-x-auto snap-x no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        <div className="flex items-center gap-2 py-1 px-4 min-w-[170px] snap-start shrink-0 justify-start">
          <div className="w-10 h-10 rounded-full bg-[#F5E6D3] flex items-center justify-center text-[#5D3F2E] shrink-0">
            <Truck size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#3E2723] leading-tight">Free Delivery</span>
            <span className="text-[10px] text-gray-500 leading-tight">On orders above ₹499</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 py-1 px-4 min-w-[170px] snap-start shrink-0 justify-start">
          <div className="w-10 h-10 rounded-full bg-[#F5E6D3] flex items-center justify-center text-[#5D3F2E] shrink-0">
            <Award size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#3E2723] leading-tight">Premium Quality</span>
            <span className="text-[10px] text-gray-500 leading-tight">Made with love</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 py-1 px-4 min-w-[170px] snap-start shrink-0 justify-start">
          <div className="w-10 h-10 rounded-full bg-[#F5E6D3] flex items-center justify-center text-[#5D3F2E] shrink-0">
            <ShieldCheck size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#3E2723] leading-tight">Secure Payment</span>
            <span className="text-[10px] text-gray-500 leading-tight">100% Safe & Secure</span>
          </div>
        </div>

        <div className="flex items-center gap-2 py-1 px-4 min-w-[170px] snap-start shrink-0 justify-start">
          <div className="w-10 h-10 rounded-full bg-[#F5E6D3] flex items-center justify-center text-[#5D3F2E] shrink-0">
            <Heart size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#3E2723] leading-tight">Satisfaction</span>
            <span className="text-[10px] text-gray-500 leading-tight">100% Guaranteed</span>
          </div>
        </div>

      </div>
    </ScrollReveal>
  );
}
