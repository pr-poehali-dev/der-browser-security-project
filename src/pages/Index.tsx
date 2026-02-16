import HeroSection from "@/components/HeroSection";
import SecuritySection from "@/components/SecuritySection";
import VpnSection from "@/components/VpnSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <HeroSection />
      <SecuritySection />
      <VpnSection />
      <Footer />
    </div>
  );
};

export default Index;
