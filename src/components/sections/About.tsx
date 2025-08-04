import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Briefcase, Palette } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Internship at 390 Technologies",
      description: "Gained hands-on experience in enterprise software development"
    },
    {
      icon: GraduationCap,
      title: "Project-based Learning",
      description: "Strong foundation in team collaboration and agile methodologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design Skills",
      description: "Proficient in Figma with focus on user-centered design"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Introduction */}
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-6">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">Ogun State, Nigeria</span>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Hi, I'm Taiwo Daniel, a software engineer and 2025 graduate of Babcock University in Ogun State. 
                I specialize in building intelligent, user-centered systems with clean interfaces and solid architecture. 
                I'm passionate about creative solutions and meaningful technology.
              </p>

              <Card className="bg-gradient-hero border border-border/50 hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-primary">My Philosophy</h3>
                  <p className="text-muted-foreground">
                    Technology should be intuitive, impactful, and accessible. I believe in creating solutions 
                    that not only solve problems but enhance the human experience.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Highlights */}
            <div className="space-y-6 animate-fade-in-up">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="bg-card border border-border/50 hover:shadow-card hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};