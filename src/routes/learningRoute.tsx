//Import pantallas
import { LetterAPage } from "../pages/LearningSection/LetterAPage/LetterAPage";
import { LetterEPage } from "../pages/LearningSection/LetterEPage/LetterEPage";
import { LetterOPage } from "../pages/LearningSection/LetterOPage/LetterOPage";

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
]