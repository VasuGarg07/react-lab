import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import './Question.scss'
import { Question } from "../../../shared/interface";
import ErrorMessage from "./ErrorMessage";

interface QuestionProps {
  currQues: number,
  setCurrQues: React.Dispatch<React.SetStateAction<number>>
  questions: Question[],
  options: string[],
  correct: string,
  score: number,
  setScore: React.Dispatch<React.SetStateAction<number>>,
}

const QuestionCard = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
}: QuestionProps) => {

  const [selected, setSelected] = useState<string>();
  const [error, setError] = useState<boolean | string>(false);

  const navigate = useNavigate();

  const handleSelect = (i: string) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i: string) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > questions.length - 2) {
      navigate("/trivia/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected('');
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    navigate('/trivia')
    setCurrQues(0);
    // setQuestions([]);
  };

  return (
    <div className="question-card padding full-width">
      <h3 className="text-center">Question {currQues + 1} :</h3>
      <div className="question flex-centered-column full-width">
        <h4 dangerouslySetInnerHTML={{ __html: questions[currQues].question }}></h4>
        <div className="options flex-centered-container full-width margin-8">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`option padding  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={!!selected}
                dangerouslySetInnerHTML={{ __html: i }}
              >
              </button>
            ))}
        </div>
        <div className="controls margin flex-centered-container full-width">
          <Button
            variant="contained"
            color="secondary"
            href="/"
            onClick={() => handleQuit()}
            className="control-btn"
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="control-btn"
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard