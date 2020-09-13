import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import quizData from '../assets/quizData'

const Quiz = () => (
    <> 
        <Header/>
        <QuizBody/>
        <Footer/>
    </>
)

const QuizBody = () => {
    const { name } = useParams()

    // array with length of # of questions
    const [choices, setChoices] = useState(Array(quizData.questions.length).fill(-1))

    return (
        <div id='quizbody'>
            <div id='quizbody__alertcontainer'>
                <div id='quizbody__alert'>
                    Hi
                </div>
            </div>
            <div id='questionlist'>
                {quizData.questions.map((question, questionNum) => (<Question key={questionNum} questionNum={questionNum} question={question} choices={choices} setChoices={setChoices}/>))}
            </div>
            <div id='quizbody__submitrow'>
                <button id='quizbody__submit' className='submit'>Submit</button>
            </div>
        </div>
    )
}

const Question = ({questionNum, question, choices, setChoices}) => {
    
    const choiceUpdater = (optionNum) => {
        return (event) => {
            const newChoices = [...choices.slice(0, questionNum), optionNum, ...choices.slice(questionNum + 1, choices.length)]
            console.log(newChoices)
            setChoices(newChoices)
        }
        
    }

    const isRadioChecked = (optionNum) => {
        return choices[questionNum] === optionNum
    }

    return (
        <div className='question'>
            <span>#{String(questionNum + 1)}. </span><span className='question__title'>{question.title}</span><br/><br/>
            {question.options.map((option, optionNum) => (
                    <>
                        <label className='question__label'><input className='question__radio' type="radio" name={questionNum} onChange={choiceUpdater(optionNum)} value={optionNum} checked={isRadioChecked(optionNum)}/>{option.title}</label><br/>
                    </>
                    )
                )
            }
        </div>
    )
}

export default Quiz