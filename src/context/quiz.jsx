import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"];

const initalState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: null,
}

const quizReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };
    
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reorderedQuestions,
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            const endGame = nextQuestion >= questions.length;

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: null,
            }

        case "NEW_GAME":
            return initalState;

        case "CHECK_ANSWER":
            if (state.answerSelected) return state;

            const answer = action.payload.answer;
            const alternative = action.payload.alternative;
            let score = 0;
            
            if (answer === alternative) score = 1;

            return {
                ...state,
                score: state.score + score,
                answerSelected: action.payload.alternative,
            }

        default:
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initalState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}