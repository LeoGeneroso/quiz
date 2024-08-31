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
                    (!quizState.alternativeToHide || (quizState.alternativeToHide !== alternative)) && (
                    <Alternative 
                        key={alternative} 
                        alternative={alternative} 
                        answer={currentQuestion.answer}
                        selectAlternative={() => onSelectAlternative(alternative)} 
                    />)
                ))}
            </div>
            {!quizState.answerSelected && !quizState.help && (
                <>
                    {currentQuestion.tip && (<button onClick={() => dispatch({ type: "SHOW_TIP" })}>Hint</button>)}
                    <button onClick={() => dispatch({ type: "REMOVE_ALTERNATIVE" })}>Remove one</button>
                </>
            )}
            {!quizState.answerSelected && quizState.help === "hint" && (
                <p>{currentQuestion.tip}</p>)
            }
            {quizState.answerSelected && (
                <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continue</button>
            )}
        </div>
    )
}

export default Question