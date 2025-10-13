import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Award, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const stats = [
    {
      icon: Target,
      label: "Tests Complétés",
      value: "0",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Clock,
      label: "Temps d'Entraînement",
      value: "0h",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Award,
      label: "Meilleur Score",
      value: "-",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: TrendingUp,
      label: "Progression",
      value: "+0%",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  const subtestProgress = [
    { name: "Raisonnement Logique", progress: 0, exercises: 0, total: 120, color: "bg-blue-500" },
    { name: "Calcul", progress: 0, exercises: 0, total: 95, color: "bg-purple-500" },
    { name: "Conditions Minimales", progress: 0, exercises: 0, total: 80, color: "bg-green-500" },
    { name: "Expression", progress: 0, exercises: 0, total: 110, color: "bg-orange-500" },
    { name: "Compréhension de Textes", progress: 0, exercises: 0, total: 75, color: "bg-pink-500" },
    { name: "Résolution de Problèmes", progress: 0, exercises: 0, total: 90, color: "bg-cyan-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl font-bold text-foreground mb-4">Mon Espace</h1>
            <p className="text-lg text-muted-foreground">
              Suivez votre progression et analysez vos performances
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="animate-scale-in border-border hover:shadow-medium transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </CardTitle>
                    <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Progress by Subtest */}
          <Card className="mt-12 max-w-6xl animate-fade-in">
            <CardHeader>
              <CardTitle className="text-card-foreground">Progression par Sous-Test</CardTitle>
              <CardDescription className="text-muted-foreground">
                Nombre d'exercices complétés sur chaque sous-test
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {subtestProgress.map((subtest, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${subtest.color}`} />
                      <span className="font-medium text-foreground">{subtest.name}</span>
                    </div>
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {subtest.exercises}/{subtest.total}
                    </Badge>
                  </div>
                  <Progress value={subtest.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="mt-8 max-w-6xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <TrendingUp className="h-5 w-5" />
                Recommandations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>🎯 Commencez par vous entraîner sur les différents sous-tests</p>
              <p>📊 Vos statistiques apparaîtront automatiquement au fur et à mesure de votre progression</p>
              <p>🎓 N'hésitez pas à consulter les cours et fiches de révision</p>
              <p>⏱️ Passez des tests blancs régulièrement pour évaluer votre niveau global</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
