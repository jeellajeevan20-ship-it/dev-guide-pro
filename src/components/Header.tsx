import { Button } from "@/components/ui/button";
import { Code, BookOpen, Target, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Code className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CodeLearn
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/">
              <Button 
                variant="ghost" 
                className={`text-muted-foreground hover:text-foreground ${
                  location.pathname === '/' ? 'text-foreground bg-secondary' : ''
                }`}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link to="/code-lab">
              <Button 
                variant="ghost" 
                className={`text-muted-foreground hover:text-foreground ${
                  location.pathname === '/code-lab' ? 'text-foreground bg-secondary' : ''
                }`}
              >
                <Code className="h-4 w-4 mr-2" />
                Code Lab
              </Button>
            </Link>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <Target className="h-4 w-4 mr-2" />
              Exercises
            </Button>
          </nav>

          <Button variant="outline" size="sm">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;