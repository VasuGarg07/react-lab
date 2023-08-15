
import { Typography } from '@mui/material';
import { useState } from 'react';
import { Outlet, useOutletContext } from "react-router-dom";
import { Question } from '../shared/interface';
import '../styles/PopupQuiz.scss';

type NameType = {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>
}

type ScoreType = {
  score: number,
  setScore: React.Dispatch<React.SetStateAction<number>>
}

type QuestionsType = {
  questions: Question[],
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>
}

const PopQuiz = () => {

  const [questions, setQuestions] = useState<Question[]>([]);
  const [name, setName] = useState<string>('');
  const [score, setScore] = useState<number>(0);

  return (
    <div className='quizapp-container flex-centered-column padding full-width full-viewport-height'>

      <div className='quiz-main padding'>
        <Typography variant='h4' className='text-center title'>Pop Quiz</Typography>
        <div className='flex-centered-container full-width'>
          <div className='main-app flex-centered-column'>
            <Outlet context={
              {
                nameType: { name, setName } satisfies NameType,
                scoreType: { score, setScore } satisfies ScoreType,
                questionsType: { questions, setQuestions } satisfies QuestionsType
              }
            } />
          </div>
          <div className='image-container'>
            <img src="/images/quiz.png" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default PopQuiz;

export function useName() {
  return useOutletContext<{ nameType: NameType }>()
}

export function useScore() {
  return useOutletContext<{ scoreType: ScoreType }>()
}


export function useQuestions() {
  return useOutletContext<{ questionsType: QuestionsType }>()
}