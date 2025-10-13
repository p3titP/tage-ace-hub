import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Download, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courseCategories = [
    {
      id: "logic",
      title: "Raisonnement Logique",
      description: "Méthodes et astuces pour les exercices de logique",
      resources: 8,
      type: "Fiches + Vidéos",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "calculation",
      title: "Calcul Mental",
      description: "Techniques de calcul rapide et astuces numériques",
      resources: 6,
      type: "Fiches + Exercices",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "expression",
      title: "Expression Française",
      description: "Règles de grammaire et pièges courants",
      resources: 10,
      type: "Fiches",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: "comprehension",
      title: "Compréhension de Textes",
      description: "Méthodologie de lecture et analyse",
      resources: 5,
      type: "Guides",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const methodologyGuides = [
    {
      title: "Stratégie Globale TAGE MAGE",
      description: "Comment aborder le test dans son ensemble",
      duration: "15 min",
    },
    {
      title: "Gestion du Temps",
      description: "Optimiser son temps sur chaque sous-test",
      duration: "10 min",
    },
    {
      title: "Gestion du Stress",
      description: "Techniques pour rester concentré le jour J",
      duration: "12 min",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cours & Ressources
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Fiches de révision, guides méthodologiques et astuces pour maîtriser chaque sous-test du TAGE MAGE.
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Fiches par Sous-Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCategories.map((category, index) => (
              <Card
                key={category.id}
                className="group hover:shadow-large transition-all duration-300 animate-scale-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 shadow-medium group-hover:scale-110 transition-transform`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {category.type}
                    </Badge>
                    <span className="text-muted-foreground">{category.resources} ressources</span>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Accéder
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Guides */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Guides Méthodologiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {methodologyGuides.map((guide, index) => (
              <Card
                key={index}
                className="hover:shadow-medium transition-all duration-300 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Video className="h-8 w-8 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {guide.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{guide.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Lire le guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Download Section */}
          <Card className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Download className="h-6 w-6" />
                Téléchargements
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Retrouvez toutes nos fiches au format PDF pour réviser hors ligne
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
                <Download className="mr-2 h-4 w-4" />
                Télécharger le pack complet
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Courses;
