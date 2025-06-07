
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Briefcase, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          InternConnect Platform
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Fostering targeted and meaningful connections between students, faculty, and companies through campus innovation
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-white border-2 border-black shadow-3d hover:shadow-3d-hover transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-3d">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">For Students</h3>
            <p className="text-gray-600 mb-4">Showcase projects, discover opportunities, and build meaningful campus connections</p>
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="border-2 border-internconnect-800 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent hover:bg-internconnect-800 hover:text-black btn-3d">
                Explore Projects
              </Button>
            </Link>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white border-2 border-black shadow-3d hover:shadow-3d-hover transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-3d">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">For Faculty</h3>
            <p className="text-gray-600 mb-4">Verify student projects, mentor initiatives, and propose new collaboration opportunities</p>
            <Link to="/auth">
              <Button variant="outline" size="sm" className="border-2 border-internconnect-800 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent hover:bg-internconnect-800 hover:text-black btn-3d">
                Faculty Login
              </Button>
            </Link>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white border-2 border-black shadow-3d hover:shadow-3d-hover transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-3d">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">For Companies</h3>
            <p className="text-gray-600 mb-4">Access campus talent, post targeted opportunities, and build recruitment pipelines</p>
            <Link to="/opportunities">
              <Button variant="outline" size="sm" className="border-2 border-internconnect-800 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent hover:bg-internconnect-800 hover:text-black btn-3d">
                View Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
