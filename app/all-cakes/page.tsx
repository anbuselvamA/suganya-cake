import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AllCakes from "@/components/AllCakes";
import { Suspense } from "react";

export default function AllCakesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <div className="pt-10">
        <Suspense fallback={<div className="py-24 text-center">Loading cakes...</div>}>
          <AllCakes />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
