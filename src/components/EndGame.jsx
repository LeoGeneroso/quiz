import { useContext } from 'react';
import { QuizContext } from '../context/quiz'
import WellDone from '../img/welldone.svg'
import './EndGame.css'

const EndGame = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    
    return (
        <div id="endgame">
            <h2>Quiz Completed!</h2>
            <p>Score: {quizState.score * 100 / quizState.questions.length}%</p>
            <p>You got {quizState.score} out of {quizState.questions.length} questions right</p>
            <img src={WellDone} alt="Quiz Completed" />
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>Restart</button>
        </div>
    )
}

export default EndGame