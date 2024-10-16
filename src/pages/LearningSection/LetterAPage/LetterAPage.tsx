import './LetterAPage.css'

import { LetterCard } from '../../../components/learningSection/LetterCard/LetterCard'
import { LettersCarousel } from '../../../components/learningSection/LettersCarousel/LettersCarousel'
import { MorseFeedback } from '../../../components/learningSection/MorseFeedback/MorseFeedback'

export const LetterAPage = () => {
    return <>
        <main className='page' id='LetterAPage'>
            <LettersCarousel previousLetter={''} actualLetter={'A'} followingLetter={'E'}></LettersCarousel>
            <LetterCard></LetterCard>
            <MorseFeedback morse={'.-'}></MorseFeedback>
        </main>
    </>
}