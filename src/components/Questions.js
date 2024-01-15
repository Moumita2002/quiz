import React, { useState, useEffect } from 'react';
import data from '../database/data';
import NavigationPanel from './NavigationPanel';
import Result from './Result';

// Questions component
const Questions = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [checked, setChecked] = useState(undefined);
    const [timeRemaining, setTimeRemaining] = useState(30 * 60);
    const [visitedQuestions, setVisitedQuestions] = useState([]);
    const [attemptedQuestions, setAttemptedQuestions] = useState([]);
    const [answers, setAnswers] = useState(Array(data.length).fill(undefined));
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = data[questionIndex];
    const options = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [questionIndex]);

    useEffect(() => {
        if (timeRemaining === 0) {
            console.log('Time is up!');
        }
    }, [timeRemaining]);

    const onSelect = (value) => {
        console.log('Radio button changed:', value);
        setChecked(value);
    };

    const submitAnswers = () => {
        const answerObject = {
            questionIndex: questionIndex,
            selectedAnswer: checked,
        };

        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[questionIndex] = checked;
            return updatedAnswers;
        });

        if (questionIndex === data.length - 1) {
            setShowResults(true);
        } else {
            setVisitedQuestions([...visitedQuestions, questionIndex + 1]);
            setAttemptedQuestions([...attemptedQuestions, questionIndex + 1]);
            setQuestionIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex));
            setChecked(undefined);
        }
    };

    const navigateToQuestion = (questionNumber) => {
        setQuestionIndex(questionNumber - 1);
        setChecked(undefined);
    };

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    const questionCounter = `${questionIndex + 1}/${data.length}`;

    return (
        <div className='questions-container'>
            {showResults ? (
                <Result userAnswers={answers} correctAnswers={data.map(q => q.correct_answer)} questions={data} />
            ) : (
                <div className='questions'>
                    <div className='timer'>
                        Time Remaining: {`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}⏳
                    </div>
                    <div className='question-counter'>{questionCounter}</div>
                    <h2 className='text-light'>{currentQuestion.question}</h2>

                    <ul key={currentQuestion.id}>
                        {options.map((q, i) => (
                            <li key={i}>
                                <input
                                    type='radio'
                                    value={q}
                                    name='options'
                                    id={`q${i}-option`}
                                    onChange={() => onSelect(q)}
                                    checked={q === checked}
                                />
                                <label className='text-primary' htmlFor={`q${i}-option`}>
                                    {q}
                                </label>
                                <div className='check'></div>
                            </li>
                        ))}
                    </ul>
                    <div className='grid'>
                        {questionIndex === data.length - 1 ? (
                            <button className='btn submit' onClick={submitAnswers}>
                                Submit
                            </button>
                        ) : (
                            <button className='btn prev' onClick={submitAnswers} disabled={questionIndex === data.length - 1}>
                                Next Question

                            </button>
                        )}

                    </div>

                </div>
            )}
            {!showResults && (
                <NavigationPanel
                    questionCount={data.length}
                    visitedQuestions={visitedQuestions}
                    attemptedQuestions={attemptedQuestions}
                    onNavigate={navigateToQuestion}
                />
            )}
        </div>
    );
};

export default Questions;
