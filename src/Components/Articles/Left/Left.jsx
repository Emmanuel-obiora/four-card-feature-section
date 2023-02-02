import React from 'react'
import './Left.css'
import sup from '../../../images/icon-supervisor.svg'

const Left = () => {
    return (
        <article className='left-article'>
            <h2>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
            <img src={sup} className='movables' alt="Icon" />
        </article>
    )
}

export default Left
