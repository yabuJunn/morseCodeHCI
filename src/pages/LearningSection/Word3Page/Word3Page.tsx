import './Word3Page.css'

import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { MorseFeedback } from '../../../components/learningSection/MorseFeedback/MorseFeedback'
import { useNavigate } from 'react-router-dom';

//Import Images
import letterSImage from '../../../assets/png/letterS.png'
import letterIImage from '../../../assets/png/letterI.png'

import incorrectImage from '../../../assets/png/incorrect.png'
import correctImage from '../../../assets/png/correct.png'

import { correctEnum } from '../../../types/cardsMorse';
import { WordCard } from '../../../components/learningSection/WordCard/WordCard';

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

export const Word3Page = () => {

    const navigate = useNavigate()
    const [buttonStatus, setButtonStatus] = useState<ButtonStatusType | undefined>()
    const [currentChar, setCurrentChar] = useState<string>('')
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

    const [correctStatus, setcorrectStatus] = useState<correctEnum>(correctEnum.undefined)

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
            dashSoundRef.current.play();
        }

        setCurrentChar((prevChar) => {
            const updatedChar = prevChar + morseCodeMap[type];

            if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

            if (updatedChar === '.....') {
                console.log("Hola")
                setcorrectStatus(correctEnum.correct)

                setTimeout(() => {
                    console.log("Adios")
                    navigate('/word4');
                }, 500);
            } else {

                timeoutIdRef.current = setTimeout(() => {

                    setCurrentChar('');
                }, 2500);
            }

            return updatedChar;
        });
    };

    if (currentChar === "" || currentChar === "." || currentChar === "..") {
        return <>
            <main className='page' id='Word3Page'>
                <WordCard text={'Si'} stringFocus={1} image={letterSImage} backgroundColor={'#7FD6C3'} textColor={'#828181'} spanColor={'#1C1C1C'} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'.....'} currentChar={currentChar}></MorseFeedback>

                <audio ref={dotSoundRef} >
                    <source src={dotSound} type="audio/mpeg" />
                </audio>
                <audio ref={dashSoundRef} >
                    <source src={dashSound} type="audio/mpeg" />
                </audio>
            </main>
        </>
    } else if (currentChar === "..." || currentChar === "....") {
        return <>
            <main className='page' id='Word3Page'>
                <WordCard text={'Si'} stringFocus={2} image={letterIImage} backgroundColor={'#7FD6C3'} textColor={'#828181'} spanColor={'#1C1C1C'} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'.....'} currentChar={currentChar}></MorseFeedback>

                <audio ref={dotSoundRef} >
                    <source src={dotSound} type="audio/mpeg" />
                </audio>
                <audio ref={dashSoundRef} >
                    <source src={dashSound} type="audio/mpeg" />
                </audio>
            </main>
        </>
    } else if (currentChar === ".....") {
        return <>
            <main className='page' id='Word3Page'>
                <WordCard text={'Si'} stringFocus={2} image={correctImage} backgroundColor={'#7FD6C3'} textColor={'#828181'} spanColor={'#1C1C1C'} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'.....'} currentChar={currentChar}></MorseFeedback>

                <audio ref={dotSoundRef} >
                    <source src={dotSound} type="audio/mpeg" />
                </audio>
                <audio ref={dashSoundRef} >
                    <source src={dashSound} type="audio/mpeg" />
                </audio>
            </main>
        </>
    } else {
        return <>
            <main className='page' id='Word3Page'>
                <WordCard text={'Esa'} stringFocus={-1} image={incorrectImage} backgroundColor={'#7FD6C3'} textColor={'#828181'} spanColor={'#1C1C1C'} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'.....'} currentChar={currentChar}></MorseFeedback>

                <audio ref={dotSoundRef} >
                    <source src={dotSound} type="audio/mpeg" />
                </audio>
                <audio ref={dashSoundRef} >
                    <source src={dashSound} type="audio/mpeg" />
                </audio>
            </main>
        </>
    }

}