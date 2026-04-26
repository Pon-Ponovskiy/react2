import React from "react";
import happyend from './happyend.png';


function Result(props){



    return(
        <div className="result">
            <img src={happyend} alt='ваш результат'/>
                <h2>Вы отгадали {props.correct} ответа из {props.lenQuestions}
                    <button>Попробовать снова</button>
                </h2>
        </div>
    )
}

export default Result;