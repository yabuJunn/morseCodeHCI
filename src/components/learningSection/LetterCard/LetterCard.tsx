import { correctEnum } from '../../../types/cardsMorse';
import './LetterCard.css'

interface LetterCardProps {
    text: string,
    image: string,
    type: "letter" | "check" | "error",
    backgroundColor: string,
    textColor: string,
    spanColor: string,
    winState: correctEnum
}

import checkImage from '../../../assets/png/correct.png'

export const LetterCard = ({ text, image, type, backgroundColor, textColor, spanColor, winState }: LetterCardProps) => {
    switch (type) {
        case "letter":
            if (winState === correctEnum.correct) {
                return <>
                    <div className='letterCard' style={{ backgroundColor: backgroundColor }}>
                        <div className='imgSpace'>
                            <img src={checkImage} alt={image} />
                        </div>

                        <p style={{ color: textColor }}>
                            <span style={{ color: spanColor }}>{text.charAt(0)}</span>
                            {text.slice(1)}
                        </p>
                    </div>
                </>
            } else if (winState === correctEnum.undefined) {
                return <>
                    <div className='letterCard' style={{ backgroundColor: backgroundColor }}>
                        <div className='imgSpace'>
                            <img src={image} alt={image} />
                        </div>

                        <p style={{ color: textColor }}>
                            <span style={{ color: spanColor }}>{text.charAt(0)}</span>
                            {text.slice(1)}
                        </p>
                    </div>
                </>
            }
            break;
        default:
            break;
    }

}