import React from 'react'

const ResultTable = () => {
    return (
        <div><table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>

                    <td>Correct answer</td>
                    <td>User Answer</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Name</td>
                    <td>Correct answer</td>
                    <td>User Answer</td>
                </tr>

            </tbody>
        </table>
        </div>
    )
}

export default ResultTable