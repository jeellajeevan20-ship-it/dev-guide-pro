import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Play, Check, X, AlertCircle, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeAnalysis {
  errors: { line: number; message: string; severity: 'error' | 'warning' }[];
  suggestions: string[];
  score: number;
}

const CodeEditor = () => {
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));`);
  
  const [analysis, setAnalysis] = useState<CodeAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const analyzeCode = async () => {
    setIsAnalyzing(true);
    
    // Simulate code analysis
    setTimeout(() => {
      const mockAnalysis: CodeAnalysis = {
        errors: [
          { line: 2, message: "Consider using iterative approach for better performance", severity: 'warning' },
          { line: 5, message: "Add input validation for negative numbers", severity: 'warning' }
        ],
        suggestions: [
          "Use memoization to optimize recursive calls",
          "Add JSDoc comments for better documentation",
          "Consider edge cases for non-integer inputs"
        ],
        score: 75
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
      
      toast({
        title: "Code Analysis Complete",
        description: `Score: ${mockAnalysis.score}/100`,
      });
    }, 2000);
  };

  const runCode = () => {
    toast({
      title: "Code Executed",
      description: "Output: 5 (fibonacci of 5)",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Code Editor */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Code Editor</CardTitle>
            <div className="flex gap-2">
              <Button onClick={runCode} size="sm" variant="default">
                <Play className="h-4 w-4 mr-2" />
                Run
              </Button>
              <Button onClick={analyzeCode} size="sm" variant="outline" disabled={isAnalyzing}>
                <AlertCircle className="h-4 w-4 mr-2" />
                {isAnalyzing ? "Analyzing..." : "Analyze"}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="min-h-[300px] font-mono text-sm bg-editor-bg border-border resize-none"
              placeholder="Write your code here..."
            />
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="text-xs">
                JavaScript
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Panel */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-primary" />
            Code Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!analysis ? (
            <div className="text-center py-12 text-muted-foreground">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Click "Analyze" to get code feedback</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Score */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary">
                  <span className="text-xl font-bold text-primary-foreground">
                    {analysis.score}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Code Quality Score</p>
              </div>

              {/* Errors & Warnings */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <X className="h-4 w-4 mr-2 text-destructive" />
                  Issues Found
                </h4>
                <div className="space-y-2">
                  {analysis.errors.map((error, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                      <div className={`p-1 rounded ${error.severity === 'error' ? 'bg-destructive/20' : 'bg-warning/20'}`}>
                        <AlertCircle className={`h-3 w-3 ${error.severity === 'error' ? 'text-destructive' : 'text-warning'}`} />
                      </div>
                      <div>
                        <p className="text-sm">Line {error.line}: {error.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Lightbulb className="h-4 w-4 mr-2 text-accent" />
                  Suggestions
                </h4>
                <div className="space-y-2">
                  {analysis.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-success/10">
                      <Check className="h-4 w-4 text-success mt-0.5" />
                      <p className="text-sm">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeEditor;