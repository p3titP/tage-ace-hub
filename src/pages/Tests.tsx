import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Target, TrendingUp, Play, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Tests = () => {
  const availableTests = [
    {
      id: 1,
      title: "Test Blanc Complet #1",
      description: "Conditions réelles du TAGE MAGE",
      duration: "120 min",
      questions: 90,
      completed: false,
      difficulty: "Standard",
    },
    {
      id: 2,
      title: "Test Blanc Complet #2",
      description: "Format officiel avec chronomètre",
      duration: "120 min",
      questions: 90,
      completed: false,
      difficulty: "Standard",
    },
    {
      id: 3,
      title: "Test Blanc Avancé #1",
      description: "Niveau de difficulté élevé",
      duration: "120 min",
      questions: 90,
      completed: false,
      difficulty: "Avancé",
    },
  ];

  const testFeatures = [
    {
      icon: Clock,
      title: "Chronométré",
      description: "2 heures comme le test officiel",
    },
    {
      icon: Target,
      title: "90 Questions",
      description: "6 sous-tests de 15 questions",
    },
    {
      icon: TrendingUp,
      title: "Résultats Détaillés",
      description: "Analyse complète de vos performances",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/5 via-background to-primary/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tests Blancs Chronométrés
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Entraînez-vous en conditions réelles avec nos tests blancs complets. Chronométrés, notés automatiquement, avec statistiques détaillées.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available Tests */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tests Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableTests.map((test, index) => (
              <Card
                key={test.id}
                className="group hover:shadow-large transition-all duration-300 animate-scale-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                      variant={test.difficulty === "Avancé" ? "default" : "secondary"}
                      className={test.difficulty === "Avancé" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {test.difficulty}
                    </Badge>
                    {test.completed && (
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    )}
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{test.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {test.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <p className="text-muted-foreground">Durée</p>
                      <p className="font-semibold text-foreground flex items-center gap-1">
                        <Clock size={16} />
                        {test.duration}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">Questions</p>
                      <p className="font-semibold text-foreground">{test.questions}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-hover text-primary-foreground hover:shadow-medium transition-all group">
                    <Play className="mr-2 h-4 w-4" />
                    Commencer le test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips Card */}
          <Card className="mt-12 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <CardHeader>
              <CardTitle className="text-card-foreground">Conseils pour le test blanc</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>✓ <strong>Environnement calme :</strong> Isolez-vous pour 2 heures sans interruption</p>
              <p>✓ <strong>Matériel :</strong> Préparez papier, crayon et calculatrice</p>
              <p>✓ <strong>Gestion du temps :</strong> Répartissez équitablement sur les 6 sous-tests</p>
              <p>✓ <strong>Révision :</strong> Analysez vos résultats après chaque test</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Tests;
