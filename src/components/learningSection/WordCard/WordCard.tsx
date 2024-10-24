import './WordCard.css'

import { correctEnum } from '../../../types/cardsMorse'

interface WordCardProps {
    text: string,
    stringFocus: number
    image: string,
    backgroundColor: string,
    textColor: string,
    spanColor: string,
    winState: correctEnum
}

export const WordCard = ({ text, stringFocus, image, backgroundColor, textColor, spanColor, winState }: WordCardProps) => {

    if (stringFocus === 1) {
        return <>
            <div className='wordCard'>
                <div className='imgSpace'>
                    <img src={image} alt={image} />
                </div>

                <div className='textContainer'>
                    <p style={{ color: textColor }}>
                        <span style={{ color: spanColor }}>{text.charAt(stringFocus - 1)}</span>
                        {text.slice(stringFocus)}
                    </p>
                </div>

            </div>
        </>
    } else if (stringFocus === -1) {
        return <>
            <div className='wordCard'>
                <div className='imgSpace'>
                    <img src={image} alt={image} />
                </div>

                <div className='textContainer'>
                    <p style={{ color: textColor }}>
                        {text}
                    </p>
                </div>

            </div>
        </>
    } else {
        return <>
            <div className='wordCard'>
                <div className='imgSpace'>
                    <img src={image} alt={image} />
                </div>

                <div className='textContainer'>
                    <p style={{ color: textColor }}>
                        {text.slice(0, stringFocus - 1)}
                        <span style={{ color: spanColor }}>{text.charAt(stringFocus - 1)}</span>
                        {text.slice(stringFocus)}
                    </p>
                </div>

            </div>
        </>
    }

}