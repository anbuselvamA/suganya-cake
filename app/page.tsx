import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSlider from "@/components/ProductSlider";
import PromoBanner from "@/components/PromoBanner";
import FeaturesBanner from "@/components/FeaturesBanner";
import ProductGrid from "@/components/ProductGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import PromoSection2 from "@/components/PromoSection2";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <Hero />
      <ProductSlider />
      <FeaturesBanner />
      <ProductGrid />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
