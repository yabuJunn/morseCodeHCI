import './LetterEPage.css'

import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { LetterCard } from '../../../components/learningSection/LetterCard/LetterCard'
import { LettersCarousel } from '../../../components/learningSection/LettersCarousel/LettersCarousel'
import { MorseFeedback } from '../../../components/learningSection/MorseFeedback/MorseFeedback'
import { useNavigate } from 'react-router-dom';

//Import Images
import letterEImage from '../../../assets/png/letterE.png'

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
    const [currentChar, setCurrentChar] = useState<string>('') // Carácter Morse actual
    const [detectedLetter, setDetectedLetter] = useState<string>('') // Letra detectada
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const socket = io('http://localhost:5050') // Se conecta al servidor que envía los datos

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

            timeoutIdRef.current = setTimeout(() => {
                const translatedChar = translateMorseToLetter(updatedChar);

                if (translatedChar === 'E') {
                    setDetectedLetter('E'); // Si se detecta "A", actualizamos el estado
                    setTimeout(() => {
                        navigate('/letterO')
                    }, 500);
                } else {

                    setCurrentChar('')
                    setDetectedLetter('');
                }

                setCurrentChar(''); // Reinicia el carácter Morse para la siguiente entrada
            }, 2500);

            return updatedChar;
        });
    };

    const translateMorseToLetter = (morse: string) => {
        const morseToLetterMap: Record<string, string> = {
            '.-': 'A',
            '-...': 'B',
            '-.-.': 'C',
            '-..': 'D',
            '.': 'E',
            '..-.': 'F',
            '--.': 'G',
            '....': 'H',
            '..': 'I',
            '.---': 'J',
            '-.-': 'K',
            '.-..': 'L',
            '--': 'M',
            '-.': 'N',
            '--.--': 'Ñ',
            '---': 'O',
            '.--.': 'P',
            '--.-': 'Q',
            '.-.': 'R',
            '...': 'S',
            '-': 'T',
            '..-': 'U',
            '...-': 'V',
            '.--': 'W',
            '-..-': 'X',
            '-.--': 'Y',
            '--..': 'Z',
        };

        return morseToLetterMap[morse] || '';
    };

    return (
        <main className='page' id='LetterEPage'>
            <LettersCarousel previousLetter={'A'} actualLetter={'E'} followingLetter={'O'} backgroundColor={''}></LettersCarousel>
            <LetterCard text={'Estrella'} image={letterEImage} type={'letter'} backgroundColor={''}></LetterCard>
            <MorseFeedback morse={'.'} currentChar={currentChar}></MorseFeedback>
        </main>
    );
}
