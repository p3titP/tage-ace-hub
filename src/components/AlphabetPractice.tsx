import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const AlphabetPractice = () => {
  const [currentLetter, setCurrentLetter] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [feedback, setFeedback] = useState<{ message: string; type: "success" | "error" | "" }>({ message: "", type: "" });

  const generateLetter = () => {
    const randomIndex = Math.floor(Math.random() * 26);
    const letter = String.fromCharCode(65 + randomIndex); // A-Z
    setCurrentLetter(letter);
  };

  useEffect(() => {
    generateLetter();
  }, []);

  const getCorrectAnswer = (letter: string): number => {
    return letter.charCodeAt(0) - 64; // A=1, B=2, etc.
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    // Auto-check when user enters a number
    if (value && !isNaN(Number(value))) {
      checkAnswer(Number(value));
    }
  };

  const checkAnswer = (answer: number) => {
    const correctAnswer = getCorrectAnswer(currentLetter);
    setAttempts(attempts + 1);

    if (answer === correctAnswer) {
      setScore(score + 1);
      setFeedback({ message: "Correct !", type: "success" });
      
      // Auto-generate new letter after a short delay
      setTimeout(() => {
        setUserInput("");
        setFeedback({ message: "", type: "" });
        generateLetter();
      }, 500);
    } else {
      setFeedback({ message: `Incorrect. ${currentLetter} = ${correctAnswer}`, type: "error" });
      
      // Clear feedback and generate new letter after showing the correct answer
      setTimeout(() => {
        setUserInput("");
        setFeedback({ message: "", type: "" });
        generateLetter();
      }, 1500);
    }
  };

  const handleReset = () => {
    setScore(0);
    setAttempts(0);
    setUserInput("");
    setFeedback({ message: "", type: "" });
    generateLetter();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Entraînement Alphabet</CardTitle>
        <CardDescription>
          Tapez le numéro correspondant à la position de chaque lettre dans l'alphabet (A=1, B=2, ..., Z=26)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="text-lg px-4 py-2">
            Score: {score}/{attempts}
          </Badge>
          <Button variant="outline" size="sm" onClick={handleReset}>
            Réinitialiser
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 py-8">
          <div className="text-8xl font-bold text-primary animate-scale-in">
            {currentLetter}
          </div>

          <div className="w-full max-w-xs space-y-4">
            <Input
              type="number"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Entrez le numéro..."
              className="text-center text-2xl h-16"
              autoFocus
              min="1"
              max="26"
            />

            {feedback.message && (
              <div
                className={`text-center text-lg font-medium animate-fade-in ${
                  feedback.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {feedback.message}
              </div>
            )}
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            💡 Astuce : La nouvelle lettre apparaît automatiquement après chaque réponse
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlphabetPractice;
