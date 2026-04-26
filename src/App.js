import Game from './Game';
import './App.css';
import { useState } from 'react';

function App(){
    const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    function onClickVariant(index){
        if(index === questions[step]['correct']){
            setCorrect(correct+1)
        }    
        setStep(step+1)
    }


    return(
        <div className='App' >
            <Game questions={questions} step={step} onClickVariant={onClickVariant} correct={correct} />
            
        </div>
    )
}

export default App;