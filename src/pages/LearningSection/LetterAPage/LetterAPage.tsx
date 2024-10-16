import './LetterAPage.css'

import { LetterCard } from '../../../components/learningSection/LetterCard/LetterCard'
import { LettersCarousel } from '../../../components/learningSection/LettersCarousel/LettersCarousel'

export const LetterAPage = () => {
    return <>
        <main className='page' id='LetterAPage'>
            <LettersCarousel previousLetter={''} actualLetter={'A'} followingLetter={'E'}></LettersCarousel>
            <LetterCard></LetterCard>
        </main>
    </>
}