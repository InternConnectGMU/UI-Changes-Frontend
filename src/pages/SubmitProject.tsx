
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import Navigation from "@/components/Navigation";

const SubmitProject = () => {
  const [technologies, setTechnologies] = useState([]);
  const [newTech, setNewTech] = useState("");
  const [teamMembers, setTeamMembers] = useState([""]);

  const addTechnology = () => {
    if (newTech.trim() && !technologies.includes(newTech.trim())) {
      setTechnologies([...technologies, newTech.trim()]);
      setNewTech("");
    }
  };

  const removeTechnology = (tech) => {
    setTechnologies(technologies.filter(t => t !== tech));
  };

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, ""]);
  };

  const removeTeamMember = (index) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  const updateTeamMember = (index, value) => {
    const updated = [...teamMembers];
    updated[index] = value;
    setTeamMembers(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Submit Your Project
            </h1>
            <p className="text-gray-600">Share your innovative work with the university community</p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Provide comprehensive information about your project for review and showcase
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="projectTitle">Project Title *</Label>
                <Input id="projectTitle" placeholder="Enter your project title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="psychology">Psychology</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="environmental">Environmental Science</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Project Status *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select current status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planning">Planning Phase</SelectItem>
                    <SelectItem value="progress">In Progress</SelectItem>
                    <SelectItem value="testing">Testing Phase</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Provide a detailed description of your project, including objectives, methodology, and expected outcomes..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-4">
                <Label>Team Members *</Label>
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={index === 0 ? "Your name (Team Lead)" : "Team member name"}
                      value={member}
                      onChange={(e) => updateTeamMember(index, e.target.value)}
                    />
                    {index > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeTeamMember(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" onClick={addTeamMember} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Team Member
                </Button>
              </div>

              <div className="space-y-4">
                <Label>Technologies Used</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add technology (e.g., React, Python, Arduino)"
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTechnology()}
                  />
                  <Button onClick={addTechnology} variant="outline">
                    Add
                  </Button>
                </div>
                {technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="cursor-pointer" onClick={() => removeTechnology(tech)}>
                        {tech} <X className="w-3 h-3 ml-1" />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="faculty">Faculty Supervisor (Optional)</Label>
                <Input id="faculty" placeholder="Dr. Jane Smith" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="github">GitHub Repository (Optional)</Label>
                <Input id="github" placeholder="https://github.com/username/project" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="demo">Demo/Portfolio Link (Optional)</Label>
                <Input id="demo" placeholder="https://your-project-demo.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional">Additional Notes</Label>
                <Textarea 
                  id="additional" 
                  placeholder="Any additional information, challenges faced, future plans, or special achievements..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="pt-4 space-y-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-700 hover:to-blue-700">
                  Submit Project
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Your project will be reviewed by faculty before being published on the platform
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmitProject;
