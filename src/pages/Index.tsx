
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <About />
      <Menu />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
