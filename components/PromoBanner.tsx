export default function PromoBanner() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-0 my-8 md:my-12 relative overflow-hidden rounded-xl">
      <div className="flex flex-col md:flex-row bg-[#3E2723] h-auto md:h-32 rounded-xl relative overflow-hidden">
        {/* Yellow Left Section */}
        <div className="bg-[#FFCC00] w-full md:w-5/12 h-56 md:h-full flex flex-col justify-center items-start md:items-center z-10 pl-6 md:pl-0 pt-4 md:pt-0" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0% 100%)' }}
             className="hidden md:flex bg-[#FFCC00] md:w-5/12 h-full flex-col justify-center items-center z-10 relative">
          <h3 className="text-xl md:text-2xl font-bold text-[#3E2723] uppercase tracking-wider mb-1 flex items-center gap-2">
            Get <span className="text-3xl md:text-5xl font-black">50%</span> <span className="text-xl md:text-2xl">Offer</span>
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-[#3E2723] uppercase tracking-widest mt-1 mr-8">Sale</h2>
        </div>

        {/* Mobile specific left background (Yellow overlay) */}
        <div className="md:hidden absolute inset-0 bg-[#FFCC00] z-0" style={{ clipPath: 'polygon(0 0, 70% 0, 50% 100%, 0% 100%)' }}></div>

        {/* Mobile Content Wrapper */}
        <div className="md:hidden flex flex-row w-full h-56 relative z-10">
          <div className="w-1/2 flex flex-col justify-center pl-4 sm:pl-6 pt-2">
            <h3 className="text-base font-bold text-[#3E2723] uppercase tracking-wider mb-1">GET</h3>
            <div className="flex flex-col leading-none mb-1">
              <span className="text-4xl sm:text-5xl font-black text-[#3E2723]">50%</span>
              <span className="text-base sm:text-lg font-bold text-[#3E2723]">OFFER</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#3E2723] uppercase tracking-wider mt-1">SALE</h2>
          </div>
          
          <div className="w-1/2 flex flex-col justify-between items-end pr-4 py-6">
            <div className="flex flex-col items-end">
              <span className="text-[#FFCC00] text-sm mb-1">Coupon code:</span>
              <div className="border border-dashed border-[#FFCC00] px-3 py-1.5 rounded text-white font-bold tracking-wider text-base">
                Cupcake_24
              </div>
            </div>
            
            <div className="flex gap-[-10px] relative -mb-2">
              <div className="w-14 h-14 rounded-full bg-pink-400 border-2 border-white shadow-lg overflow-hidden relative z-10 translate-x-4">
                 <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=100&h=100&fit=crop" className="w-full h-full object-cover"/>
              </div>
              <div className="w-14 h-14 rounded-full bg-pink-400 border-2 border-white shadow-lg overflow-hidden relative z-20 -mt-2">
                 <img src="https://images.unsplash.com/photo-1587668178277-295251f900ce?w=100&h=100&fit=crop" className="w-full h-full object-cover"/>
              </div>
              <div className="w-14 h-14 rounded-full bg-pink-400 border-2 border-white shadow-lg overflow-hidden relative z-10 -translate-x-4">
                 <img src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=100&h=100&fit=crop" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Brown Right Section */}
        <div className="hidden md:flex flex-1 justify-between items-center px-8 relative bg-[#3E2723] -ml-16 pl-24 z-10">
           <div className="flex flex-col z-10">
             <span className="text-[#FFCC00] text-base mb-1">Coupon code:</span>
             <div className="bg-[#4a2e1d] border border-[#5a3a25] px-6 py-2 rounded text-white font-bold tracking-wider text-lg">
               Cupcake_24
             </div>
           </div>
           
           <div className="flex gap-2 relative z-10 pr-8">
             <div className="w-16 h-16 rounded-full bg-pink-400 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=100&h=100&fit=crop" className="w-full h-full object-cover"/>
             </div>
             <div className="w-16 h-16 rounded-full bg-pink-400 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center -mt-4">
                <img src="https://images.unsplash.com/photo-1587668178277-295251f900ce?w=100&h=100&fit=crop" className="w-full h-full object-cover"/>
             </div>
             <div className="w-16 h-16 rounded-full bg-pink-400 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=100&h=100&fit=crop" className="w-full h-full object-cover"/>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
