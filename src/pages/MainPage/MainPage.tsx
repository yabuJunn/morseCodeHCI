import { useNavigate } from 'react-router-dom'

import './MainPage.css'

export const MainPage = () => {
    const navigation = useNavigate()

    return <>
        <main className='page' id='mainPage'>
            <div id='superiorMenu'>
                <button id='learnButton' onClick={() => { navigation('/letterA') }}>
                    Aprender
                </button>

                <button id='practiceButton' onClick={() => { navigation('/practice') }}>
                    Practicar
                </button>
            </div>

            <button id='abcButton' onClick={() => { navigation('/alphabet') }}>
                Abecedario, ABCDEFGHIJK
            </button>
        </main>

        <div id='extraButton' onClick={() => { navigation('/morseReader') }}>

        </div>
    </>
}