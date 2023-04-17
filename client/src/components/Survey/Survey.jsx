import React, { useState } from "react"
import { Button } from "react-bootstrap"
import EasyExercise from '../Table/EasyExercise'
import MediumExercise from '../Table/MediumExercise'

import "./Survey.css"

function Survey() {
    const questions = [
        {
            questionText: "What is a type Aerobic Exercises?",
            answerOptions: [
                { answerText: 'Cycling', isCorrect: true },
                { answerText: 'Sitting on the Sofa', isCorrect: false },
                { answerText: 'Talking', isCorrect: false },
                { answerText: 'Thinking', isCorrect: false },
            ],
        },
        {
            questionText: "The two types of stretches are :",
            answerOptions: [
                { answerText: 'Limber and flexibilty', isCorrect: false },
                { answerText: 'Dynamic and Static', isCorrect: true },
                { answerText: 'Further and then Further', isCorrect: false },
                { answerText: 'Stand and Hold', isCorrect: false },
            ],
        },
        {
            questionText: "Anaerobic exercises do what?",
            answerOptions: [
                { answerText: 'Strength and Resistance', isCorrect: false },
                { answerText: 'Tone and Improve Bone Strength', isCorrect: false },
                { answerText: 'Improves Balance and Coordination', isCorrect: false },
                { answerText: 'All of the Above', isCorrect: true },
            ],
        },
        {
            questionText: "The four areas of physical exercise include:",
            answerOptions: [
                { answerText: 'Accuracy, Power, Movement and Momentum', isCorrect: false },
                { answerText: 'Accuracy, Power, Agility, and Speed', isCorrect: true },
                { answerText: 'Power, Speed, Flexibilty, and Momentum', isCorrect: false },
                { answerText: 'Speed, Power, Agility, and Movement', isCorrect: false },
            ],
        },
        {
            questionText: "What is the recommended about of exercise to get per DAY?",
            answerOptions: [
                { answerText: 'at least 30 minutes', isCorrect: true },
                { answerText: 'at least 45 minutes', isCorrect: false },
                { answerText: 'at least 35 minutes', isCorrect: false },
                { answerText: 'none of the above', isCorrect: false },
            ],
        },
    ]
    
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    // setting the score for the user to see
    const [score, setScore] = useState(0)
    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1)
            // makes the questions continue
        }
        const nextQuestion = currentQuestion + 1
        // if the next number is less than the total number then do this
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true)
        }
    }
    return (
        <div className="bg-dark container mt-5 mb-5">
            {/* replaced false with the logic to display the score when the user answered all the questions */}
            {showScore ? (
                <div className="score-section text-danger row"><h5 className="score">You have {score} out of {questions.length}</h5>
                    <div className="scoreInfo">
                        {score <= 2 ? <EasyExercise/> : <MediumExercise/>}
                    </div>
                </div>
            ) : (
                    <div className="question-section text-danger">
                        <div className="question-cont text-danger">
                            {/* shows the correct question for the */}
                            <span>Question {currentQuestion + 1}</span>/ {questions.length}
                        </div>
                        {/* is only for the first one */}
                        <h5 className="question-text text-danger">{questions[currentQuestion].questionText}
                        </h5>
                        <div className="answer-section text-center">
                            {/* runs four times to get four buttons */}
                            {questions[currentQuestion].answerOptions.map((answerOption, i) => <Button key={i} variant="outline-danger" size="lg" className="ml-4" onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>)}
                        </div>
                    </div>
                )}
        </div>
    )
}
export default Survey