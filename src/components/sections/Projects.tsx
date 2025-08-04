import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, MessageCircle } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Animal Disease Detection Expert System",
      description: "Group capstone project that identifies animal diseases based on user-input breed and diagnostic questions. Built the inference logic and question flow to provide accurate disease diagnosis.",
      contribution: "Built the inference logic and question flow",
      technologies: ["Python", "Expert Systems", "Logic Programming", "UI/UX"],
      icon: Brain,
      featured: true
    },
    {
      title: "Mobile Chatbot App",
      description: "A mobile chatbot application built with Kotlin, focusing on intuitive mobile interface and fluid conversational UX. Led the UI/UX design process using Figma.",
      contribution: "Lead UI/UX designer using Figma",
      technologies: ["Kotlin", "Android Studio", "Figma", "Mobile Design"],
      icon: MessageCircle,
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise through real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`bg-card border border-border/50 hover:shadow-elegant hover:border-primary/20 transition-all duration-500 group animate-fade-in-up ${
                  project.featured ? "ring-1 ring-primary/10" : ""
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        {project.featured && (
                          <Badge variant="outline" className="mt-1 border-primary/30 text-primary text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="bg-accent/5 rounded-lg p-4 border border-accent/10">
                    <h4 className="font-semibold text-sm text-accent mb-2">My Contribution</h4>
                    <p className="text-sm text-muted-foreground">{project.contribution}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-muted hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in-up">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};