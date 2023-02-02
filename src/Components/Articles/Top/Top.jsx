import React from 'react'
import './Top.css'
import TeamBuilder from '../../../images/icon-team-builder.svg'

const Top = () => {
    return (
        <article className='top-article'>
            <h2>Team Builder</h2>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img src={TeamBuilder} className="movables" alt="Icon" />
        </article>
    )
}

export default Top
