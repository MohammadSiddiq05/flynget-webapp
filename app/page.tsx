import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import HowItWorks from "@/app/components/HowItWorks";
import Marketplace from "@/app/components/MarketPlace";
import RequestProduct from "@/app/components/RequestProduct";
import Footer from "@/app/components/Footer";
import WhyBetter from "./components/WhyBetter";
import ForTravelers from "./components/ForTravelers";
import Testimonials from "./components/Testimonials";
import MobileApp from "./components/MobileApp";
import CTA from "./components/CTA";
import TrustedBy from "./components/TrustedBy";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Marketplace />
      {/* <RequestProduct />  ye Exta hai Component */}
      <WhyBetter />
      <ForTravelers />
      <Testimonials />
      <MobileApp />
      <CTA />
      <Footer />
    </main>
  );
}
