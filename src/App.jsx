import React from 'react'
import './App.css'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App
