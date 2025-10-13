import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Lightbulb, Download, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { coursesData, getCoursesByCategory } from "@/data/coursesData";

const Courses = () => {
  const categories = [
    {
      id: "logic",
      title: "Raisonnement Logique",
      color: "from-blue-500 to-blue-600",
      icon: Lightbulb,
    },
    {
      id: "calculation",
      title: "Calcul",
      color: "from-purple-500 to-purple-600",
      icon: BookOpen,
    },
    {
      id: "conditions",
      title: "Conditions Minimales",
      color: "from-green-500 to-green-600",
      icon: FileText,
    },
    {
      id: "expression",
      title: "Expression",
      color: "from-orange-500 to-orange-600",
      icon: FileText,
    },
    {
      id: "comprehension",
      title: "Compréhension de Textes",
      color: "from-pink-500 to-pink-600",
      icon: BookOpen,
    },
    {
      id: "problems",
      title: "Résolution de Problèmes",
      color: "from-cyan-500 to-cyan-600",
      icon: Lightbulb,
    },
  ];

  const methodologyCourses = getCoursesByCategory("Méthodologie");

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

      {/* Courses by Category */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          {categories.map((category, catIndex) => {
            const categoryCourses = getCoursesByCategory(category.title);
            if (categoryCourses.length === 0) return null;
            
            const Icon = category.icon;
            
            return (
              <div key={category.id} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-soft`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryCourses.map((course, index) => (
                    <Card
                      key={course.id}
                      className="group hover:shadow-large transition-all duration-300 animate-scale-in border-border"
                      style={{ animationDelay: `${(catIndex * 100) + (index * 50)}ms` }}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                            {course.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{course.duration}</span>
                        </div>
                        <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                          {course.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Link to={`/courses/${course.id}`}>
                          <Button variant="outline" className="w-full group">
                            Lire
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Methodology Guides */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-soft">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Guides Méthodologiques</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {methodologyCourses.map((course, index) => (
              <Card
                key={course.id}
                className="group hover:shadow-medium transition-all duration-300 animate-fade-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {course.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm line-clamp-2">
                    {course.content.introduction}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="outline" className="w-full group">
                      <FileText className="mr-2 h-4 w-4" />
                      Lire le guide
                      <ArrowRight className="ml-auto h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
