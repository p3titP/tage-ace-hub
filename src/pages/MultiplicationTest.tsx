import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Trophy, X, Check, RefreshCcw, Timer } from "lucide-react";
import { toast } from "sonner";

interface Question {
  num1: number;
  num2: number;
  answer: number;
}

export default function MultiplicationTest() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [finished, setFinished] = useState(false);
  const [tableRange, setTableRange] = useState({ min: 2, max: 10 });

  const totalQuestions = 20;

  // Générer des questions aléatoires
  const generateQuestions = () => {
    const newQuestions: Question[] = [];
    for (let i = 0; i < totalQuestions; i++) {
      const num1 = Math.floor(Math.random() * (tableRange.max - tableRange.min + 1)) + tableRange.min;
      const num2 = Math.floor(Math.random() * (tableRange.max - tableRange.min + 1)) + tableRange.min;
      newQuestions.push({
        num1,
        num2,
        answer: num1 * num2,
      });
    }
    setQuestions(newQuestions);
  };

  // Démarrer le test
  const startTest = () => {
    generateQuestions();
    setStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setErrors(0);
    setTimeLeft(300);
    setFinished(false);
    setUserAnswer("");
  };

  // Timer
  useEffect(() => {
    if (started && !finished && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && started && !finished) {
      finishTest();
    }
  }, [timeLeft, started, finished]);

  // Vérifier la réponse
  const checkAnswer = () => {
    const answer = parseInt(userAnswer);
    if (isNaN(answer)) {
      toast.error("Veuillez entrer un nombre valide");
      return;
    }

    if (answer === questions[currentIndex].answer) {
      setScore(score + 1);
      toast.success("Correct ! ✓", { duration: 1000 });
    } else {
      setErrors(errors + 1);
      toast.error(
        `Incorrect. La réponse était ${questions[currentIndex].answer}`,
        { duration: 2000 }
      );
    }

    // Question suivante
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setFinished(true);
    const finalScore = (score / totalQuestions) * 100;
    if (finalScore >= 90) {
      toast.success("Excellent ! Vous maîtrisez vos tables !", { duration: 3000 });
    } else if (finalScore >= 70) {
      toast.success("Bon travail ! Continuez à vous entraîner.", { duration: 3000 });
    } else {
      toast("Continuez à pratiquer, vous allez progresser !", { duration: 3000 });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && userAnswer) {
      checkAnswer();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
        <div className="container max-w-2xl mx-auto">
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                <Trophy className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold">
                Test des Tables de Multiplication
              </CardTitle>
              <CardDescription className="text-base">
                Révisez et testez votre maîtrise des tables de multiplication.
                Vous aurez 5 minutes pour répondre à 20 questions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-3">Choisissez vos tables :</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        Table minimum
                      </label>
                      <Input
                        type="number"
                        min="2"
                        max="12"
                        value={tableRange.min}
                        onChange={(e) =>
                          setTableRange({ ...tableRange, min: parseInt(e.target.value) || 2 })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1 block">
                        Table maximum
                      </label>
                      <Input
                        type="number"
                        min="2"
                        max="12"
                        value={tableRange.max}
                        onChange={(e) =>
                          setTableRange({ ...tableRange, max: parseInt(e.target.value) || 10 })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold text-sm flex items-center gap-2">
                    <Timer className="h-4 w-4" />
                    Règles du test
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 20 questions à répondre</li>
                    <li>• 5 minutes pour compléter le test</li>
                    <li>• Tapez votre réponse et appuyez sur Entrée</li>
                    <li>• Votre score final sera calculé à la fin</li>
                  </ul>
                </div>
              </div>

              <Button
                onClick={startTest}
                size="lg"
                className="w-full text-lg font-semibold"
              >
                Démarrer le test
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = (score / totalQuestions) * 100;
    const timeUsed = 300 - timeLeft;

    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
        <div className="container max-w-2xl mx-auto">
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="text-center space-y-4">
              <div
                className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center ${
                  percentage >= 90
                    ? "bg-gradient-to-br from-green-500 to-green-600"
                    : percentage >= 70
                    ? "bg-gradient-to-br from-blue-500 to-blue-600"
                    : "bg-gradient-to-br from-orange-500 to-orange-600"
                }`}
              >
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold">Test Terminé !</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div>
                  <p className="text-6xl font-bold text-primary">
                    {percentage.toFixed(0)}%
                  </p>
                  <p className="text-muted-foreground mt-2">Score final</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Check className="h-5 w-5 text-green-600" />
                      <p className="text-2xl font-bold text-green-600">{score}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Bonnes réponses</p>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <X className="h-5 w-5 text-red-600" />
                      <p className="text-2xl font-bold text-red-600">{errors}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Erreurs</p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    Temps utilisé : <span className="font-semibold">{formatTime(timeUsed)}</span>
                  </p>
                </div>

                <div className="space-y-2">
                  {percentage >= 90 && (
                    <p className="text-lg font-semibold text-green-600">
                      🎉 Excellent ! Vous maîtrisez parfaitement vos tables !
                    </p>
                  )}
                  {percentage >= 70 && percentage < 90 && (
                    <p className="text-lg font-semibold text-blue-600">
                      👏 Bon travail ! Encore un peu de pratique pour la perfection.
                    </p>
                  )}
                  {percentage < 70 && (
                    <p className="text-lg font-semibold text-orange-600">
                      💪 Continuez à vous entraîner, vous allez progresser !
                    </p>
                  )}
                </div>
              </div>

              <Button
                onClick={startTest}
                size="lg"
                className="w-full text-lg font-semibold"
              >
                <RefreshCcw className="mr-2 h-5 w-5" />
                Recommencer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        <Card className="shadow-xl border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-xl">
                Question {currentIndex + 1} / {totalQuestions}
              </CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Timer className="h-5 w-5" />
                <span className={`font-mono text-lg ${timeLeft < 60 ? "text-red-600 font-bold animate-pulse" : ""}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center space-y-6 py-8">
              <p className="text-6xl font-bold text-primary">
                {currentQuestion.num1} × {currentQuestion.num2}
              </p>

              <div className="space-y-3">
                <p className="text-lg text-muted-foreground">Votre réponse :</p>
                <Input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre réponse"
                  className="text-center text-3xl font-bold h-16"
                  autoFocus
                />
              </div>
            </div>

            <Button
              onClick={checkAnswer}
              disabled={!userAnswer}
              size="lg"
              className="w-full text-lg font-semibold"
            >
              Valider
            </Button>

            <div className="flex gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 text-green-600">
                <Check className="h-4 w-4" />
                <span className="font-semibold">{score} correctes</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <X className="h-4 w-4" />
                <span className="font-semibold">{errors} erreurs</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
