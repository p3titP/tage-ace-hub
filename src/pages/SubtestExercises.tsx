import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Trophy, Target, FolderOpen } from "lucide-react";
import { subtestsData } from "@/data/exercisesData";
import ExerciseCard from "@/components/ExerciseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SubtestExercises = () => {
  const { subtestId } = useParams<{ subtestId: string }>();
  const navigate = useNavigate();

  const subtest = subtestsData.find((s) => s.id === subtestId);

  if (!subtest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Sous-test non trouvé</h1>
          <Button onClick={() => navigate("/training")}>
            Retour à l'entraînement
          </Button>
        </div>
      </div>
    );
  }

  // Group exercises by category
  const exercisesByCategory = subtest.exercises.reduce((acc, exercise) => {
    const category = exercise.category || "Général";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(exercise);
    return acc;
  }, {} as Record<string, typeof subtest.exercises>);

  const categories = Object.keys(exercisesByCategory);
  const hasCategories = categories.length > 1 || (categories.length === 1 && categories[0] !== "Général");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Link to="/training">
            <Button variant="ghost" className="mb-4 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'entraînement
            </Button>
          </Link>

          <div className="flex items-start gap-4 animate-fade-in-up">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-soft">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {subtest.title}
              </h1>
              <p className="text-lg text-muted-foreground">{subtest.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 border-b border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{subtest.exercises.length}</strong> exercices disponibles
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">0%</strong> complété
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Exercises List */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {hasCategories ? (
              // Display exercises grouped by category
              categories.map((category, catIndex) => (
                <div key={category} className="space-y-4 animate-fade-in" style={{ animationDelay: `${catIndex * 100}ms` }}>
                  {/* Category Header */}
                  <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <FolderOpen className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{category}</CardTitle>
                        </div>
                        <Badge variant="secondary" className="text-sm">
                          {exercisesByCategory[category].length} exercice{exercisesByCategory[category].length > 1 ? 's' : ''}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>

                  {/* Category Exercises */}
                  {exercisesByCategory[category].map((exercise, index) => {
                    const globalIndex = subtest.exercises.findIndex(e => e.id === exercise.id);
                    return (
                      <div key={exercise.id} className="animate-fade-in" style={{ animationDelay: `${(catIndex * 100) + (index * 50)}ms` }}>
                        <ExerciseCard exercise={exercise} exerciseNumber={globalIndex + 1} />
                      </div>
                    );
                  })}
                </div>
              ))
            ) : (
              // Display all exercises without categories
              subtest.exercises.map((exercise, index) => (
                <div key={exercise.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ExerciseCard exercise={exercise} exerciseNumber={index + 1} />
                </div>
              ))
            )}

            {/* Coming Soon Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 animate-fade-in">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Plus d'exercices à venir !
                  </h3>
                  <p className="text-muted-foreground">
                    Nous ajoutons régulièrement de nouveaux exercices pour enrichir votre entraînement.
                  </p>
                </div>
                <Link to="/training">
                  <Button variant="outline" className="mt-4">
                    Découvrir les autres sous-tests
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubtestExercises;
