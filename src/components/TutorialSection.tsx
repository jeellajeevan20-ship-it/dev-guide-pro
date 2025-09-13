import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, PlayCircle, CheckCircle, Lock } from "lucide-react";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  completedLessons: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isLocked: boolean;
  thumbnail?: string;
}

interface TutorialSectionProps {
  tutorials: Tutorial[];
  onStartTutorial: (id: string) => void;
}

const TutorialSection = ({ tutorials, onStartTutorial }: TutorialSectionProps) => {
  const difficultyColors = {
    beginner: 'bg-success text-success-foreground',
    intermediate: 'bg-warning text-warning-foreground', 
    advanced: 'bg-destructive text-destructive-foreground'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Interactive Tutorials</h2>
        <Button variant="outline">
          <BookOpen className="h-4 w-4 mr-2" />
          Browse All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => {
          const progress = (tutorial.completedLessons / tutorial.lessons) * 100;
          const isCompleted = tutorial.completedLessons === tutorial.lessons;
          
          return (
            <Card key={tutorial.id} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
              {tutorial.isLocked && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Complete previous tutorials to unlock</p>
                  </div>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {tutorial.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {tutorial.description}
                    </p>
                  </div>
                  <Badge className={difficultyColors[tutorial.difficulty]}>
                    {tutorial.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Tutorial Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {tutorial.lessons} lessons
                  </div>
                </div>

                {/* Progress */}
                {tutorial.completedLessons > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{tutorial.completedLessons}/{tutorial.lessons} lessons</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}

                {/* Action Button */}
                <Button 
                  onClick={() => onStartTutorial(tutorial.id)}
                  className="w-full"
                  variant={tutorial.completedLessons > 0 ? "outline" : "default"}
                  disabled={tutorial.isLocked}
                >
                  {isCompleted ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2 text-success" />
                      Review
                    </>
                  ) : tutorial.completedLessons > 0 ? (
                    <>
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Continue
                    </>
                  ) : (
                    <>
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Start Tutorial
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TutorialSection;