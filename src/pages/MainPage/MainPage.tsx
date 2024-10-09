import { useNavigate } from 'react-router-dom'

import './MainPage.css'

export const MainPage = () => {
    const navigation = useNavigate()

    return <>
        <main className='page'>
            <div id='superiorMenu'>
                <button id='learnButton' onClick={() => { navigation('/learn') }}>
                    Aprender
                </button>

                <button id='practiceButton' onClick={() => { navigation('/practice') }}>
                    Practicar
                </button>
            </div>

            <button id='abcButton' onClick={() => { navigation('/alphabet') }}>
                Abecedario
            </button>
        </main>

        <div id='extraButton' onClick={() => { navigation('/morseReader') }}>

        </div>
    </>
}