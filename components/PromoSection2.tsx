export default function PromoSection2() {
  return (
    <div className="w-full bg-[#1A0B08] pt-16 pb-0 md:py-16 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Content Left */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-4 z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-pink-500">Celebrate</span> <span className="text-[#FF8C00]">Every Moment</span><br className="hidden md:block"/>
          <span className="text-pink-500"> with</span> <span className="text-[#FF8C00]">Our Cakes</span>
        </h2>
        <p className="text-gray-300 text-lg mt-2 mb-4">
          From birthdays to weddings,<br className="hidden md:block"/>
          we make every moment sweeter.
        </p>
        <button className="bg-[#FF6A00] hover:bg-[#FF8C00] text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg">
          Order Now
        </button>
      </div>

      {/* Image Right */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative z-0">
        <div className="w-[140%] sm:w-[100%] md:w-[120%] -mb-12 md:mb-0 md:absolute md:-right-40 md:-top-32 pointer-events-none">
           {/* Dark chocolate cake image */}
           <img 
             src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&auto=format&fit=crop&q=80" 
             alt="Chocolate Cake" 
             className="w-full h-auto object-cover mix-blend-lighten opacity-90 drop-shadow-2xl mask-image-gradient"
             style={{ WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 80%)' }}
           />
        </div>
      </div>
    </div>
  );
}
