import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Users, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-study.jpg";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "570+ Exercices Interactifs",
      description: "Entraînez-vous sur tous les sous-tests du TAGE MAGE avec corrections détaillées",
    },
    {
      icon: Target,
      title: "Tests Blancs Chronométrés",
      description: "Préparez-vous en conditions réelles avec des tests complets notés automatiquement",
    },
    {
      icon: Users,
      title: "Suivi Personnalisé",
      description: "Suivez votre progression et identifiez vos points forts et axes d'amélioration",
    },
    {
      icon: Zap,
      title: "100% Gratuit",
      description: "Accès illimité à tous les contenus sans inscription payante ni engagement",
    },
  ];

  const subtests = [
    "Raisonnement Logique",
    "Calcul",
    "Conditions Minimales",
    "Expression",
    "Compréhension de Textes",
    "Résolution de Problèmes",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Préparez le{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                    TAGE MAGE
                  </span>{" "}
                  gratuitement
                </h1>
                <p className="text-xl text-muted-foreground">
                  La plateforme complète et gratuite pour réussir votre test d'admission. Exercices, tests blancs, cours et suivi personnalisé.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/training">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-hover text-primary-foreground hover:shadow-medium transition-all group">
                    Commencer l'entraînement
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/tests">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                    Passer un test blanc
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">570+</div>
                  <div className="text-sm text-muted-foreground">Exercices</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-accent">6</div>
                  <div className="text-sm text-muted-foreground">Sous-tests</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-muted-foreground">Gratuit</div>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img
                  src={heroImage}
                  alt="Étudiants préparant le TAGE MAGE"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-large backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Plateforme Officielle</div>
                    <div className="text-sm text-muted-foreground">Gratuite & Accessible</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tout pour réussir le TAGE MAGE
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une préparation complète avec tous les outils dont vous avez besoin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-large transition-all duration-300 animate-scale-in border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subtests Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Les 6 Sous-Tests du TAGE MAGE
              </h2>
              <p className="text-lg text-muted-foreground">
                Entraînez-vous sur chaque section avec des centaines d'exercices corrigés
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subtests.map((subtest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:shadow-medium transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{subtest}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/training">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground hover:shadow-medium transition-all group">
                  Découvrir les exercices
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-hover text-primary-foreground border-0 shadow-large animate-scale-in">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Prêt à commencer votre préparation ?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Rejoignez des centaines d'étudiants qui se préparent au TAGE MAGE avec notre plateforme gratuite
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/training">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                    Commencer maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                    Voir mon espace
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
