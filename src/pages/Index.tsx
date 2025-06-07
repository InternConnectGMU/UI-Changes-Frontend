
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import ProjectsPreview from "@/components/ProjectsPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      <HeroSection />
      <FeatureCards />
      <ProjectsPreview />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-3d">
            Ready to connect and collaborate?
          </h2>
          <p className="text-xl text-internconnect-100 mb-8 max-w-2xl mx-auto">
            Join InternConnect's campus innovation ecosystem today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="btn-3d bg-white from-blue-600 to-green-600 bg-clip-text text-transparent hover:text-black hover:bg-gray-100 border-2 border-internconnect-800">
                Get Started
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="btn-3d from-blue-600 to-green-600 bg-clip-text text-transparent border-2 border-internconnect-800 hover:bg-white hover:text-black">
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
