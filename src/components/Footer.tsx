import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/40 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} AbdolRahman Asem. Made with</span>
            <Heart className="w-4 h-4 text-accent animate-pulse duration-1000" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary animate-pulse duration-1000" />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#home" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Back to Top
            </a>
            <span className="text-border">|</span>
            <a 
              href="mailto:abdoasem2055@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-2000 animate-pulse"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;