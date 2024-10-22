import './LetterEPage.css'
import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { LetterCard } from '../../../components/learningSection/LetterCard/LetterCard'
import { LettersCarousel } from '../../../components/learningSection/LettersCarousel/LettersCarousel'
import { MorseFeedback } from '../../../components/learningSection/MorseFeedback/MorseFeedback'
import { useNavigate } from 'react-router-dom';

//Import Images
import letterEImage from '../../../assets/png/letterE.png'
import { correctEnum } from '../../../types/cardsMorse';

interface ButtonStatusType {
    lineButton: number;
    pointButton: number;
}

const morseCodeMap: Record<string, string> = {
    'dot': '.',
    'dash': '-',
};

export const LetterEPage = () => {
    const navigate = useNavigate()
    const [buttonStatus, setButtonStatus] = useState<ButtonStatusType | undefined>()
    const [currentChar, setCurrentChar] = useState<string>('')
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

    const [correctStatus, setcorrectStatus] = useState<correctEnum>(correctEnum.undefined)

    useEffect(() => {
        const socket = io('http://localhost:5050')

        socket.on('buttonStatus', (data: ButtonStatusType) => {
            setButtonStatus(data)
            handleButtonPress(data)
        });

        return () => {
            socket.disconnect()
            if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current)
        };
    }, [])

    const handleButtonPress = (data: ButtonStatusType) => {
        if (data.lineButton === 1) {
            handleMorseInput('dash')
        } else if (data.pointButton === 1) {
            handleMorseInput('dot')
        }
    };

    const handleMorseInput = (type: 'dot' | 'dash') => {

        setCurrentChar((prevChar) => {
            const updatedChar = prevChar + morseCodeMap[type];

            if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

            if (updatedChar === '.') {
                setcorrectStatus(correctEnum.correct)
                
                setTimeout(() => {
                    navigate('/letterO');
                }, 500);
            } else {
                
                timeoutIdRef.current = setTimeout(() => {
                    
                    setCurrentChar('');
                }, 2500);
            }

            return updatedChar;
        });
    };

    console.log(currentChar)
    return (
        <main className='page' id='LetterEPage'>
            <LettersCarousel previousLetter={'A'} actualLetter={'E'} followingLetter={'O'} backgroundColor={''}></LettersCarousel>
            <LetterCard text={'Estrella'} image={letterEImage} type={'letter'} backgroundColor={''} textColor={''} spanColor={''} winState={correctStatus}></LetterCard>
            <MorseFeedback morse={'.'} currentChar={currentChar}></MorseFeedback>
        </main>
    );
}