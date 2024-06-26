import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ScrollArrows from "./components/ScrollArrows";

export default function Home() {
  return (
    // background-color here
    // <main className="flex min-h-screen flex-col bg-[#121212]">
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-blue-500 to-purple-500">
      <Navbar />
      <div className="container mx-auto px-12 py-4 justify-center" >
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        {/* <ScrollArrows /> */}
      </div>
      <Footer />
    </main>
  );
}
