import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import HowItWorks from "@/app/components/HowItWorks";
import Marketplace from "@/app/components/MarketPlace";
import Footer from "@/app/components/Footer";
import WhyBetter from "./components/WhyBetter";
import ForTravelers from "./components/ForTravelers";
import Testimonials from "./components/Testimonials";
import MobileApp from "./components/MobileApp";
import CTA from "./components/CTA";
import TrustedBy from "./components/TrustedBy";
import TravelMarquee from "@/app/components/Travelmarquee";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedBy />
      <TravelMarquee />
      <HowItWorks />
      <Marketplace />
      <WhyBetter />
      <ForTravelers />
      <Testimonials />
      <MobileApp />
      <CTA />
      <Footer />
    </main>
  );
}
