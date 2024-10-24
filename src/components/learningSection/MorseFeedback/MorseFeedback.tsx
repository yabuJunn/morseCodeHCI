import './MorseFeedback.css'

enum morseLetters {
    A = '.-',
    B = '-...',
    C = '-.-.',
    D = '-..',
    E = '.',
    F = '..-.',
    G = '--.',
    H = '....',
    I = '..',
    J = '.---',
    K = '-.-',
    L = '.-..',
    M = '--',
    N = '-.',
    Ñ = '--.--',
    O = '---',
    P = '.--.',
    Q = '--.-',
    R = '.-.',
    S = '...',
    T = '-',
    U = '..-',
    V = '...-',
    W = '.--',
    X = '-..-',
    Y = '-.--',
    Z = '--..',
};

enum morseWords {
    oasis = '---.-........',
    esa = '.....-',
    si = '.....'
}

interface MorseFeedbackProps {
    morse: string,
    currentChar: string
}


export const MorseFeedback = ({ morse, currentChar }: MorseFeedbackProps) => {

    switch (morse) {
        case morseLetters.A:
            if (currentChar === "") {
                return <div id="MorseFeedbackContainer">
                    <div className='point'></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === ".") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === ".-") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                </div>
            } else {
                return <div id="MorseFeedbackContainer">
                    <div className='point'></div>
                    <div className='line'></div>
                </div>
            }

        case morseLetters.N:
            if (currentChar === "") {
                return <div id="MorseFeedbackContainer">
                    <div className='line'></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === "-") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === "-.") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                </div>
            } else {
                return <div id="MorseFeedbackContainer">
                    <div className='line'></div>
                    <div className='point'></div>
                </div>
            }

        case morseLetters.E:
            if (currentChar === "") {
                return <div id="MorseFeedbackContainer">
                    <div className='point'></div>
                </div>
            } else if (currentChar === ".") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                </div>
            } else {
                return <div id="MorseFeedbackContainer">
                    <div className='point'></div>
                </div>
            }

        case morseLetters.O:
            if (currentChar === "") {
                return <div id="MorseFeedbackContainer">
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === "-") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === "--") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === "---") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                </div>
            } else {
                return <div id="MorseFeedbackContainer">
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            }

        case morseLetters.I:
            if (currentChar === "") {
                return <div id="MorseFeedbackContainer">
                    <div className='point'></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === ".") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === "..") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                </div>
            } else {
                return <div id="MorseFeedbackContainer">
                    <div className='point'></div>
                    <div className='point'></div>
                </div>
            }

        case morseLetters.S:
            if (currentChar === "") {
                return <div id="MorseFeedbackContainer">
                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === ".") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === "..") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === "...") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                </div>
            } else {
                return <div id="MorseFeedbackContainer">
                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>
                </div>
            }

        case morseWords.oasis:
            if (currentChar === "") {
                return <div id="MorseFeedbackContainer">
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='line'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "-") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line'></div>
                    <div className='line'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='line'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "--") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='line'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='line'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---.") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---.-") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---.-.") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---.-..") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---.-...") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---.-....") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---.-.....") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---.-......") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---.-.......") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line' style={{ backgroundColor: '#F0D867' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>

                </div>
            } else if (currentChar === "---.-........") {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='line' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='line' style={{ backgroundColor: '#3FFD00' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='line' style={{ backgroundColor: '#3FFD00' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>

                </div>
            } else {
                return <div id="MorseFeedbackContainer">
                    <div className='line' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='line' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='line' style={{ backgroundColor: '#FF0000' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='line' style={{ backgroundColor: '#FF0000' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>

                </div>
            }
        case morseWords.esa:
            if (currentChar === "") {
                return <div id="MorseFeedbackContainer">
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === ".") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === "..") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === "...") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === "....") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === ".....") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='line'></div>
                </div>
            } else if (currentChar === ".....-") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='line' style={{ backgroundColor: '#3FFD00' }}></div>
                </div>
            } else {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='line' style={{ backgroundColor: '#FF0000' }}></div>
                </div>
            }
        case morseWords.si:
            if (currentChar === "") {
                return <div id="MorseFeedbackContainer">
                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === ".") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === "..") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === "...") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point'></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === "....") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#61D2FF' }}></div>
                    <div className='point'></div>
                </div>
            } else if (currentChar === ".....") {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>

                    <div className='space'></div>

                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                    <div className='point' style={{ backgroundColor: '#3FFD00' }}></div>
                </div>
            } else {
                return <div id="MorseFeedbackContainer">
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>

                    <div className='space' style={{ backgroundColor: '#FF0000' }}></div>

                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                    <div className='point' style={{ backgroundColor: '#FF0000' }}></div>
                </div>
            }
        default:
            break;
    }

    return <>

    </>
}