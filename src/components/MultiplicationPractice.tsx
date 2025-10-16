import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calculator, CheckCircle2, XCircle, RotateCcw } from "lucide-react";

const MultiplicationPractice = () => {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<{ a: number; b: number } | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const generateQuestion = (table: number) => {
    const b = Math.floor(Math.random() * 10) + 1;
    setCurrentQuestion({ a: table, b });
    setUserAnswer("");
    setFeedback(null);
    setShowAnswer(false);
  };

  const handleTableSelect = (table: number) => {
    setSelectedTable(table);
    setScore({ correct: 0, total: 0 });
    generateQuestion(table);
  };

  const handleSubmit = () => {
    if (!currentQuestion || userAnswer === "") return;

    const correctAnswer = currentQuestion.a * currentQuestion.b;
    const isCorrect = parseInt(userAnswer) === correctAnswer;

    setFeedback(isCorrect ? "correct" : "incorrect");
    setShowAnswer(true);
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleNext = () => {
    if (selectedTable) {
      generateQuestion(selectedTable);
    }
  };

  const handleReset = () => {
    setSelectedTable(null);
    setCurrentQuestion(null);
    setUserAnswer("");
    setScore({ correct: 0, total: 0 });
    setFeedback(null);
    setShowAnswer(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !showAnswer) {
      handleSubmit();
    } else if (e.key === "Enter" && showAnswer) {
      handleNext();
    }
  };

  if (!selectedTable) {
    return (
      <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Calculator className="h-6 w-6 text-primary" />
            Entraînement Interactif
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Choisissez une table de multiplication pour commencer l'entraînement :
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-2">
            {Array.from({ length: 20 }, (_, i) => i + 1).map(table => (
              <Button
                key={table}
                onClick={() => handleTableSelect(table)}
                className="h-12 text-lg font-bold"
                variant="outline"
              >
                {table}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Calculator className="h-6 w-6 text-primary" />
            Table de {selectedTable}
          </CardTitle>
          <Button
            onClick={handleReset}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Changer de table
          </Button>
        </div>
        <div className="flex gap-2 mt-2">
          <Badge variant="outline" className="bg-background">
            Score: {score.correct}/{score.total}
          </Badge>
          {score.total > 0 && (
            <Badge variant="outline" className="bg-background">
              Réussite: {Math.round((score.correct / score.total) * 100)}%
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {currentQuestion && (
          <div className="space-y-4">
            <div className="text-center bg-muted/50 rounded-lg p-8">
              <p className="text-4xl font-bold text-foreground mb-4">
                {currentQuestion.a} × {currentQuestion.b} = ?
              </p>
              <Input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Votre réponse"
                className="text-2xl text-center h-14 max-w-xs mx-auto"
                disabled={showAnswer}
                autoFocus
              />
            </div>

            {feedback && showAnswer && (
              <div
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  feedback === "correct"
                    ? "bg-green-500/10 border border-green-500/30"
                    : "bg-red-500/10 border border-red-500/30"
                }`}
              >
                {feedback === "correct" ? (
                  <>
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-400">
                        Excellent ! C'est correct !
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-500">
                        {currentQuestion.a} × {currentQuestion.b} = {currentQuestion.a * currentQuestion.b}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                    <div>
                      <p className="font-semibold text-red-700 dark:text-red-400">
                        Pas tout à fait...
                      </p>
                      <p className="text-sm text-red-600 dark:text-red-500">
                        La bonne réponse est : {currentQuestion.a} × {currentQuestion.b} = {currentQuestion.a * currentQuestion.b}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="flex gap-2">
              {!showAnswer ? (
                <Button
                  onClick={handleSubmit}
                  disabled={userAnswer === ""}
                  className="flex-1"
                >
                  Valider
                </Button>
              ) : (
                <Button onClick={handleNext} className="flex-1">
                  Question suivante
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MultiplicationPractice;
