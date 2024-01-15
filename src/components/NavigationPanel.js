import React from 'react'

// NavigationPanel component
const NavigationPanel = ({ questionCount, visitedQuestions, attemptedQuestions, currentQuestion, onNavigate }) => {
    return (
        <div className="navigation-panel">

            <div className="question-buttons">
                {Array.from({ length: questionCount }, (_, index) => index + 1).map(questionNumber => (
                    <button
                        key={questionNumber}
                        className={`question-button 
                ${visitedQuestions.includes(questionNumber) ? 'visited' : ''} 
                ${attemptedQuestions.includes(questionNumber) ? 'selected' : ''} 
                ${currentQuestion === questionNumber ? 'current' : ''}`}
                        onClick={() => onNavigate(questionNumber)}
                    >
                        {attemptedQuestions.includes(questionNumber) ? '✔ ' : ''}Q{questionNumber}
                    </button>
                ))}
            </div>
        </div>
    );
};


export default NavigationPanel