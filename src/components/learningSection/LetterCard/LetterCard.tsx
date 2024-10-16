import './LetterCard.css'

import letterA from '../../../assets/png/letterA.png'

export const LetterCard = () => {
    return <>
        <div className='letterCard'>
            <div className='imgSpace'>
                <img src={letterA} alt="letterA" />
            </div>

            <p><span>A</span>beja</p>
        </div>
    </>
}