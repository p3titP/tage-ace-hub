import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import { Exercise } from "@/data/exercisesData";

interface ExerciseCardProps {
  exercise: Exercise;
  exerciseNumber: number;
}

const ExerciseCard = ({ exercise, exerciseNumber }: ExerciseCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswer(index);
    }
  };

  const handleValidate = () => {
    if (selectedAnswer !== null) {
      setIsAnswered(true);
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsAnswered(false);
  };

  const isCorrect = selectedAnswer === exercise.correctAnswer;
  const letters = ["A", "B", "C", "D", "E"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "Moyen":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-400";
      case "Difficile":
        return "bg-red-500/10 text-red-700 dark:text-red-400";
      default:
        return "bg-secondary";
    }
  };

  return (
    <Card className="w-full border-border shadow-medium">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg text-card-foreground">
            Exercice {exerciseNumber}
          </CardTitle>
          <div className="flex items-center gap-2">
            {exercise.category && (
              <Badge variant="outline" className="text-xs">
                {exercise.category}
              </Badge>
            )}
            <Badge className={getDifficultyColor(exercise.difficulty)}>
              {exercise.difficulty}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-base text-foreground whitespace-pre-wrap">
          {exercise.question}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Options */}
        <div className="space-y-2">
          {exercise.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === exercise.correctAnswer;
            const showAsCorrect = isAnswered && isCorrectOption;
            const showAsWrong = isAnswered && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  showAsCorrect
                    ? "border-green-500 bg-green-500/10"
                    : showAsWrong
                    ? "border-red-500 bg-red-500/10"
                    : isSelected
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                } ${isAnswered ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center font-semibold text-sm">
                      {letters[index]}
                    </span>
                    <span className="text-foreground">{option}</span>
                  </div>
                  {showAsCorrect && (
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  )}
                  {showAsWrong && (
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div
            className={`p-4 rounded-lg border-2 animate-fade-in ${
              isCorrect
                ? "border-green-500 bg-green-500/5"
                : "border-red-500 bg-red-500/5"
            }`}
          >
            <div className="flex items-start gap-2 mb-2">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-semibold text-foreground mb-2">
                  {isCorrect ? "Bonne réponse !" : "Réponse incorrecte"}
                </p>
                <p className="text-muted-foreground text-sm">
                  <strong>Explication :</strong> {exercise.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {!isAnswered ? (
            <Button
              onClick={handleValidate}
              disabled={selectedAnswer === null}
              className="flex-1 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground"
            >
              Valider ma réponse
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground group"
            >
              Exercice suivant
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
