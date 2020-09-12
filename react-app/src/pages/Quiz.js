import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import quizData from '../assets/quizData'

const Quiz = () => (
    <> 
        <Header/>
        <QuestionList/>
        <Footer/>
    </>
)

const QuestionList = () => {
    const { name } = useParams()
    return (
        <div id='questionlist'>
            {quizData.questions.map((question, num) => (<Question num={num} question={question}/>))}
        </div>
    )
}

const Question = ({num, question}) => (
    <div className='question'>
        <span>#{String(num + 1)}. </span><span className='question__title'>{question.title}</span><br/><br/>
        {question.options.map((option, index) => (
                <>
                <label class='question__label'><input class='question__radio' type="radio" name={num} value={index}/>{option.title}</label><br/>
                </>
                )
            )
        }
    </div>
)

export default Quiz