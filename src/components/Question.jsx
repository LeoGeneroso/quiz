import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Alternative from './Alternative';
import './Question.css'

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectAlternative = (alternative) => {
        dispatch({ 
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, alternative },
        })
    }

    return (
        <div id="question">
            <p>Question {quizState.currentQuestion + 1} of {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="alternatives-container">
                {currentQuestion.alternatives.map((alternative) => (
                    <Alternative 
                        key={alternative} 
                        alternative={alternative} 
                        answer={currentQuestion.answer}
                        selectAlternative={() => onSelectAlternative(alternative)} 
                    />
                ))}
            </div>
            {quizState.answerSelected && (
                <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continue</button>
            )}
        </div>
    )
}

export default Question