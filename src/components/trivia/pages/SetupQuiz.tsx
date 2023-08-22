import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@mui/material';
import { QuizAPi, QuizCategories } from '@shared/data';
import { Question } from '@shared/interface';
import axios from 'axios';
import ErrorMessage from '../../ErrorMessage';
import { useQuizContext } from "@contexts/quiz.context";
import '@styles/popup-quiz/SetupQuiz.scss';

const SetupQuiz = () => {

  const fetchQuiz = async (category = "", difficulty = ""): Promise<{ response_code: number, results: Question[] }> => {
    const apiUrl = `${QuizAPi}${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}`
    const response = await axios.get(apiUrl)
    return response.data
  }

  const CATEGORIES = QuizCategories

  const { name, setName, setQuestions } = useQuizContext();

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      const resp = await fetchQuiz(category, difficulty);
      setQuestions(resp.results)
      navigate("/trivia/quiz");
    }
  };

  return (
    <div className="settings flex-centered-column padding full-width">
      <span className="section-title text-center">Quiz Settings</span>
      {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
      <TextField
        className='full-width'
        label="Enter Your Name"
        variant="outlined"
        color="secondary"
        size='small'
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        select
        label="Select Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        size='small'
        variant="outlined"
        color="secondary"
        className='full-width'
      >
        {CATEGORIES.map((cat) => (
          <MenuItem key={cat.category} value={cat.value}>
            {cat.category}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Select Difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        size='small'
        variant="outlined"
        color="secondary"
        className='full-width'
      >
        <MenuItem key="Easy" value="easy">
          Easy
        </MenuItem>
        <MenuItem key="Medium" value="medium">
          Medium
        </MenuItem>
        <MenuItem key="Hard" value="hard">
          Hard
        </MenuItem>
      </TextField>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleSubmit}
      >
        Start Quiz
      </Button>
    </div>
  )
}

export default SetupQuiz