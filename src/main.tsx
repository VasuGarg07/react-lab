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
import { BudgetProvider } from '@contexts/budget.context.tsx';
import Mortage from '@pages/Mortage.tsx';
import { MemoryProvider } from '@contexts/memory.context.tsx';
import CookBook from '@pages/Cookbook.tsx';
import { DishDetails } from '@components/cookbook/pages/DishDetails.tsx';
import { areaDishes, categoryDishes, dishInfoLoader, fetchAreas, fetchCategories, searchDishLoader } from './services/cookbook.service.ts';
import Home from '@components/cookbook/pages/Home.tsx';
import TypeGrid from '@components/cookbook/pages/TypeGrid.tsx';
import DishGrid from '@components/cookbook/pages/DishGrid.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "aniquote",
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
    path: "/budget",
    element: <BudgetProvider />,
  },
  {
    path: "/mortage",
    element: <Mortage />,
  },
  {
    path: '/memory',
    element: <MemoryProvider />
  },
  {
    path: "/trivia",
    element: <QuizProvider />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
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
    element: <CookBook />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'search/:searchTerm',
        element: <DishGrid />,
        loader: searchDishLoader,
      },
      {
        path: 'category',
        element: <TypeGrid />,
        loader: fetchCategories,
      },
      {
        path: 'category/:category',
        element: <DishGrid />,
        loader: categoryDishes,
      },
      {
        path: 'area',
        element: <TypeGrid />,
        loader: fetchAreas,
      },
      {
        path: 'area/:area',
        element: <DishGrid />,
        loader: areaDishes,
      },
      // {
      //   path: 'ingredients',
      //   element: <TypeGrid />
      // },
      {
        path: 'dish/:dishId',
        element: <DishDetails />,
        loader: dishInfoLoader,
      },
      {
        path: "random",
        element: <DishDetails />,
        loader: dishInfoLoader,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <CssBaseline />
  </React.StrictMode>,
)
