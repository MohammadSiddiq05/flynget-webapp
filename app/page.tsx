import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import HowItWorks from "@/app/components/HowItWorks";
import Marketplace from "@/app/components/MarketPlace";
import RequestProduct from "@/app/components/RequestProduct";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
        <Header/>
        <Hero/>
        <HowItWorks/>
        <Marketplace/>
        <RequestProduct/>
        <Testimonials/>
        <Footer/>
    </main>
  );
}