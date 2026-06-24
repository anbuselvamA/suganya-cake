"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

function OrderForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cakeName: "",
    cakeImageUrl: "",
    weight: "1 Kg",
    message: "",
    deliveryDate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const cake = searchParams.get("cake");
    const image = searchParams.get("image");
    setFormData(prev => ({ 
      ...prev, 
      cakeName: cake || "",
      cakeImageUrl: image || ""
    }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Order placed successfully! The bakery has been notified via WhatsApp.");
        router.push('/');
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Order error:", error);
      alert("An error occurred while placing your order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <button 
        onClick={() => router.back()} 
        className="flex items-center gap-2 text-pink-500 font-medium mb-8 hover:text-pink-600 transition-colors"
      >
        <ArrowLeft size={16} /> Back
      </button>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-[#5D3F2E] mb-2">Place Your Order</h1>
        <p className="text-gray-500 mb-8">Fill in the details below and we will notify the bakery instantly.</p>
        
        {formData.cakeImageUrl && (
          <div className="mb-6 flex justify-center">
            <img 
              src={formData.cakeImageUrl} 
              alt={formData.cakeName} 
              className="w-32 h-32 object-cover rounded-xl shadow-sm border-2 border-pink-100" 
            />
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#5D3F2E] mb-2">Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#5D3F2E] mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#5D3F2E] mb-2">Cake Name</label>
            <input 
              type="text" 
              name="cakeName"
              value={formData.cakeName}
              onChange={handleChange}
              placeholder="e.g. Mango Cake"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 font-medium text-[#3E2723]"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#5D3F2E] mb-2">Weight / Size</label>
              <select 
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 bg-white"
              >
                <option value="0.5 Kg">0.5 Kg</option>
                <option value="1 Kg">1 Kg</option>
                <option value="1.5 Kg">1.5 Kg</option>
                <option value="2 Kg">2 Kg</option>
                <option value="3 Kg">3 Kg</option>
                <option value="Custom">Custom (Specify in message)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#5D3F2E] mb-2">Delivery Date</label>
              <input 
                type="date" 
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#5D3F2E] mb-2">Message on Cake (Optional)</label>
            <input 
              type="text" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Happy Birthday!"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full text-white font-bold py-4 rounded-xl transition-colors mt-4 text-lg shadow-sm ${
              isSubmitting ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            {isSubmitting ? "Placing Order..." : "Place Order"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={<div className="flex justify-center py-20 text-pink-500">Loading order form...</div>}>
          <OrderForm />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
