
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, Users, BookOpen, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";

const Opportunities = () => {
  const opportunities = [
    {
      title: "Frontend Developer Intern",
      company: "TechStart Inc.",
      type: "Internship",
      category: "Technology",
      description: "Join our team to work on cutting-edge web applications using React and TypeScript. Perfect for computer science students looking to gain real-world experience.",
      requirements: ["React", "JavaScript", "Git"],
      duration: "3 months",
      location: "Remote",
      postedBy: "company"
    },
    {
      title: "AI Research Assistant",
      company: "University AI Lab",
      type: "Research Project",
      category: "Research",
      description: "Assist in developing machine learning models for natural language processing. Great opportunity for students interested in AI and graduate school preparation.",
      requirements: ["Python", "Machine Learning", "Statistics"],
      duration: "6 months",
      location: "On Campus",
      postedBy: "faculty"
    },
    {
      title: "Data Science Bootcamp",
      company: "DataCorp Solutions",
      type: "Training Program",
      category: "Technology",
      description: "Intensive 8-week program covering data analysis, visualization, and machine learning. Includes mentorship and potential job placement.",
      requirements: ["Statistics", "Python", "SQL"],
      duration: "8 weeks",
      location: "Hybrid",
      postedBy: "company"
    },
    {
      title: "Sustainable Technology Project",
      company: "Green Innovation Lab",
      type: "Project",
      category: "Environmental",
      description: "Work on developing IoT solutions for campus sustainability initiatives. Collaborate with environmental science and engineering students.",
      requirements: ["IoT", "Arduino", "Environmental Science"],
      duration: "4 months",
      location: "On Campus",
      postedBy: "faculty"
    },
    {
      title: "UX/UI Design Internship",
      company: "Creative Agency Co.",
      type: "Internship",
      category: "Design",
      description: "Design user interfaces for mobile and web applications. Work with experienced designers and contribute to real client projects.",
      requirements: ["Figma", "Adobe Creative Suite", "User Research"],
      duration: "3 months",
      location: "On-site",
      postedBy: "company"
    },
    {
      title: "Cybersecurity Training Program",
      company: "SecureNet Systems",
      type: "Training Program",
      category: "Technology",
      description: "Comprehensive cybersecurity training with hands-on labs and certification preparation. Includes internship opportunity upon completion.",
      requirements: ["Networking", "Linux", "Security Fundamentals"],
      duration: "12 weeks",
      location: "Hybrid",
      postedBy: "company"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Opportunities Board
            </h1>
            <p className="text-gray-600">Discover internships, projects, and training programs from companies and faculty</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-green-600 hover:bg-internconnect-700 text-white btn-3d border-2 border-internconnect-800">
            <Plus className="w-4 h-4 mr-2" />
            Post Opportunity
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input placeholder="Search opportunities..." className="md:max-w-xs" />
          <Select>
            <SelectTrigger className="md:max-w-xs">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
              <SelectItem value="project">Project</SelectItem>
              <SelectItem value="training">Training Program</SelectItem>
              <SelectItem value="research">Research Project</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="md:max-w-xs">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="research">Research</SelectItem>
              <SelectItem value="environmental">Environmental</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="md:max-w-xs">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="onsite">On-site</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
              <SelectItem value="campus">On Campus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={opportunity.type === "Internship" ? "default" : opportunity.type === "Training Program" ? "secondary" : "outline"}
                      className={opportunity.type === "Internship" ? "bg-gradient-to-r from-blue-600 to-green-600 text-white" : "bg-gray-200 text-gray-800"}>
                    {opportunity.type}
                  </Badge>
                  <Badge variant="outline" className={
                    opportunity.postedBy === "company" ? "text-purple-600 border-purple-600" : "text-blue-600 border-blue-600"
                  }>
                    {opportunity.postedBy === "company" ? "Company" : "Faculty"}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                <CardDescription className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-medium">
                  {opportunity.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{opportunity.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>{opportunity.duration} • {opportunity.location}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">Category:</span>
                    <span className="text-gray-600 ml-1">{opportunity.category}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700 block mb-2">Requirements:</span>
                  <div className="flex flex-wrap gap-1">
                    {opportunity.requirements.map((req, reqIndex) => (
                      <Badge key={reqIndex} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600" size="sm">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
