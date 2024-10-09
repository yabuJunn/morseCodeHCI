import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Import Pages
import App from './App'
import { MainPage } from './pages/MainPage/MainPage';

const router = createBrowserRouter([
  {
    path: "/morseReader",
    element: <App></App>,
  }, {
    path: "/",
    element: <MainPage></MainPage>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
