import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Testimonial } from "@/components/Testimonial";
import { BigBrands } from "@/components/BigBrands";
import { Bausteine } from "@/components/Bausteine";
import { Voices } from "@/components/Voices";
import { FAQ } from "@/components/FAQ";
import { LeadCTA } from "@/components/LeadCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Testimonial />
      <BigBrands />
      <Bausteine />
      <Voices />
      <FAQ />
      <LeadCTA />
      <Footer />
    </>
  );
}
