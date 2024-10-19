import './LetterCard.css'

interface LetterCardProps {
    text: string,
    image: string,
    type: "letter" | "check" | "error",
    backgroundColor: string,
    textColor: string,
    spanColor: string
}

export const LetterCard = ({ text, image, type, backgroundColor, textColor, spanColor }: LetterCardProps) => {
    switch (type) {
        case "letter":
            return <>
                <div className='letterCard' style={{ backgroundColor: backgroundColor }}>
                    <div className='imgSpace'>
                        <img src={image} alt="letterA" />
                    </div>

                    <p style={{ color: textColor }}>
                        <span style={{ color: spanColor }}>{text.charAt(0)}</span>
                        {text.slice(1)}
                    </p>
                </div>
            </>
        default:
            break;
    }

}