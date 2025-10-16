import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, CheckCircle2, Lightbulb } from "lucide-react";
import { getCourseById } from "@/data/coursesData";
import MultiplicationPractice from "@/components/MultiplicationPractice";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();

  const course = getCourseById(courseId || "");

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Cours non trouvé</h1>
          <Button onClick={() => navigate("/courses")}>
            Retour aux cours
          </Button>
        </div>
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Fiche":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Cours":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
      case "Guide":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "Astuce":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-400";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Link to="/courses">
            <Button variant="ghost" className="mb-4 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux cours
            </Button>
          </Link>

          <div className="max-w-4xl animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <Badge className={getTypeColor(course.type)}>{course.type}</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {course.duration}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {course.title}
            </h1>
            <p className="text-lg text-muted-foreground">{course.category}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            {/* Introduction */}
            {course.content.introduction && (
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in">
                <CardContent className="p-6">
                  <p className="text-foreground leading-relaxed">
                    {course.content.introduction}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Sections */}
            {course.content.sections.map((section, index) => (
              <Card
                key={index}
                className="border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-card-foreground">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>

                  {/* Examples */}
                  {section.examples && section.examples.length > 0 && (
                    <div className="space-y-2 bg-muted/30 rounded-lg p-4">
                      {section.examples.map((example, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground leading-relaxed">
                            {example}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tips */}
                  {section.tips && section.tips.length > 0 && (
                    <div className="space-y-2 bg-accent/5 border border-accent/20 rounded-lg p-4">
                      {section.tips.map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-foreground leading-relaxed">
                            {tip}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {/* Key Points */}
            {course.content.keyPoints && course.content.keyPoints.length > 0 && (
              <Card className="border-accent/30 bg-gradient-to-br from-accent/10 to-transparent animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                    Points Clés à Retenir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {course.content.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-semibold text-accent">
                          {idx + 1}
                        </span>
                        <span className="text-foreground font-medium pt-0.5">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Multiplication Practice - Only for multiplication course */}
            {courseId === "calcul-tables-multiplication" && (
              <MultiplicationPractice />
            )}

            {/* Navigation */}
            <div className="flex justify-center pt-8">
              <Link to="/courses">
                <Button className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explorer d'autres cours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
