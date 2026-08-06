import Benefits from "@/components/Benefits";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeFAQ from "@/components/HomeFAQ";
import HomeTestimonials from "@/components/HomeTestimonials";
import PageAtmosphere from "@/components/PageAtmosphere";
import WhyChooseMe from "@/components/WhyChooseMe";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#ececea] text-black">
      <PageAtmosphere />
      <div className="relative z-10">
        <Hero />
        <Benefits />
        <WhyChooseMe />
        <Expertise />
        <HomeTestimonials />
        <HomeFAQ />
        <Footer />
      </div>
    </main>
  );
}
