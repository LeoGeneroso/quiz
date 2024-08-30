import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './components/Welcome'
import Category from './components/Category'
import Question from './components/Question'
import EndGame from './components/EndGame'

import './App.css'

function App() {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className='App'>
            <h1>Programming Quiz</h1>
            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Category" && <Category />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <EndGame />}
        </div>
    )
}

export default App
