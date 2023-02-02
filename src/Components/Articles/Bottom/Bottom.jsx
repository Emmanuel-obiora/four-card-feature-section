import React from 'react'
import './Bottom.css'
import karma from "../../../images/icon-karma.svg"

const Bottom = () => {
    return (
        <article className="bottom-article">
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src={karma} className="movables" alt="Icon" />
        </article>
    )
}

export default Bottom
