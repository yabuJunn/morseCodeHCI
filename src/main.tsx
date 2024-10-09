import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Import Pages
import App from './App'
import { MainPage } from './pages/MainPage/MainPage';
import { LearnPage } from './pages/LearnPage/LearnPage';
import { PracticePage } from './pages/PracticePage/PracticePage';
import { AlphabetPage } from './pages/AlphabetPage/AlphabetPage';

const router = createBrowserRouter([
  {
    path: "/morseReader",
    element: <App></App>,
  }, {
    path: "/",
    element: <MainPage></MainPage>,
  },
  {
    path: "/learn",
    element: <LearnPage></LearnPage>,
  },
  {
    path: "/practice",
    element: <PracticePage></PracticePage>,
  },
  {
    path: "/alphabet",
    element: <AlphabetPage></AlphabetPage>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
