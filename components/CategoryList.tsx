const categories = [
  { name: "Delicious Cakes", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop" },
  { name: "Cup Cakes", img: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=400&fit=crop" },
  { name: "Piece Cake", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=400&fit=crop" },
  { name: "Fondant Cake", img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop" },
  { name: "Customized Cake", img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop" }
];

export default function CategoryList() {
  return (
    <div className="py-12 flex flex-col items-center bg-white">
      <div className="flex gap-1 mb-4">
        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
        <div className="w-2 h-2 rounded-full bg-pink-200"></div>
        <div className="w-2 h-2 rounded-full bg-pink-200"></div>
      </div>
      
      <h2 className="text-3xl font-bold text-[#5D3F2E] mb-10">Select By Category</h2>
      
      <div className="flex flex-wrap justify-center gap-8 px-4 w-full max-w-6xl">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-[#5D3F2E] font-medium text-sm">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
