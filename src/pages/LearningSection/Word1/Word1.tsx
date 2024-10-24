import './Word1.css'

import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { LetterCard } from '../../../components/learningSection/LetterCard/LetterCard'
import { LettersCarousel } from '../../../components/learningSection/LettersCarousel/LettersCarousel'
import { MorseFeedback } from '../../../components/learningSection/MorseFeedback/MorseFeedback'
import { useNavigate } from 'react-router-dom';

//Import Images
import letterSImage from '../../../assets/png/letterS.png'
import letterOImage from '../../../assets/png/letterO.png'
import letterAImage from '../../../assets/png/letterA.png'
import letterIImage from '../../../assets/png/letterI.png'

import incorrectImage from '../../../assets/png/incorrect.png'
import correctImage from '../../../assets/png/correct.png'

import { correctEnum } from '../../../types/cardsMorse';
import { WordCard } from '../../../components/learningSection/WordCard/WordCard';

interface ButtonStatusType {
    lineButton: number;
    pointButton: number;
}

const morseCodeMap: Record<string, string> = {
    'dot': '.',
    'dash': '-',
};

export const Word1Page = () => {

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

            if (updatedChar === '---.-........') {
                setcorrectStatus(correctEnum.correct)

                setTimeout(() => {
                    navigate('/word2');
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

    if (currentChar === "" || currentChar === "-" || currentChar === "--") {
        return <>
            <main className='page' id='Word1Page'>
                <WordCard text={'Oasis'} stringFocus={1} image={letterOImage} backgroundColor={''} textColor={''} spanColor={''} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'---.-........'} currentChar={currentChar}></MorseFeedback>
            </main>
        </>
    } else if (currentChar === "---" || currentChar === "---.") {
        return <>
            <main className='page' id='Word1Page'>
                <WordCard text={'Oasis'} stringFocus={2} image={letterAImage} backgroundColor={''} textColor={''} spanColor={''} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'---.-........'} currentChar={currentChar}></MorseFeedback>
            </main>
        </>
    } else if (currentChar === "---.-" || currentChar === "---.-." || currentChar === "---.-..") {
        return <>
            <main className='page' id='Word1Page'>
                <WordCard text={'Oasis'} stringFocus={3} image={letterSImage} backgroundColor={''} textColor={''} spanColor={''} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'---.-........'} currentChar={currentChar}></MorseFeedback>
            </main>
        </>
    } else if (currentChar === "---.-..." || currentChar === "---.-....") {
        return <>
            <main className='page' id='Word1Page'>
                <WordCard text={'Oasis'} stringFocus={4} image={letterIImage} backgroundColor={''} textColor={''} spanColor={''} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'---.-........'} currentChar={currentChar}></MorseFeedback>
            </main>
        </>
    } else if (currentChar === "---.-....." || currentChar === "---.-......" || currentChar === "---.-.......") {
        return <>
            <main className='page' id='Word1Page'>
                <WordCard text={'Oasis'} stringFocus={5} image={letterSImage} backgroundColor={''} textColor={''} spanColor={''} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'---.-........'} currentChar={currentChar}></MorseFeedback>
            </main>
        </>
    } else if (currentChar === "---.-........") {
        return <>
            <main className='page' id='Word1Page'>
                <WordCard text={'Oasis'} stringFocus={6} image={correctImage} backgroundColor={''} textColor={''} spanColor={''} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'---.-........'} currentChar={currentChar}></MorseFeedback>
            </main>
        </>
    } else {
        return <>
            <main className='page' id='Word1Page'>
                <WordCard text={'Oasis'} stringFocus={-1} image={incorrectImage} backgroundColor={''} textColor={''} spanColor={''} winState={correctEnum.undefined}></WordCard>
                <MorseFeedback morse={'---.-........'} currentChar={currentChar}></MorseFeedback>
            </main>
        </>
    }

}