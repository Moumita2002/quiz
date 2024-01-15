import React from 'react';
import ResultTable from './ResultTable'; // Import your ResultTable component here

const ResultPage = ({ data, visitedQuestions, attemptedQuestions }) => {
    const resultData = [];

    // Populate resultData with correct and user answers
    data.forEach((question, index) => {
        const isVisited = visitedQuestions.includes(index);
        const isAttempted = attemptedQuestions.includes(index);

        if (isVisited && isAttempted) {
            const correctAnswer = question.correct_answer;
            const userAnswer = /* Retrieve user's answer based on the question and index */;
            const resultItem = {
                question: question.question,
                correctAnswer,
                userAnswer,
            };
            resultData.push(resultItem);
        }
    });

    return (
        <div className="result-page">
            <h2>Result Page</h2>
            <ResultTable resultData={resultData} />
        </div>
    );
};

export default ResultPage;
