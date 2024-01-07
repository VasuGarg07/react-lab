import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@mui/material";
import '@styles/popup-quiz/Result.scss'
import { useQuizContext } from "@contexts/quiz.context";

const Result = () => {
  const { name, score } = useQuizContext();
  const navigate = useNavigate()

  useEffect(() => {
    if (!name) {
      navigate("");
    }
  }, [name]);

  return (
    <div className="result text-center flex-centered-column">
      <span className="result-score">Final Score : {score}</span>
      <Button
        variant="outlined"
        color="info"
        size="large"
        href='/trivia'
        className="margin btn"
        sx={{ borderRadius: 24 }}
      >
        Go to homepage
      </Button>
    </div>
  );

}

export default Result