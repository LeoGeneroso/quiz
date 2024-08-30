import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import './Alternative.css'

const Alternative = ({ alternative, selectAlternative, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className={`alternative ${quizState.answerSelected && quizState.answerSelected === alternative && alternative === answer ? 'correctSelected' : '' }
                                     ${quizState.answerSelected && quizState.answerSelected !== alternative && alternative === answer ? 'correctUnselected' : '' }
                                     ${quizState.answerSelected && quizState.answerSelected === alternative && alternative !== answer ? 'wrong' : '' }
                                     ${quizState.answerSelected && quizState.answerSelected !== alternative && alternative !== answer ? 'others' : '' }`} onClick={() => selectAlternative()}>
            <p>{alternative}</p>
        </div>
    )
}

export default Alternative