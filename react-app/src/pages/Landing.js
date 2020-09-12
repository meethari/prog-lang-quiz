import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Landing = () => (
    <>
        <Header/>
        <Entry/>
        <Footer/>
    </>
)

const Entry = () => {

    const [nameText, setNameText] = useState('')

    const inputHandler = (event) => {
        setNameText(event.target.value)
    }

    return (

    <div id='entry'>
        <div id='entry__bubble'>
            <span id='entry__info'>What's your name?</span><br/>
            <input id='entry__input' onChange={inputHandler} value={nameText}></input><br/>
            {nameText === "" ? (
                <button id='entry__submit' disabled>Take the Quiz</button>
            ) : (
                <Link to={"/quiz/" + encodeURIComponent(nameText)}><button id='entry__submit'>Take the Quiz</button></Link>
            )}
            
        </div>
    </div>
    )
}

export default Landing