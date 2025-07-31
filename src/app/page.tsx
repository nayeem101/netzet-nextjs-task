import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import PromoBar from "@/components/PromoBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PromoBar />
      <Header />
      <HeroSection />
    </div>
  );
}
