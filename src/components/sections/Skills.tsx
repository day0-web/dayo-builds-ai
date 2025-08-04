import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Smartphone, Award, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "HTML", "CSS", "Kotlin"]
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      skills: ["React.js", "Android Studio", "Oracle DB", "Figma"]
    }
  ];

  const certifications = [
    "Installing and Configuring Windows 10 Clients",
    "CompTIA A+ Core 1 & Core 2",
    "Fundamentals of Computer Security",
    "Oracle Database 12c Fundamentals",
    "Oracle Database 12c Admin Workshop",
    "Oracle SEOCA and OCP",
    "Android Application Management"
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300 group animate-fade-in-up"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-muted hover:bg-primary/10 hover:text-primary transition-colors duration-300 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-up">
            <Card className="bg-gradient-hero border border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Professional Certifications</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-3 bg-card/50 rounded-lg border border-border/30 hover:border-accent/30 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};