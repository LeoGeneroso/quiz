import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import CategoryImg from "../img/category.svg"
import "./Category.css"

const Category = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const chooseCategory = (category) => {
        dispatch({ type: "PICK_CATEGORY", payload: category });
        dispatch({ type: "REORDER_QUESTIONS" });
    }

    return (
        <div id='category'>
            <h2>Choose a category</h2>
            <p>The questions refer to one of the languages ​​below:</p>
            <div>
                {quizState.questions.map((question) => (
                    <button key={question.category} onClick={() => chooseCategory(question.category)}>{question.category}</button>
                ))}
            </div>
            <img src={CategoryImg} alt="Quiz Categories" />
        </div>
    )
}

export default Category