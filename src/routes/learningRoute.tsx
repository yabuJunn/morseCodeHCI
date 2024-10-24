//Import pantallas
import { LetterAPage } from "../pages/LearningSection/LetterAPage/LetterAPage";
import { LetterEPage } from "../pages/LearningSection/LetterEPage/LetterEPage";
import { LetterIPage } from "../pages/LearningSection/LetterIPage/LetterIPage";
import { LetterNPage } from "../pages/LearningSection/LetterNPage/LetterNPage";
import { LetterOPage } from "../pages/LearningSection/LetterOPage/LetterOPage";
import { LetterSPage } from "../pages/LearningSection/LetterSPage/LetterSPage";

import { Message1 } from "../pages/LearningSection/Message1/Message1";
import { Word1Page } from "../pages/LearningSection/Word1/Word1";
import { Word2Page } from "../pages/LearningSection/Word2Page/Word2Page";

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
    {
        path: "/letterN",
        element: <LetterNPage></LetterNPage>,
    },
    {
        path: "/word1",
        element: <Word1Page></Word1Page>,
    },
    {
        path: "/word2",
        element: <Word2Page></Word2Page>,
    },
    {
        path: "/message1",
        element: <Message1></Message1>,
    },
]