import React from 'react'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'
import quizData from '../assets/quizData'

const Result = () => (
    <>
        <ResultHeader/>
        <ResultInfo/>
        <ShareButtons/>
        <Footer/>
    </>
)

const ResultInfo = () => {
    var { resultID, name } = useParams()
    resultID = decodeURIComponent(resultID)
    name = decodeURIComponent(name)
    const result = quizData.results[resultID]
    return (
        <div id='result'>
            <span id='result__username'>{name}, you are...</span><br/>
            <img id='result__img' src={result.img} height="200px"/><br/><br/>
            <span id='result__name'>{result.title}</span><br/><br/>
            <div id='result__description'>{result.description}</div><br/><br/>
        </div>
    )
}

const ShareButtons = () => {

    var { resultID } = useParams()
    resultID = decodeURIComponent(resultID)
    const languageName = quizData.results[resultID].title

    const twitterLink = `http://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&hashtags=${languageName}&text=` + encodeURIComponent(`Which Programming are you? Turns out I'm ${languageName}! Let me know which one you are on the Programming Language Quiz`)

    return ( 
        <div id='share'>
            <span>Share your result:</span>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <div className='share__button'><i className="fa fa-twitter" aria-hidden="true"></i></div>
            </a>
            <div className='share__button'><i className="fa fa-facebook" aria-hidden="true"></i></div><br/>
            <Link to ="/"><button id='share__tryagain'>Take the Quiz</button></Link>
        </div>
    )
}

const ResultHeader = () => (
    <div id='header--result'>
        <span id='header__title--result'>Which Programming Language Are You?</span><br/>
    </div>
)

export default Result