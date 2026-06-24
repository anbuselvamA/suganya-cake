"use client";
import { Quote } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export default function Testimonials() {
  const [reviews, setReviews] = useState<{name: string, text: string, img: string}[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview = {
      name,
      text,
      // Just a placeholder image or an icon for new users
      img: "https://ui-avatars.com/api/?name=" + encodeURIComponent(name) + "&background=random",
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setText("");
  };

  return (
    <div className="py-16 bg-[#fafafa] flex flex-col items-center">
      <ScrollReveal direction="up" className="flex flex-col items-center">
        <div className="flex gap-1 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-200"></div>
        </div>
        
        <h2 className="text-3xl font-bold text-[#5D3F2E] mb-12">Customer Reviews</h2>
      </ScrollReveal>

      {/* Write a Review Form */}
      <div className="w-full max-w-2xl px-4 mb-16">
        <ScrollReveal direction="up">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-100">
          <h3 className="text-xl font-bold text-[#5D3F2E] mb-4">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What did you think about our cakes?"
                rows={3}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 resize-none"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2.5 px-6 rounded-lg transition-colors self-start"
            >
              Submit Review
            </button>
          </form>
        </div>
        </ScrollReveal>
      </div>

      {/* Display Reviews */}
      <div className="w-full max-w-6xl px-4">
        {reviews.length === 0 ? (
          <div className="text-center text-gray-500 py-8 bg-white rounded-xl border border-dashed border-gray-300">
            No reviews yet. Be the first to share your experience!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((test, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.1} key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col h-full">
                <Quote className="text-pink-500 mb-4" size={32} fill="currentColor" />
                <p className="text-[#3E2723] text-sm font-medium mb-8 leading-relaxed flex-1">
                  {test.text}
                </p>
                
                <div className="flex items-center gap-4">
                  <img src={test.img} alt={test.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-100" />
                  <div className="flex flex-col">
                    <span className="text-[#3E2723] font-bold text-sm">- {test.name}</span>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#FF8C00] text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
