import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          {/* Experience Timeline */}
          <div className="relative animate-fade-in-up">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <Card className="bg-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300 group ml-20">
              <CardContent className="p-8">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Software Development Intern</h3>
                    <div className="flex items-center text-primary font-semibold mb-2">
                      <Building2 className="h-4 w-4 mr-2" />
                      390 Technologies
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      2024
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Collaborated with experienced engineers on enterprise tools, gaining valuable hands-on experience 
                    in professional software development environments.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2 text-primary">Key Achievements</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Collaborated with senior engineers on enterprise tools</li>
                        <li>• Learned agile workflow and code review processes</li>
                        <li>• Contributed to team projects and documentation</li>
                      </ul>
                    </div>

                    <div className="bg-accent/5 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2 text-accent">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Agile Methodology</Badge>
                        <Badge variant="secondary" className="text-xs">Code Review</Badge>
                        <Badge variant="secondary" className="text-xs">Team Collaboration</Badge>
                        <Badge variant="secondary" className="text-xs">Enterprise Tools</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Section */}
          <div className="mt-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-primary">Education</span>
            </h3>
            
            <Card className="bg-gradient-hero border border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">BSc in Software Engineering</h3>
                    <div className="flex items-center text-primary font-semibold mb-2">
                      <Building2 className="h-4 w-4 mr-2" />
                      Babcock University
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      Ilishan, Ogun State
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <Badge className="bg-primary text-primary-foreground">
                      Class of 2025
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Languages Section */}
          <div className="mt-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-primary">Languages</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">English</h4>
                  <Badge variant="outline" className="border-primary/30 text-primary">Fluent</Badge>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">Yoruba</h4>
                  <Badge variant="outline" className="border-primary/30 text-primary">Fluent</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};