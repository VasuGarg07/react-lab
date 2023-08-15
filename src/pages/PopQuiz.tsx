
import { Typography } from '@mui/material';
import { Outlet } from "react-router-dom";
import '@styles/PopupQuiz.scss';

const PopQuiz = () => {

  return (
    <div className='quizapp-container flex-centered-column padding full-width full-viewport-height'>

      <div className='quiz-main padding'>
        <Typography variant='h4' className='text-center title'>Pop Quiz</Typography>
        <div className='flex-centered-container full-width'>
          <div className='main-app flex-centered-column'>
            <Outlet />
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
