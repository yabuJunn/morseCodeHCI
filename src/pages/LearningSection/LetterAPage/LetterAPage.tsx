import './LetterAPage.css'
import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { LetterCard } from '../../../components/learningSection/LetterCard/LetterCard'
import { LettersCarousel } from '../../../components/learningSection/LettersCarousel/LettersCarousel'
import { MorseFeedback } from '../../../components/learningSection/MorseFeedback/MorseFeedback'
import { useNavigate } from 'react-router-dom';

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
        console.log(detectedLetter)

        if (data.lineButton === 1) {
            handleMorseInput('dash')
        } else if (data.pointButton === 1) {
            handleMorseInput('dot')
        }
    };

    const handleMorseInput = (type: 'dot' | 'dash') => {
        console.log(type)
        console.log(currentChar)
        console.log(buttonStatus)
        setCurrentChar((prevChar) => {
            const updatedChar = prevChar + morseCodeMap[type];

            if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

            timeoutIdRef.current = setTimeout(() => {
                const translatedChar = translateMorseToLetter(updatedChar);

                if (translatedChar === 'A') {
                    setDetectedLetter('A'); // Si se detecta "A", actualizamos el estado
                    alert('A')
                    setTimeout(() => {
                        navigate('/')
                    }, 3000);
                } else {
                    alert('Error')
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
        <main className='page' id='LetterAPage'>
            <LettersCarousel previousLetter={''} actualLetter={'A'} followingLetter={'E'}></LettersCarousel>
            <LetterCard></LetterCard>
            <MorseFeedback morse={'.-'} currentChar={currentChar}></MorseFeedback>
        </main>
    );
}
