//Import pantallas
import { LetterAPage } from "../pages/LearningSection/LetterAPage/LetterAPage";
import { LetterEPage } from "../pages/LearningSection/LetterEPage/LetterEPage";

export const learningRouter = [
    {
        path: "/letterA",
        element: <LetterAPage></LetterAPage>,
    },
    {
        path: "/letterE",
        element: <LetterEPage></LetterEPage>,
    },
]