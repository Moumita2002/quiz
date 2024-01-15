import React from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom';

const Result = ({ userAnswers, correctAnswers, questions }) => {

    function onRestart() {
        console.log('On Restart')
    }
    const calculateScore = () => {
        let score = 0;
        userAnswers.forEach((userAnswer, index) => {
            if (userAnswer === correctAnswers[index]) {
                score++;
            }
        });
        return score;
    };

    return (
        <div className='container'>

            <div className='result flex-center'>
                <h2>👩‍🏫 Score Board 👨‍🏫</h2>
                <div className='flex'>
                    <span>Total Questions : </span>
                    <span className='bold'>15</span>
                </div>
                <div className='flex'>
                    <span>Total Quiz Points : </span>
                    <span className='bold'>15</span>
                </div>

                <div className='flex'>
                    <span>Total Earn Points : </span>
                    <span className='bold'>{calculateScore()}</span>
                </div>

            </div>

            <div className="start">
                <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
            </div>

            <div><table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Question</td>
                        <td>Your Answer</td>
                        <td>Correct answer</td>

                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, index) => (
                        <tr className='table-body' key={index}>



                            <td>{question.question}</td>
                            <td>{userAnswers[index]}</td>
                            <td>{correctAnswers[index]}</td>



                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

        </div >


    )
}

export default Result









/*
// Results.js

import React from 'react';

const Results = ({ userAnswers, correctAnswers, questions }) => {
    return (
        <div className='results-container'>
            <h2>Results</h2>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        <p>Question: {question.question}</p>
                        <p>User's Answer: {userAnswers[index]}</p>
                        <p>Correct Answer: {correctAnswers[index]}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Results;
*/