import './MainPage.css'

export const MainPage = () => {
    return <>
        <main className='page'>
            <div id='superiorMenu'>
                <button id='learnButton'>
                    Aprender
                </button>

                <button id='practiceButton'>
                    Practicar
                </button>
            </div>

            <button id='abcButton'>
                Abecedario
            </button>
        </main>
    </>
}