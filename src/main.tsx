import DrinkDictionary from '@components/bartender/pages/Dictionary.tsx';
import { DrinkDetails } from '@components/bartender/pages/DrinkDetails.tsx';
import DrinkGrid from '@components/bartender/pages/DrinkGrid.tsx';
import DrinkHome from '@components/bartender/pages/Home.tsx';
import DrinkTypeGrid from '@components/bartender/pages/TypeGrid.tsx';
import Dictionary from '@components/cookbook/pages/Dictionary.tsx';
import { DishDetails } from '@components/cookbook/pages/DishDetails.tsx';
import DishGrid from '@components/cookbook/pages/DishGrid.tsx';
import DishHome from '@components/cookbook/pages/Home.tsx';
import DishTypeGrid from '@components/cookbook/pages/TypeGrid.tsx';
import Genres from '@components/moviegrove/pages/Genres.tsx';
import MovieHome from '@components/moviegrove/pages/Home.tsx';
import Movie from '@components/moviegrove/pages/Movie.tsx';
import Movies from '@components/moviegrove/pages/Movies.tsx';
import SearchResults from '@components/moviegrove/pages/SearchResults.tsx';
import { BudgetProvider } from '@contexts/budget.context.tsx';
import { MemoryProvider } from '@contexts/memory.context.tsx';
import { CssBaseline } from '@mui/material';
import Bartender from '@pages/Bartender.tsx';
import CookBook from '@pages/Cookbook.tsx';
import Mortage from '@pages/Mortage.tsx';
import MovieGrove from '@pages/MovieGrove.tsx';
import { categoryDrinks, drinkInfoLoader, fetchDrinkCategories, fetchGlass, fetchTypes, glassDrinks, searchDrinkLoader, typeDrinks } from '@services/bartender.service.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, ScrollRestoration, createBrowserRouter, redirect } from 'react-router-dom';
import Result from './components/trivia/pages/Result.tsx';
import SetupQuiz from './components/trivia/pages/SetupQuiz.tsx';
import Trivia from './components/trivia/pages/Trivia.tsx';
import { QuizProvider } from './contexts/quiz.context.tsx';
import AniQuote from './pages/AniQuote.tsx';
import App from './pages/App.tsx';
import ColorGen from './pages/ColorGen.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import ShadowGenerator from './pages/ShadowGenerator.tsx';
import { areaDishes, categoryDishes, dishInfoLoader, fetchAreas, fetchCategories, searchDishLoader } from './services/cookbook.service.ts';
import Serie from '@components/moviegrove/pages/Serie.tsx';
import Series from '@components/moviegrove/pages/Series.tsx';


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
  // {
  //   path: '/moviegrove',
  //   element: <>
  //     <ScrollRestoration />
  //     <MovieGrove />
  //   </>,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: 'home',
  //       element: <MovieHome />
  //     },
  //     {
  //       path: 'search/:searchTerm',
  //       element: <SearchResults />
  //     },
  //     {
  //       path: 'movies',
  //       element: <Movies />
  //     },
  //     {
  //       path: 'movie/:movieId',
  //       element: <Movie />
  //     },
  //     {
  //       path: 'series',
  //       element: <Series />
  //     },
  //     {
  //       path: 'serie/:serieId',
  //       element: <Serie />
  //     },
  //     {
  //       path: 'genres',
  //       element: <Genres />
  //     },
  //     {
  //       path: 'genre/genreId',
  //       element: <SearchResults />
  //     },
  //     {
  //       path: '',
  //       loader: () => redirect('home')
  //     }
  //   ]
  // },
  {
    path: "/bartender",
    element: <>
      <ScrollRestoration />
      <Bartender />
    </>,
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
    element: <>
      <ScrollRestoration />
      <CookBook />
    </>,
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
