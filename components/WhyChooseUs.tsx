import { ShoppingBag, Paintbrush, Truck, Heart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShoppingBag className="text-pink-500 w-5 h-5 md:w-6 md:h-6" />,
      title: "Fresh Ingredients",
      desc: "Finest quality guaranteed."
    },
    {
      icon: <Paintbrush className="text-pink-500 w-5 h-5 md:w-6 md:h-6" />,
      title: "Custom Designs",
      desc: "Tailored to your dreams."
    },
    {
      icon: <Truck className="text-pink-500 w-5 h-5 md:w-6 md:h-6" />,
      title: "On-Time Delivery",
      desc: "Punctual & reliable."
    },
    {
      icon: <Heart className="text-pink-500 w-5 h-5 md:w-6 md:h-6" />,
      title: "100% Satisfaction",
      desc: "Happiness guaranteed."
    }
  ];

  return (
    <div className="pt-8 pb-16 bg-white flex flex-col items-center">
      <ScrollReveal direction="up" className="flex flex-col items-center">
        <div className="flex gap-1 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-200"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-200"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-[#5D3F2E] mb-10 md:mb-12">Why Choose Us</h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8 md:gap-x-24 md:gap-y-12 max-w-4xl px-4 w-full">
        {features.map((feature, idx) => (
          <ScrollReveal direction="up" delay={idx * 0.1} key={idx} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
              {feature.icon}
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[13px] md:text-lg font-bold text-[#3E2723] mb-1 leading-tight">{feature.title}</h3>
              <p className="text-gray-500 text-[11px] md:text-sm leading-snug max-w-[120px] md:max-w-none">{feature.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
