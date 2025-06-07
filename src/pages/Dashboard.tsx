
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Users, BookOpen, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const projects = [
    {
      title: "AI-Powered Campus Navigation",
      description: "Mobile app using machine learning to provide real-time navigation and crowd density information across campus buildings and outdoor areas.",
      category: "Computer Science",
      status: "In Progress",
      students: ["Alice Johnson", "Bob Smith", "Carol Davis", "David Wilson"],
      verified: true,
      faculty: "Dr. Sarah Chen",
      technologies: ["React Native", "TensorFlow", "Python", "Firebase"]
    },
    {
      title: "Sustainable Energy Dashboard",
      description: "IoT-based system monitoring energy consumption across university buildings with predictive analytics and recommendations for optimization.",
      category: "Engineering",
      status: "Completed",
      students: ["Emma Brown", "Frank Miller", "Grace Lee"],
      verified: true,
      faculty: "Prof. Michael Rodriguez",
      technologies: ["IoT", "Python", "React", "MongoDB"]
    },
    {
      title: "Student Mental Health Platform",
      description: "Anonymous peer support network with AI-driven resource recommendations, mood tracking, and crisis intervention features.",
      category: "Psychology",
      status: "In Progress",
      students: ["Henry Taylor", "Iris Wang", "Jack Anderson", "Kate Martinez", "Liam Thompson"],
      verified: false,
      faculty: "Dr. Jennifer Adams",
      technologies: ["Node.js", "React", "PostgreSQL", "Socket.io"]
    },
    {
      title: "Virtual Reality Chemistry Lab",
      description: "Immersive VR environment for conducting chemistry experiments safely, with realistic simulations and interactive molecular models.",
      category: "Chemistry",
      status: "In Progress",
      students: ["Maya Patel", "Noah Garcia"],
      verified: true,
      faculty: "Dr. Lisa Thompson",
      technologies: ["Unity", "C#", "Oculus SDK", "WebVR"]
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting platform for student government elections using blockchain technology and smart contracts.",
      category: "Computer Science",
      status: "Completed",
      students: ["Oliver Clark", "Penny Wilson", "Quinn Roberts", "Ruby Jackson"],
      verified: true,
      faculty: "Prof. James Kim",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"]
    },
    {
      title: "Campus Food Waste Tracker",
      description: "Data analytics platform tracking food waste across dining halls with predictive modeling to reduce waste and optimize ordering.",
      category: "Environmental Science",
      status: "In Progress",
      students: ["Sam Mitchell", "Tina Chang", "Uma Sharma"],
      verified: false,
      faculty: "Dr. Robert Green",
      technologies: ["Python", "D3.js", "SQLite", "Machine Learning"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Project Dashboard
            </h1>
            <p className="text-gray-600">Discover ongoing academic and tech initiatives across the university</p>
          </div>
          <Link to="/submit-project">
            <Button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-green-600 hover:bg-internconnect-700 text-white btn-3d border-2 border-internconnect-800">
              <Plus className="w-4 h-4 mr-2" />
              Submit Project
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input placeholder="Search projects..." className="md:max-w-xs border-2 border-gray-300 shadow-3d" />
          <Select>
            <SelectTrigger className="md:max-w-xs border-2 border-gray-300 shadow-3d">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="psychology">Psychology</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="environmental">Environmental Science</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="md:max-w-xs border-2 border-gray-300 shadow-3d">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white border-2 border-black shadow-3d hover:shadow-3d-hover transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}
                         className={project.status === "Completed" ? "bg-gradient-to-r from-blue-600 to-green-600 text-white" : "bg-gray-200 text-gray-800"}>
                    {project.status}
                  </Badge>
                  {project.verified && (
                    <Badge variant="outline" className="text-green-600 border-green-600 border-2">
                      <span>✅ Verified</span>
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">{project.title}</CardTitle>
                <CardDescription className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-medium">
                  {project.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{project.students.length} students</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">Faculty:</span>
                    <span className="text-gray-600 ml-1">{project.faculty}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-2 border-internconnect-800 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-2 border-internconnect-800 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button variant="outline" className="w-full border-2 border-internconnect-800 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent hover:bg-internconnect-800 hover:text-black btn-3d" size="sm">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
