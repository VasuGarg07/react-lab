import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import App from './pages/App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import AniQuote from './pages/AniQuote.tsx';
import ShadowGenerator from './pages/ShadowGenerator.tsx';
import ColorGen from './pages/ColorGen.tsx';


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
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <CssBaseline />
  </React.StrictMode>,
)
