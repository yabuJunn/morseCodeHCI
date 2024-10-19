import './LettersCarousel.css'

interface LettersCarouselProps {
    previousLetter: string,
    actualLetter: string,
    followingLetter: string,
    backgroundColor: string
}


export const LettersCarousel = ({ previousLetter, actualLetter, followingLetter, backgroundColor }: LettersCarouselProps) => {
    return <>
        <div id="LettersCarousel">
            <div id='previousLetter'>
                <p>{previousLetter}</p>
            </div>

            <div id='actualLetter' style={{ backgroundColor: backgroundColor }}>
                <p>{actualLetter}</p>
            </div>

            <div id='followingLetter'>
                <p>{followingLetter}</p>
            </div>
        </div>
    </>
}