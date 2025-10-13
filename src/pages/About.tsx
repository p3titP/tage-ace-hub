import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Rocket, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              À Propos de TAGE MAGE Pro
            </h1>
            <p className="text-lg text-muted-foreground">
              Une plateforme gratuite créée par des passionnés pour démocratiser l'accès à la préparation du TAGE MAGE
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="border-border animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Heart className="h-6 w-6 text-primary" />
                  Notre Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  <strong className="text-foreground">TAGE MAGE Pro</strong> est né d'un constat simple : la préparation aux tests d'admission comme le TAGE MAGE représente souvent un coût important pour les étudiants, créant une barrière financière à l'entrée des grandes écoles.
                </p>
                <p>
                  Notre objectif est de <strong className="text-foreground">rendre cette préparation accessible à tous</strong>, gratuitement, en combinant technologie, pédagogie et communauté.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Rocket className="h-6 w-6 text-primary" />
                  Nos Valeurs
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">🎓 Accessibilité</h3>
                    <p>100% gratuit, sans engagement ni frais cachés. L'éducation doit être accessible à tous.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">📚 Qualité</h3>
                    <p>Des contenus pédagogiques rigoureux, régulièrement mis à jour selon les dernières tendances du test.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">🤝 Communauté</h3>
                    <p>Apprendre ensemble dans une ambiance bienveillante et d'entraide.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">⚡ Innovation</h3>
                    <p>Utiliser la technologie pour créer une expérience d'apprentissage moderne et efficace.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Users className="h-6 w-6 text-primary" />
                  Fonctionnalités Principales
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2">
                  <li>✓ Plus de 570 exercices interactifs classés par sous-test</li>
                  <li>✓ Tests blancs chronométrés en conditions réelles</li>
                  <li>✓ Corrections automatiques avec explications détaillées</li>
                  <li>✓ Tableau de bord personnel pour suivre sa progression</li>
                  <li>✓ Cours et fiches de révision synthétiques</li>
                  <li>✓ Guides méthodologiques et stratégies de réussite</li>
                  <li>✓ Espace communautaire pour échanger et s'entraider</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Mail className="h-6 w-6 text-primary" />
                  Nous Contacter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Vous avez une question, une suggestion d'amélioration, ou vous souhaitez contribuer au projet ?
                </p>
                <Button className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
                  <Mail className="mr-2 h-4 w-4" />
                  contact@tagemage-pro.fr
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
