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
            break

        default:
            break;
    }

    return <>

    </>
}