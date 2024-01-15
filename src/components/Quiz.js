import React from 'react'
import Questions from './Questions'


const Quiz = () => {

    function onNext() {
        console.log("On next button")
    }

    /** Prev button event handler */
    function onPrev() {
        console.log("On prev button")
    }

    return (
        <>
            <div className='container'>
                <h1 className='title text-light'>Quiz Application</h1>

                {/* display questions */}
                <Questions></Questions>


            </div>
        </>

    )
}

export default Quiz

