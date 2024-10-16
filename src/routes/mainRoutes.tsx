import { MainPage } from '../pages/MainPage/MainPage';
import { LearnPage } from '../pages/LearnPage/LearnPage';
import { PracticePage } from '../pages/PracticePage/PracticePage';
import { AlphabetPage } from '../pages/AlphabetPage/AlphabetPage';
import App from '../App';

const mainRoutes = [
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/learn",
        element: <LearnPage />,
    },
    {
        path: "/practice",
        element: <PracticePage />,
    },
    {
        path: "/alphabet",
        element: <AlphabetPage />,
    },
    {
        path: "/morseReader",
        element: <App />,
    }
];

export default mainRoutes;
