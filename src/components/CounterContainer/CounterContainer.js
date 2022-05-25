import { useState } from 'react';
import Button from '../Button/Button';
import Counter from "../Counter/Counter";
import './counterContainer.css';

const CounterContainer = ()=> {
    const [numClicks, setNumClicks] = useState(0);

    const handleClick = ()=> {
        setNumClicks(numClicks + 1);
    }

    const restartCounter = ()=> {
        setNumClicks(0);
    }

    return (
        <div className='counterContainer'>
            <Counter numClicks={numClicks}/>
            <Button
                text='Click'
                isClickButton={true}
                handleClick={handleClick}
            />
            <Button
                text='Restart'
                isClickButton={false}
                handleClick={restartCounter}
            />
        </div> 
    )
}

export default CounterContainer;

    