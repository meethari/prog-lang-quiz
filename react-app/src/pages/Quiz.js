import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
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

    const errorMessage = () => {
        var unansweredQuestions = ""
        for (var i = 0; i < choices.length; i++) {
            if (choices[i] === -1) {
                unansweredQuestions += String(i + 1) + " "
            }
        }
        return "Please answer the following questions: " + unansweredQuestions
    }

    const formComplete = () => {
        for (var i = 0; i < choices.length; i++) {
            if (choices[i] === -1) {
                return false
            }
        }
        return true
    }

    const evalResult = () => {
        var categoryScores = Array(quizData.results.length).fill(0)

        for (var i = 0; i < choices.length; i++) {
            const categoryThatGetsAPoint = quizData.questions[i].options[choices[i]].result
            // debug
            console.log(`Question #${i+1} point for ${quizData.results[categoryThatGetsAPoint].title}`)
            categoryScores[categoryThatGetsAPoint] += 1
        }
        
        const findMaxIndex = (arr) => {
            var maxIndex = 0
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > arr[maxIndex]) {
                    maxIndex = i
                }
            }
            return maxIndex
        }

        return findMaxIndex(categoryScores)
    }

    return (
        <div id='quizbody'>
            <div id='quizbody__alertcontainer'>
                <div id='quizbody__alert'>
                </div>
            </div>
            <div id='questionlist'>
                {quizData.questions.map((question, questionNum) => (<Question key={questionNum} questionNum={questionNum} question={question} choices={choices} setChoices={setChoices}/>))}
            </div>
            <div id='quizbody__submitrow'>
                {formComplete() ? <Link to={`/result/${evalResult()}/${name}`}><button id='quizbody__submit' className='submit'>Submit</button></Link> : <button id='quizbody__submit' className='submit' onClick={() => {alert(errorMessage())}}>Submit</button>}
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
            <span className='question__title'>#{String(questionNum + 1)}. {question.title}</span><br/><br/><br/>
            {question.options.map((option, optionNum) => (
                    <div className='question__option'>
                        <label className='question__label'><input className='question__radio' type="radio" name={questionNum} onChange={choiceUpdater(optionNum)} value={optionNum} checked={isRadioChecked(optionNum)}/>{option.title}</label>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default Quiz