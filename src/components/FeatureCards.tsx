
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureCards = () => {
  const features = [
    {
      title: "Project Showcase",
      description: "Display ongoing academic and tech initiatives in an organized, searchable format",
      icon: "🚀"
    },
    {
      title: "Opportunity Board",
      description: "Companies and faculty post internships, projects, and training programs",
      icon: "💼"
    },
    {
      title: "Faculty Verification",
      description: "Professors verify and comment on student projects for credibility",
      icon: "✅"
    },
    {
      title: "Student Profiles",
      description: "Comprehensive profiles with resumes, skills, portfolios, and achievements",
      icon: "👤"
    },
    {
      title: "Company Access",
      description: "Recruiters get transparent access to student work and university talent",
      icon: "🏢"
    },
    {
      title: "Real-time Updates",
      description: "Stay updated with new projects, opportunities, and community engagement",
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Platform Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-2 border-black shadow-3d hover:shadow-3d-hover transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
