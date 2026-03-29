import React from "react";
import './Game.css';


function Game(){



    return(
        <div>
            <div className="progress">
                <div className='progress__inner'></div>
            </div>
            <h1>Что такое useState?</h1>
            <ul>
                <li>Это функция для хранения данных компонента</li>
                <li>Это глобальный стейт</li>
                <li>Это когда включешь компьютер</li>
            </ul>
        </div>
    )
}
export default Game;