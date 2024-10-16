import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Import Routers
import mainRoutes from './routes/mainRoutes';
import { learningRouter } from './routes/learningRoute';


const router = createBrowserRouter([
  ...learningRouter,
  ...mainRoutes,
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
