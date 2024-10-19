import './LetterCard.css'

interface LetterCardProps {
    text: string,
    image: string,
    type: "letter" | "check" | "error",
    backgroundColor: string
}

export const LetterCard = ({ text, image, type, backgroundColor }: LetterCardProps) => {
    switch (type) {
        case "letter":
            return <>
                <div className='letterCard' style={{ backgroundColor: backgroundColor }}>
                    <div className='imgSpace'>
                        <img src={image} alt="letterA" />
                    </div>

                    <p>
                        <span>{text.charAt(0)}</span>
                        {text.slice(1)}
                    </p>
                </div>
            </>
        default:
            break;
    }

}