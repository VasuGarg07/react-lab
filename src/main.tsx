import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import App from './pages/App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import AniQuote from './pages/AniQuote.tsx';
import ShadowGenerator from './pages/ShadowGenerator.tsx';
import ColorGen from './pages/ColorGen.tsx';
import PopQuiz from './pages/PopQuiz.tsx';
import Result from './components/trivia/pages/Result.tsx';
import Trivia from './components/trivia/pages/Trivia.tsx';
import SetupQuiz from './components/trivia/pages/SetupQuiz.tsx';


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
    element: <PopQuiz />,
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
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <CssBaseline />
  </React.StrictMode>,
)
