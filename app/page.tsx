import Navbar from "@/app/components/layout/Navbar";
import HeroSection from "@/app/components/home/HeroSection";
import AboutTeaserSection from "@/app/components/home/AboutTeaserSection";
import ProjectsSection from "@/app/components/home/ProjectsSection";
// import TestimonialsSection from "@/app/components/home/TestimonialsSection";
import StatsSection from "@/app/components/home/StatsSection";
import ContactSection from "@/app/components/home/ContactSection";
import Footer from "@/app/components/layout/Footer";
import HomeLoader from "@/app/components/home/HomeLoader";

export default function Home() {
  return (
    <>
      <HomeLoader />
      <Navbar />
      <HeroSection />
      <AboutTeaserSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <StatsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
