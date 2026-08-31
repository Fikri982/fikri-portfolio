import Navbar from "@/app/components/layout/Navbar";
import HeroSection from "@/app/components/home/HeroSection";
import ProjectsSection from "@/app/components/home/ProjectsSection";
import TestimonialsSection from "@/app/components/home/TestimonialsSection";
import ContactSection from "@/app/components/home/ContactSection";
import Footer from "@/app/components/layout/Footer";
import HomeLoader from "@/app/components/home/HomeLoader";

export default function Home() {
  return (
    <>
      <HomeLoader />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
