
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, BookOpen } from "lucide-react";

const ProjectsPreview = () => {
  const sampleProjects = [
    {
      title: "AI-Powered Campus Navigation",
      description: "Mobile app using machine learning to provide real-time navigation and crowd density information across campus",
      category: "Computer Science",
      status: "In Progress",
      students: 4,
      verified: true
    },
    {
      title: "Sustainable Energy Dashboard",
      description: "IoT-based system monitoring energy consumption across university buildings with predictive analytics",
      category: "Engineering",
      status: "Completed",
      students: 3,
      verified: true
    },
    {
      title: "Student Mental Health Platform",
      description: "Anonymous peer support network with AI-driven resource recommendations and mood tracking",
      category: "Psychology",
      status: "In Progress",
      students: 5,
      verified: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the innovative work happening across our university
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleProjects.map((project, index) => (
            <Card key={index} className="bg-white border-2 border-black shadow-3d hover:shadow-3d-hover transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"} 
                         className={project.status === "Completed" ? "bg-gradient-to-r from-blue-600 to-green-600 text-white" : "bg-gray-200 text-gray-800"}>
                    {project.status}
                  </Badge>
                  {project.verified && (
                    <Badge variant="outline" className="text-green-600 border-green-600 border-2">
                      ✅ Verified
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">{project.title}</CardTitle>
                <CardDescription className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-medium">
                  {project.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{project.students} students</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/dashboard">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:text-black hover:bg-internconnect-700 text-white btn-3d border-2 border-internconnect-800">
              <BookOpen className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
