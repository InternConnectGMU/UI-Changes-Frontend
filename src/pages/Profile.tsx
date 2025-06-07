
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, BookOpen, Briefcase, Plus, Github, Linkedin, FileText, Edit2 } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Sample user data with new fields
  const [user, setUser] = useState({
    name: "Alice Johnson",
    role: "Student",
    major: "Computer Science",
    year: "Junior",
    email: "alice.johnson@university.edu",
    skills: ["React", "Python", "Machine Learning", "Node.js", "SQL"],
    resume: "https://drive.google.com/file/d/example-resume-link",
    github: "https://github.com/alicejohnson",
    linkedin: "https://linkedin.com/in/alice-johnson",
    projects: [
      {
        title: "AI-Powered Campus Navigation",
        status: "In Progress",
        role: "Team Lead",
        verified: true
      },
      {
        title: "Study Group Matcher",
        status: "Completed",
        role: "Developer",
        verified: true
      }
    ],
    applications: [
      {
        title: "Frontend Developer Intern",
        company: "TechStart Inc.",
        status: "Pending",
        appliedDate: "2024-01-15"
      }
    ]
  });

  const [editForm, setEditForm] = useState({
    name: user.name,
    major: user.major,
    year: user.year,
    resume: user.resume,
    github: user.github,
    linkedin: user.linkedin
  });

  const handleSave = () => {
    setUser({ ...user, ...editForm });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      name: user.name,
      major: user.major,
      year: user.year,
      resume: user.resume,
      github: user.github,
      linkedin: user.linkedin
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8 bg-white shadow-3d border-2 border-black">
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-3d">
                    <span className="text-white font-bold text-xl">AJ</span>
                  </div>
                  <div>
                    {isEditing ? (
                      <div className="space-y-2">
                        <Input
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                          className="text-2xl font-bold border-2 border-pink-600"
                        />
                        <div className="flex gap-2">
                          <Input
                            value={editForm.major}
                            onChange={(e) => setEditForm({ ...editForm, major: e.target.value })}
                            placeholder="Major"
                            className="border-2 border-pink-600"
                          />
                          <Input
                            value={editForm.year}
                            onChange={(e) => setEditForm({ ...editForm, year: e.target.value })}
                            placeholder="Year"
                            className="border-2 border-pink-600"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h1 className="text-2xl font-bold text-gray-800 text-3d">{user.name}</h1>
                        <p className="text-gray-600">{user.major} • {user.year}</p>
                      </>
                    )}
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-pink-800 border-pink-800 shadow-3d">
                    <Users className="w-3 h-3 mr-1" />
                    {user.role}
                  </Badge>
                  {isEditing ? (
                    <div className="flex gap-2">
                      <Button onClick={handleSave} size="sm" className="bg-pink-800 hover:bg-pink-700 text-white btn-3d">
                        Save
                      </Button>
                      <Button onClick={handleCancel} variant="outline" size="sm" className="border-2 border-black btn-3d">
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => setIsEditing(true)} variant="outline" size="sm" className="border-2 border-black btn-3d">
                      <Edit2 className="w-3 h-3 mr-1" />
                      Edit Profile
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Skills Section */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="shadow-3d">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links Section */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-4">Professional Links</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Resume */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <FileText className="w-4 h-4 text-pink-600" />
                      Resume
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editForm.resume}
                        onChange={(e) => setEditForm({ ...editForm, resume: e.target.value })}
                        placeholder="Resume URL"
                        className="border-2 border-pink-600"
                      />
                    ) : (
                      <a
                        href={user.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 border-2 border-black rounded-md hover:bg-pink-50 transition-colors btn-3d"
                      >
                        <FileText className="w-4 h-4 text-pink-600" />
                        <span className="text-sm text-gray-700">View Resume</span>
                      </a>
                    )}
                  </div>

                  {/* GitHub */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <Github className="w-4 h-4 text-pink-600" />
                      GitHub
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editForm.github}
                        onChange={(e) => setEditForm({ ...editForm, github: e.target.value })}
                        placeholder="GitHub URL"
                        className="border-2 border-pink-600"
                      />
                    ) : (
                      <a
                        href={user.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 border-2 border-black rounded-md hover:bg-pink-50 transition-colors btn-3d"
                      >
                        <Github className="w-4 h-4 text-pink-600" />
                        <span className="text-sm text-gray-700">View GitHub</span>
                      </a>
                    )}
                  </div>

                  {/* LinkedIn */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-sm font-medium">
                      <Linkedin className="w-4 h-4 text-pink-600" />
                      LinkedIn
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editForm.linkedin}
                        onChange={(e) => setEditForm({ ...editForm, linkedin: e.target.value })}
                        placeholder="LinkedIn URL"
                        className="border-2 border-pink-600"
                      />
                    ) : (
                      <a
                        href={user.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 border-2 border-black rounded-md hover:bg-pink-50 transition-colors btn-3d"
                      >
                        <Linkedin className="w-4 h-4 text-pink-600" />
                        <span className="text-sm text-gray-700">View LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Tabs */}
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-3 shadow-3d border-2 border-black">
              <TabsTrigger value="projects" className="btn-3d">My Projects</TabsTrigger>
              <TabsTrigger value="applications" className="btn-3d">Applications</TabsTrigger>
              <TabsTrigger value="settings" className="btn-3d">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-3d">My Projects</h2>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:bg-pink-700 text-white btn-3d border-2 border-black">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </div>
              
              <div className="grid gap-4">
                {user.projects.map((project, index) => (
                  <Card key={index} className="bg-white shadow-3d border-2 border-black">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-3d">{project.title}</CardTitle>
                          <CardDescription>Role: {project.role}</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Badge
                            variant={project.status === "Completed" ? "default" : "secondary"}
                            className={`shadow-3d ${project.status === "Completed" ? "bg-gradient-to-r from-blue-600 to-green-600 text-white" : "bg-gray-200 text-gray-800"}`}
                          >
                            {project.status}
                          </Badge>
                          {project.verified && (
                            <Badge variant="outline" className="text-green-600 border-green-600 shadow-3d">
                              ✅ Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm" className="border-2 border-black btn-3d">Edit</Button>
                        <Button variant="outline" size="sm" className="border-2 border-black btn-3d">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="applications" className="space-y-4">
              <h2 className="text-xl font-semibold text-3d">My Applications</h2>
              
              <div className="grid gap-4">
                {user.applications.map((application, index) => (
                  <Card key={index} className="bg-white shadow-3d border-2 border-black">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-3d">{application.title}</CardTitle>
                          <CardDescription>{application.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-yellow-600 border-yellow-600 shadow-3d">
                          {application.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Applied on: {new Date(application.appliedDate).toLocaleDateString()}
                      </p>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm" className="border-2 border-black btn-3d">View Application</Button>
                        <Button variant="outline" size="sm" className="border-2 border-black btn-3d">Contact</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4">
              <Card className="bg-white shadow-3d border-2 border-black">
                <CardHeader>
                  <CardTitle className="text-3d">Profile Settings</CardTitle>
                  <CardDescription>Manage your account preferences and privacy settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-2 border-black btn-3d">
                    Update Personal Information
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-2 border-black btn-3d">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-2 border-black btn-3d">
                    Privacy Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-2 border-black btn-3d">
                    Notification Preferences
                  </Button>
                  <Button variant="destructive" className="w-full justify-start btn-3d border-2 border-black">
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
