
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Users, BookOpen, Briefcase } from "lucide-react";

const Auth = () => {
  const [userType, setUserType] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">IC</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              InternConnect
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to InternConnect</h1>
          <p className="text-gray-600">Connect, collaborate, and grow your campus network</p>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Sign In
                </Button>
                <div className="text-center">
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="signup">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Join our university innovation community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="userType">I am a...</Label>
                  <Select onValueChange={setUserType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Student
                        </div>
                      </SelectItem>
                      <SelectItem value="faculty">
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Faculty/Professor
                        </div>
                      </SelectItem>
                      <SelectItem value="company">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          Company/Recruiter
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signupEmail">Email</Label>
                  <Input id="signupEmail" type="email" placeholder="john.doe@university.edu" />
                </div>
                
                {userType === "student" && (
                  <div className="space-y-2">
                    <Label htmlFor="major">Major</Label>
                    <Input id="major" placeholder="Computer Science" />
                  </div>
                )}
                
                {userType === "company" && (
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="TechCorp Inc." />
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="signupPassword">Password</Label>
                  <Input id="signupPassword" type="password" placeholder="Create a strong password" />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Create Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
