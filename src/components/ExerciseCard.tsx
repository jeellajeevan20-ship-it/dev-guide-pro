import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Trophy, Users, ChevronRight } from "lucide-react";

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  completedBy: number;  
  topics: string[];
  progress?: number;
}

interface ExerciseCardProps {
  exercise: Exercise;
  onStart: (id: string) => void;
}

const ExerciseCard = ({ exercise, onStart }: ExerciseCardProps) => {
  const difficultyColors = {
    beginner: 'bg-success text-success-foreground',
    intermediate: 'bg-warning text-warning-foreground',
    advanced: 'bg-destructive text-destructive-foreground'
  };

  return (
    <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {exercise.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {exercise.description}
            </p>
          </div>
          <Badge className={difficultyColors[exercise.difficulty]}>
            {exercise.difficulty}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {exercise.topics.map((topic, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {exercise.estimatedTime}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {exercise.completedBy} completed
          </div>
        </div>

        {/* Progress (if started) */}
        {exercise.progress !== undefined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{exercise.progress}%</span>
            </div>
            <Progress value={exercise.progress} className="h-2" />
          </div>
        )}

        {/* Action Button */}
        <Button 
          onClick={() => onStart(exercise.id)}
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          variant={exercise.progress !== undefined ? "outline" : "default"}
        >
          {exercise.progress !== undefined ? (
            <>
              <Trophy className="h-4 w-4 mr-2" />
              Continue
            </>
          ) : (
            <>
              Start Exercise
              <ChevronRight className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;