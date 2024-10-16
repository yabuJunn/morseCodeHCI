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
    morse: string
}


export const MorseFeedback = ({ morse }: MorseFeedbackProps) => {

    switch (morse) {
        case morseLetters.A:
            return <div id="MorseFeedbackContainer">
                <div className='point'></div>
                <div className='line'></div>
            </div>


        default:
            break;
    }

    return <>

    </>
}