import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, BookOpen, Lightbulb, Save } from "lucide-react";

const CodeLab = () => {
  const savedProjects = [
    { id: '1', name: 'Fibonacci Calculator', language: 'JavaScript', lastModified: '2 hours ago' },
    { id: '2', name: 'Binary Search Tree', language: 'Python', lastModified: '1 day ago' },
    { id: '3', name: 'React Todo App', language: 'TypeScript', lastModified: '3 days ago' }
  ];

  const codeTemplates = [
    { id: '1', name: 'JavaScript Function', description: 'Basic function template' },
    { id: '2', name: 'React Component', description: 'Functional React component' },
    { id: '3', name: 'Python Class', description: 'Object-oriented Python class' },
    { id: '4', name: 'HTML Form', description: 'Interactive form with validation' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Code Laboratory</h1>
            <p className="text-muted-foreground">
              Write, analyze, and perfect your code with AI-powered assistance
            </p>
          </div>
          <Button variant="gradient">
            <Save className="h-4 w-4 mr-2" />
            Save Project
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Saved Projects */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Saved Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {savedProjects.map((project) => (
                  <div key={project.id} className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm">{project.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {project.language}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{project.lastModified}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Code Templates */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Templates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {codeTemplates.map((template) => (
                  <Button 
                    key={template.id}
                    variant="ghost" 
                    className="w-full justify-start h-auto p-3"
                  >
                    <div className="text-left">
                      <div className="font-medium text-sm">{template.name}</div>
                      <div className="text-xs text-muted-foreground">{template.description}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-accent" />
                  Quick Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <p className="text-accent font-medium mb-1">Use console.log</p>
                    <p className="text-muted-foreground">Debug your code by logging variable values</p>
                  </div>
                  <div className="p-3 rounded-lg bg-success/10">
                    <p className="text-success font-medium mb-1">Write clean code</p>
                    <p className="text-muted-foreground">Use meaningful variable names and proper indentation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Code Editor */}
          <div className="lg:col-span-3">
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeLab;