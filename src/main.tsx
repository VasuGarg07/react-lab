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
import { DrinkDetails } from '@components/bartender/pages/DrinkDetails.tsx';
import { areaDishes, categoryDishes, dishInfoLoader, fetchAreas, fetchCategories, searchDishLoader } from './services/cookbook.service.ts';
import DishHome from '@components/cookbook/pages/Home.tsx';
import DishTypeGrid from '@components/cookbook/pages/TypeGrid.tsx';
import DishGrid from '@components/cookbook/pages/DishGrid.tsx';
import DrinkHome from '@components/bartender/pages/Home.tsx';
import Dictionary from '@components/cookbook/pages/Dictionary.tsx';
import DrinkTypeGrid from '@components/bartender/pages/TypeGrid.tsx';
import DrinkDictionary from '@components/bartender/pages/Dictionary.tsx';
import DrinkGrid from '@components/bartender/pages/DrinkGrid.tsx';
import { categoryDrinks, drinkInfoLoader, fetchDrinkCategories, fetchGlass, fetchTypes, glassDrinks, searchDrinkLoader, typeDrinks } from '@services/bartender.service.ts';


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
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <DrinkHome />
      },
      {
        path: 'search/:searchTerm',
        element: <DrinkGrid />,
        loader: searchDrinkLoader,
      },
      {
        path: 'category',
        element: <DrinkTypeGrid />,
        loader: fetchDrinkCategories,
      },
      {
        path: 'category/:category',
        element: <DrinkGrid />,
        loader: categoryDrinks,
      },
      {
        path: 'type',
        element: <DrinkTypeGrid />,
        loader: fetchTypes,
      },
      {
        path: 'type/:type',
        element: <DrinkGrid />,
        loader: typeDrinks,
      },
      {
        path: 'glass',
        element: <DrinkTypeGrid />,
        loader: fetchGlass,
      },
      {
        path: 'glass/:glass',
        element: <DrinkGrid />,
        loader: glassDrinks,
      },
      {
        path: 'alphabet',
        element: <DrinkDictionary />,
      },
      {
        path: 'drink/:drinkId',
        element: <DrinkDetails />,
        loader: drinkInfoLoader,
      },
      {
        path: "random",
        element: <DrinkDetails />,
        loader: drinkInfoLoader,
      },
    ],
  },
  {
    path: "/cookbook",
    element: <CookBook />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <DishHome />
      },
      {
        path: 'search/:searchTerm',
        element: <DishGrid />,
        loader: searchDishLoader,
      },
      {
        path: 'category',
        element: <DishTypeGrid />,
        loader: fetchCategories,
      },
      {
        path: 'category/:category',
        element: <DishGrid />,
        loader: categoryDishes,
      },
      {
        path: 'area',
        element: <DishTypeGrid />,
        loader: fetchAreas,
      },
      {
        path: 'area/:area',
        element: <DishGrid />,
        loader: areaDishes,
      },
      {
        path: 'alphabet',
        element: <Dictionary />,
      },
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
