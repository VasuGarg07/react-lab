import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Result from './components/trivia/pages/Result.tsx';
import SetupQuiz from './components/trivia/pages/SetupQuiz.tsx';
import Trivia from './components/trivia/pages/Trivia.tsx';
import { BartenderProvider } from './contexts/bartender.context.tsx';
import { QuizProvider } from './contexts/quiz.context.tsx';
import AniQuote from './pages/AniQuote.tsx';
import App from './pages/App.tsx';
import ColorGen from './pages/ColorGen.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import ShadowGenerator from './pages/ShadowGenerator.tsx';
import { CookBookProvider } from '@contexts/cookboox.context.tsx';
import { BudgetProvider } from '@contexts/budget.context.tsx';
import Mortage from '@pages/Mortage.tsx';
import MemoryGame from '@pages/MemoryGame.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/aniquote",
    element: <AniQuote />,
  },
  {
    path: "/shadowgen",
    element: <ShadowGenerator />,
  },
  {
    path: "/colorgen",
    element: <ColorGen />,
  },
  {
    path: "/trivia",
    element: <QuizProvider />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/trivia",
        element: <SetupQuiz />
      },
      {
        path: "quiz",
        element: <Trivia />
      },
      {
        path: "result",
        element: <Result />
      }
    ],
  },
  {
    path: "/bartender",
    element: <BartenderProvider />,
  },
  {
    path: "/cookbook",
    element: <CookBookProvider />,
  },
  {
    path: "/budget",
    element: <BudgetProvider />,
  },
  {
    path: "/mortage",
    element: <Mortage />,
  },
  {
    path: '/memory',
    element: <MemoryGame />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <CssBaseline />
  </React.StrictMode>,
)
