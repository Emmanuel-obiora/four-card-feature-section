import React from 'react'
import './Main.css'
import Top from '../Articles/Top/Top'
import Bottom from '../Articles/Bottom/Bottom'
import Left from '../Articles/Left/Left'
import Right from '../Articles/Right/Right'

const Main = () => {
    return (
        <main className='main'>
            <Left />
            <Top />
            <Bottom />
            <Right />
        </main>
    )
}

export default Main
