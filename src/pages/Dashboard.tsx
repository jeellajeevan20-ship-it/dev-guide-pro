import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import ExerciseCard from "@/components/ExerciseCard";
import TutorialSection from "@/components/TutorialSection";
import heroImage from "@/assets/hero-coding.jpg";
import { 
  Code, 
  BookOpen, 
  Target, 
  Trophy, 
  TrendingUp,
  Zap,
  Users,
  ChevronRight,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();

  // Mock data
  const userStats = {
    exercisesCompleted: 12,
    totalExercises: 50,
    currentStreak: 7,
    totalPoints: 1250,
    rank: "Intermediate"
  };

  const recentExercises = [
    {
      id: '1',
      title: 'Array Manipulation Basics',
      description: 'Learn to work with JavaScript arrays using methods like map, filter, and reduce.',
      difficulty: 'beginner' as const,
      estimatedTime: '15 mins',
      completedBy: 1240,
      topics: ['JavaScript', 'Arrays', 'Functions'],
      progress: 80
    },
    {
      id: '2', 
      title: 'Async/Await Patterns',
      description: 'Master asynchronous programming with modern JavaScript async/await syntax.',
      difficulty: 'intermediate' as const,
      estimatedTime: '25 mins',
      completedBy: 890,
      topics: ['JavaScript', 'Async', 'Promises']
    },
    {
      id: '3',
      title: 'React Hooks Deep Dive',
      description: 'Advanced React hooks patterns and custom hook development.',
      difficulty: 'advanced' as const,
      estimatedTime: '45 mins',
      completedBy: 456,
      topics: ['React', 'Hooks', 'State Management']
    }
  ];

  const tutorials = [
    {
      id: '1',
      title: 'JavaScript Fundamentals',
      description: 'Complete guide to JavaScript basics including variables, functions, and control flow.',
      duration: '2 hours',
      lessons: 8,
      completedLessons: 6,
      difficulty: 'beginner' as const,
      isLocked: false
    },
    {
      id: '2',
      title: 'DOM Manipulation',
      description: 'Learn how to interact with the Document Object Model using vanilla JavaScript.',
      duration: '1.5 hours',
      lessons: 6,
      completedLessons: 0,
      difficulty: 'intermediate' as const,
      isLocked: false
    },
    {
      id: '3',
      title: 'Advanced React Patterns',
      description: 'Explore advanced React concepts including context, HOCs, and render props.',
      duration: '3 hours', 
      lessons: 12,
      completedLessons: 0,
      difficulty: 'advanced' as const,
      isLocked: true
    }
  ];

  const handleStartExercise = (id: string) => {
    toast({
      title: "Starting Exercise",
      description: "Redirecting to code editor...",
    });
  };

  const handleStartTutorial = (id: string) => {
    toast({
      title: "Starting Tutorial",
      description: "Loading interactive tutorial...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Programming Education Platform" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Master Programming with
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered Learning
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Interactive coding tutorials, real-time error detection, and personalized learning paths to accelerate your programming journey.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="gradient">
                <Code className="h-5 w-5 mr-2" />
                Start Coding
              </Button>
              <Button variant="outline" size="lg">
                <BookOpen className="h-5 w-5 mr-2" />
                Browse Tutorials
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        {/* Stats Overview */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Exercises Completed</p>
                    <p className="text-2xl font-bold">{userStats.exercisesCompleted}</p>
                  </div>
                  <div className="p-3 bg-success/20 rounded-lg">
                    <Trophy className="h-6 w-6 text-success" />
                  </div>
                </div>
                <Progress 
                  value={(userStats.exercisesCompleted / userStats.totalExercises) * 100} 
                  className="mt-4 h-2"
                />
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Streak</p>
                    <p className="text-2xl font-bold">{userStats.currentStreak} days</p>
                  </div>
                  <div className="p-3 bg-warning/20 rounded-lg">
                    <Zap className="h-6 w-6 text-warning" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Points</p>
                    <p className="text-2xl font-bold">{userStats.totalPoints.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Rank</p>
                    <p className="text-2xl font-bold">{userStats.rank}</p>
                  </div>
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-primary p-1 hover:scale-105 transition-transform duration-300">
              <div className="bg-background rounded-lg p-6 h-full">
                <Code className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Code Lab</h3>
                <p className="text-muted-foreground mb-4">Practice coding with real-time analysis and feedback.</p>
                <Button variant="outline" className="group">
                  Start Coding
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card className="bg-gradient-success p-1 hover:scale-105 transition-transform duration-300">
              <div className="bg-background rounded-lg p-6 h-full">
                <Target className="h-8 w-8 text-success mb-4" />
                <h3 className="text-lg font-semibold mb-2">Daily Challenge</h3>
                <p className="text-muted-foreground mb-4">Solve today's programming challenge and earn points.</p>
                <Button variant="outline" className="group">
                  Take Challenge
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card className="bg-gradient-card border-accent/50 p-1 hover:scale-105 transition-transform duration-300">
              <div className="bg-background rounded-lg p-6 h-full">
                <BookOpen className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">Learning Path</h3>
                <p className="text-muted-foreground mb-4">Follow structured tutorials to build your skills.</p>
                <Button variant="outline" className="group">
                  Continue Learning
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent Exercises */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Practice Exercises</h2>
            <Button variant="outline">
              <Target className="h-4 w-4 mr-2" />
              View All Exercises
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {recentExercises.map((exercise) => (
              <ExerciseCard 
                key={exercise.id}
                exercise={exercise}
                onStart={handleStartExercise}
              />
            ))}
          </div>
        </section>

        {/* Tutorials */}
        <TutorialSection 
          tutorials={tutorials}
          onStartTutorial={handleStartTutorial}
        />
      </div>
    </div>
  );
};

export default Dashboard;