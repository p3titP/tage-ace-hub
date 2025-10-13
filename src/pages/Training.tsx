import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Calculator, ListChecks, FileText, BookOpen, Lightbulb, ArrowRight } from "lucide-react";

const Training = () => {
  const subtests = [
    {
      id: "logic",
      title: "Raisonnement Logique",
      description: "Exercices de logique, suites, et raisonnement déductif",
      icon: Brain,
      exercises: 120,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "calculation",
      title: "Calcul",
      description: "Calcul mental, opérations et problèmes numériques",
      icon: Calculator,
      exercises: 95,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "conditions",
      title: "Conditions Minimales",
      description: "Analyse de suffisance d'informations",
      icon: ListChecks,
      exercises: 80,
      color: "from-green-500 to-green-600",
    },
    {
      id: "expression",
      title: "Expression",
      description: "Grammaire, orthographe et syntaxe française",
      icon: FileText,
      exercises: 110,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: "comprehension",
      title: "Compréhension de Textes",
      description: "Analyse et compréhension de documents écrits",
      icon: BookOpen,
      exercises: 75,
      color: "from-pink-500 to-pink-600",
    },
    {
      id: "problems",
      title: "Résolution de Problèmes",
      description: "Problèmes mathématiques et logiques complexes",
      icon: Lightbulb,
      exercises: 90,
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Entraînement Interactif
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Plus de 570 exercices répartis sur les 6 sous-tests du TAGE MAGE. Chaque exercice est corrigé automatiquement avec des explications détaillées.
            </p>
          </div>
        </div>
      </section>

      {/* Subtests Grid */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subtests.map((subtest, index) => {
              const Icon = subtest.icon;
              return (
                <Card
                  key={subtest.id}
                  className="group hover:shadow-large transition-all duration-300 animate-scale-in border-border bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${subtest.color} flex items-center justify-center mb-4 shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{subtest.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {subtest.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Exercices disponibles</span>
                      <span className="font-semibold text-foreground">{subtest.exercises}</span>
                    </div>
                    <Link to={`/training/${subtest.id}`}>
                      <Button className="w-full bg-gradient-to-r from-primary to-primary-hover text-primary-foreground hover:shadow-medium transition-all group">
                        Commencer
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Info Card */}
          <Card className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-card-foreground">Comment s'entraîner efficacement ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>✓ <strong>Commencez par les bases :</strong> Familiarisez-vous avec chaque type d'exercice</p>
              <p>✓ <strong>Analysez vos erreurs :</strong> Lisez attentivement les explications détaillées</p>
              <p>✓ <strong>Progressez par paliers :</strong> Augmentez progressivement la difficulté</p>
              <p>✓ <strong>Chronométrez-vous :</strong> Le temps est crucial au TAGE MAGE</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Training;
