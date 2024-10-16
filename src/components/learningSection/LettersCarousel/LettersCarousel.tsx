import './LettersCarousel.css'

interface LettersCarouselProps {
    previousLetter: string,
    actualLetter: string,
    followingLetter: string
}


export const LettersCarousel = ({ previousLetter, actualLetter, followingLetter }: LettersCarouselProps) => {
    return <>
        <div id="LettersCarousel">
            <div id='previousLetter'>
                <p>{previousLetter}</p>
            </div>

            <div id='actualLetter'>
                <p>{actualLetter}</p>
            </div>

            <div id='followingLetter'>
                <p>{followingLetter}</p>
            </div>
        </div>
    </>
}