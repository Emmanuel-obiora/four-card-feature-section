import React from 'react'
import './Right.css'
import calc from '../../../images/icon-calculator.svg'

const Right = () => {
    return (
        <article className='right-article'>
            <h2>Calculator</h2>
            <p>Uses data from past projects to provide better delivery estimates</p>
            <img src={calc} className="movables" alt="Icon" />
        </article>
    )
}

export default Right
