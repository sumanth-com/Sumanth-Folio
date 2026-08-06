import Footer from "@/components/Footer";
import SectionShell from "@/components/SectionShell";
import Testimonials from "@/components/Testimonials";
import TestimonialsHero from "@/components/TestimonialsHero";

export default function TestimonialsPage() {
  return (
    <SectionShell>
      <TestimonialsHero />
      <Testimonials />
      <Footer />
    </SectionShell>
  );
}
