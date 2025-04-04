export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-br from-blue-500 to-purple-500">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <HeroSection />
        
        {/* Section divider - creates visual separation */}
        <div className="hidden md:block h-24"></div>
        
        <AboutSection />
        
        {/* Section divider - creates visual separation */}
        <div className="hidden md:block h-24"></div>
        
        <ProjectsSection />
        
        {/* Section divider - creates visual separation */}
        <div className="hidden md:block h-24"></div>
        
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}