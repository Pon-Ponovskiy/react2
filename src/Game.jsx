import React from "react";
import './Game.css';
import Result from "./Result";


function Game(props){

    if (props.step !== props.questions.length){

    
    
    const questions = props.questions
    const question = questions[props.step]
    const answers = question["variants"]

    console.log(questions)

    return(
        <div>
            <div className="progress">
                <div className='progress__inner'></div>
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
            <Result correct={props.correct} lenQuestions={props.questions.length}/>
        </div>
    )
}
}
export default Game;        