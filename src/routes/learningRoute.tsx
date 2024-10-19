//Import pantallas
import { LetterAPage } from "../pages/LearningSection/LetterAPage/LetterAPage";
import { LetterEPage } from "../pages/LearningSection/LetterEPage/LetterEPage";
import { LetterIPage } from "../pages/LearningSection/LetterIPage/LetterIPage";
import { LetterOPage } from "../pages/LearningSection/LetterOPage/LetterOPage";
import { LetterSPage } from "../pages/LearningSection/LetterSPage/LetterSPage";

export const learningRouter = [
    {
        path: "/letterA",
        element: <LetterAPage></LetterAPage>,
    },
    {
        path: "/letterE",
        element: <LetterEPage></LetterEPage>,
    },
    {
        path: "/letterO",
        element: <LetterOPage></LetterOPage>,
    },
    {
        path: "/letterI",
        element: <LetterIPage></LetterIPage>,
    },
    {
        path: "/letterS",
        element: <LetterSPage></LetterSPage>,
    },
]