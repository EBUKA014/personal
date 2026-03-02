import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Servicessection";
import WhyChooseMe from "../components/WhyChooseMe";
import PricingPreview from "../components/PricingPreview";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseMe />
        <PricingPreview />
         <ContactSection />   
      </main>
      <Footer />
    </div>
  );
}
