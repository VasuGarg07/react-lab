import { createContext, useContext, useState } from "react";
import PopQuiz from "@pages/PopQuiz";
import { Question } from "@shared/interface";

const QuizContext = createContext<any>(null);

export const QuizProvider = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [name, setName] = useState<string>('');
  const [score, setScore] = useState<number>(0);

  return (
    <QuizContext.Provider
      value={{ questions, setQuestions, name, setName, score, setScore }}>
      <PopQuiz />
    </QuizContext.Provider>
  )
}

export const useQuizContext = () => {
  return useContext(QuizContext);
}