import React from "react";
import './Game.css';
import Result from "./Result";


function Game(props, step, questions){

    if (props.step !== props.questions.length){

    
    
    const questions = props.questions
    const question = questions[props.step]
    const answers = question["variants"]
    
    const percentage = Math.round(step / questions * 100)


    // console.log(questions)

    return(
        <div>
            <div className="progress">
                <div className='progress__inner'
                style={{width: `${percentage}%`}}></div>
            </div>
            <h1>{question["title"]}</h1>
            <ul>
            {answers.map((answer, index) =>(
                <li onClick={() => props.onClickVariant(index)} key={index}>{answer}</li>                 
            ))}
            </ul>
        </div> 
    )
}
else{
    return(
        <div>
            <Result correct={props.correct} lenQuestions={props.questions.length} step={props.step} questions={props.questions}/>
        </div>
    )
}
}
export default Game;        