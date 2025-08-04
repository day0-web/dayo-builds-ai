import { Download, ExternalLink, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const handleDownloadResume = () => {
    // Create a simple PDF resume content for now
    const resumeContent = `
Taiwo Daniel - Software Engineer Resume

Contact: taiwodaniel226@gmail.com | +2349126729727

EDUCATION
Babcock University, Ilishan, Ogun State
BSc in Software Engineering (2025)

EXPERIENCE
390 Technologies - Software Development Intern
• Collaborated with engineers on enterprise tools
• Learned agile workflow and code review processes

SKILLS
Languages: Python, JavaScript, HTML, CSS, Kotlin
Frameworks: React.js, Android Studio, Oracle DB, Figma

PROJECTS
• Animal Disease Detection Expert System - Group capstone project
• Mobile Chatbot App - Lead UI/UX designer with Kotlin development

CERTIFICATIONS
• Installing and Configuring Windows 10 Clients
• CompTIA A+ Core 1 & Core 2
• Oracle Database 12c Fundamentals & Admin Workshop
• Android Application Management
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Taiwo_Daniel_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Taiwo</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Daniel</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Software Engineer with a Focus on{" "}
            <span className="text-primary font-semibold">Smart Systems</span> and{" "}
            <span className="text-accent font-semibold">UI/UX Design</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 font-semibold"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer group">
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};