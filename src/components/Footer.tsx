import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-sm text-muted-foreground">Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
            <span className="text-sm text-muted-foreground">by</span>
            <span className="text-sm font-semibold text-primary ml-2">Taiwo Daniel</span>
          </div>
          
          <div className="text-xl font-bold mb-2">
            <span className="font-bold text-primary">Dayo</span>
            <span className="text-foreground"> Inc</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dayo Inc. Building the future, one line of code at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};