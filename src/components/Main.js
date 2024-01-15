import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css';

const Main = () => {
    const emailRef = useRef(null);
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const isEmailFilled = email.trim() !== '';

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            <ol>
                <li>You will be asked 15 questions one after another.</li>
                <li>1 point is awarded for each correct answer.</li>
                <li>You can choose only one option.</li>
                <li>You will get only 30 minutes to complete the quiz.</li>
                <li>You can review and change answers before the time is up.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>

            <form id="form">
                <input
                    required
                    ref={emailRef}
                    className="userid"
                    type="email"
                    placeholder='Enter Email to start the quiz'
                    onChange={handleEmailChange}
                />
            </form>

            <div className='start'>
                <Link className={`btn ${isEmailFilled ? '' : 'disabled'}`} to={isEmailFilled ? 'quiz' : '#'}>Start Quiz</Link>
            </div>
        </div>
    );
};

export default Main;
