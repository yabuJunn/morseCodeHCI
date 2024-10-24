import './Message1.css'

import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { MorseFeedback } from '../../../components/learningSection/MorseFeedback/MorseFeedback'

import nextImg from '../../../assets/svg/iconNextArrow.svg'

interface ButtonStatusType {
    lineButton: number;
    pointButton: number;
}

const morseCodeMap: Record<string, string> = {
    'dot': '.',
    'dash': '-',
};

export const Message1 = () => {

    const navigate = useNavigate()
    const [buttonStatus, setButtonStatus] = useState<ButtonStatusType | undefined>()
    const [currentChar, setCurrentChar] = useState<string>('')
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

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
                
                setTimeout(() => {
                    navigate('/word1');
                }, 500);
            } else {
                
                timeoutIdRef.current = setTimeout(() => {
                    
                    setCurrentChar('');
                }, 2500);
            }

            return updatedChar;
        });
    };

    return <>
        <main className='page' id='Message1Page'>
            <h2>Ahora te daremos una secuencia corta de palabras con las letras en morse que acabas de aprender.</h2>
            <div id='nextButton'>
                <img src={nextImg} alt="" />
            </div>

            <MorseFeedback morse={'.'} currentChar={currentChar}></MorseFeedback>
        </main>
    </>
}