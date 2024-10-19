import './LetterCard.css'

interface LetterCardProps {
    text: string,
    image: string,
    type: "letter" | "check" | "error"
}

export const LetterCard = ({ text, image, type }: LetterCardProps) => {
    switch (type) {
        case "letter":
            return <>
                <div className='letterCard'>
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