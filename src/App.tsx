import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

interface ButtonStatusType {
  lineButton: number;
  pointButton: number;
}

const morseCodeMap: Record<string, string> = {
  'dot': '.',
  'dash': '-',
};

const App = () => {
  const [buttonStatus, setButtonStatus] = useState<ButtonStatusType | undefined>()
  const [morseMessage, setMorseMessage] = useState<string>('')
  const [currentChar, setCurrentChar] = useState<string>('')
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const socket = io('http://localhost:5050')

    socket.on('buttonStatus', (data: ButtonStatusType) => {
      setButtonStatus(data)
      console.log(buttonStatus)
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
      const updatedChar = prevChar + morseCodeMap[type]

      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current)


      timeoutIdRef.current = setTimeout(() => {
        const translatedChar = translateMorseToLetter(updatedChar)

        if (translatedChar) {
          setMorseMessage((prevMessage) => {

            if (prevMessage.endsWith(translatedChar)) {
              return prevMessage
            }
            return prevMessage + translatedChar
          });
        }

        setCurrentChar('')
      }, 1500)

      return updatedChar
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

    return morseToLetterMap[morse] || ''
  };

  return (
    <div>
      <h1>{morseMessage || 'Morse code reader react'}</h1>
      <h2>{currentChar || 'Esperando...'}</h2>
      <p>Mira la consola para ver los datos recibidos del servidor.</p>
    </div>
  );
};

export default App
