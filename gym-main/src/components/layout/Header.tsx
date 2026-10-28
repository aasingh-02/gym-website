import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-md bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Space - placeholder for user's logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-hero p-2 rounded-lg shadow-glow">
              <Dumbbell className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                [GYM]
              </span>
              <span className="text-xs text-muted-foreground">FORGE YOUR STRENGTH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </Link>
            <Link to="/equipment" className="text-foreground hover:text-primary transition-smooth font-medium">
              Equipment
            </Link>
            <Link to="/notes" className="text-foreground hover:text-primary transition-smooth font-medium">
              Notes
            </Link>
            <Link to="/nutrition" className="text-foreground hover:text-primary transition-smooth font-medium">
              Nutrition
            </Link>
            <Link to="/profile" className="text-foreground hover:text-primary transition-smooth font-medium">
              Profile
            </Link>
            <Link to="/chat" className="text-foreground hover:text-primary transition-smooth font-medium">
              AI Coach
            </Link>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/equipment" 
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipment
              </Link>
              <Link 
                to="/notes" 
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Notes
              </Link>
              <Link 
                to="/nutrition" 
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nutrition
              </Link>
              <Link 
                to="/profile" 
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <Link 
                to="/chat" 
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Coach
              </Link>
              <Button variant="hero" size="sm" className="w-fit">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;