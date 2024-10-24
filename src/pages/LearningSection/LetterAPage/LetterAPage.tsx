import './LetterAPage.css'
import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { LetterCard } from '../../../components/learningSection/LetterCard/LetterCard'
import { LettersCarousel } from '../../../components/learningSection/LettersCarousel/LettersCarousel'
import { MorseFeedback } from '../../../components/learningSection/MorseFeedback/MorseFeedback'
import { useNavigate } from 'react-router-dom';

//Import Images
import letterAImage from '../../../assets/png/letterA.png'
import { correctEnum } from '../../../types/cardsMorse';

import dotSound from '../../../assets/mp3/dot-sound.mp3'
import dashSound from '../../../assets/mp3/dash-sound.mp3'

interface ButtonStatusType {
    lineButton: number;
    pointButton: number;
}

const morseCodeMap: Record<string, string> = {
    'dot': '.',
    'dash': '-',
};

export const LetterAPage = () => {
    const navigate = useNavigate()
    const [buttonStatus, setButtonStatus] = useState<ButtonStatusType | undefined>()
    const [currentChar, setCurrentChar] = useState<string>('')
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

    const [correctStatus, setcorrectStatus] = useState<correctEnum>(correctEnum.undefined)

    // Creamos las referencias para los sonidos
    const dotSoundRef = useRef<HTMLAudioElement | null>(null);
    const dashSoundRef = useRef<HTMLAudioElement | null>(null);

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

        if (type === 'dot' && dotSoundRef.current) {
            dotSoundRef.current.play();
        } else if (type === 'dash' && dashSoundRef.current) {
            console.log("Suena punto");
            dashSoundRef.current.play();
        }

        setCurrentChar((prevChar) => {
            const updatedChar = prevChar + morseCodeMap[type];

            if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

            if (updatedChar === '.-') {
                setcorrectStatus(correctEnum.correct)

                setTimeout(() => {
                    navigate('/letterE');
                }, 500);
            } else {
                timeoutIdRef.current = setTimeout(() => {
                    setCurrentChar('');
                }, 2500);
            }

            return updatedChar;
        });
    };

    return (
        <main className='page' id='LetterAPage'>
            <LettersCarousel previousLetter={''} actualLetter={'A'} followingLetter={'E'} backgroundColor={''}></LettersCarousel>
            <LetterCard text={'Abeja'} image={letterAImage} type={'letter'} backgroundColor={''} textColor={''} spanColor={''} winState={correctStatus}></LetterCard>
            <MorseFeedback morse={'.-'} currentChar={currentChar}></MorseFeedback>

            <audio ref={dotSoundRef} >
                <source src={dotSound} type="audio/mpeg" />
            </audio>
            <audio ref={dashSoundRef} >
                <source src={dashSound} type="audio/mpeg" />
            </audio>
        </main>
    );
}
