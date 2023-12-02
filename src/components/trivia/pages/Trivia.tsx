import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useQuizContext } from "@contexts/quiz.context";
import QuestionCard from '../components/Question';
import '@styles/popup-quiz/Trivia.scss'

const Trivia = () => {
  const { name, questions, score, setScore } = useQuizContext();

  const [options, setOptions] = useState<string[]>([]);
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    if (questions && questions.length) {
      const options = shuffleArray([
        questions[currQues].correct_answer,
        ...questions[currQues].incorrect_answers,
      ]);
      setOptions(options);
    }
  }, [currQues, questions]);

  function shuffleArray(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="quiz flex-centered-column padding">
      {questions ? (
        <>
          <div className="quiz-info full-width  flex-justified">
            <span className="contestant">Welcome, {name}</span>
            <div className='text-center'>
              <div><strong>Score : {score}</strong></div>
              <div>{questions[currQues].category}</div>
            </div>
          </div>
          <QuestionCard
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues].correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={160}
          thickness={1}
        />
      )}
    </div>
  );
}

export default Trivia