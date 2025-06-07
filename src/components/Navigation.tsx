
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Briefcase, BookOpen } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b-2 border-black shadow-3d sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/bef51f51-99ba-4cfc-85f3-e7e7e98b8987.png" 
              alt="InternConnect Logo" 
              className="w-8 h-8 object-contain shadow-3d rounded"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              InternConnect
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-2 text-black hover:text-black transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Projects</span>
            </Link>
            <Link to="/opportunities" className="flex items-center space-x-2 text-black hover:text-black transition-colors">
              <Briefcase className="w-4 h-4" />
              <span>Opportunities</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-2 text-black hover:text-black transition-colors">
              <Users className="w-4 h-4" />
              <span>Profile</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="outline" size="sm" className="border-2 border-internconnect-800 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent hover:bg-internconnect-800 hover:text-black btn-3d">
                Sign In
              </Button>
            </Link>
            <Link to="/submit-project">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600 hover:text-black text-white btn-3d border-2 border-internconnect-800">
                Submit Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
