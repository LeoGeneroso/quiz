import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome'
import Question from './components/Question'
import EndGame from './components/EndGame';

import './App.css'

function App() {
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
        dispatch({ type: "REORDER_QUESTIONS" });
    }, []);

    return (
        <div className='App'>
            <h1>Programming Quiz</h1>
            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <EndGame />}
        </div>
    )
}

export default App
