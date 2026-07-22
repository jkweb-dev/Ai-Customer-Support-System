import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AIShowcase from "@/components/landing/Image";
import Features from "@/components/landing/Feautures";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";


export default function Home(){

  return (

    <main>

      <Navbar />
    <Hero/>
    <AIShowcase/>
    <Features/>
    <HowItWorks/>
    <CTA/>
    <Footer/>

    </main>

  );

}