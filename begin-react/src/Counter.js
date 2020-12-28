import React, { useState } from 'react';

export default function Counter(){
    const [num, setNum] = useState(0);
    const onIncrease = () =>{
        setNum(prevNum => prevNum + 1);
    }
    function onDecrease(){
        setNum(prevNum => prevNum - 1);
    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}