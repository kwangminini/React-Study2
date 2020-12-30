import React, { useState, useReducer } from 'react';


function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter(){
    // const [num, setNum] = useState(0);
    const [num, dispatch] = useReducer(reducer, 0);
    const onIncrease = () =>{
        // setNum(prevNum => prevNum + 1);
        dispatch({type: 'INCREMENT'});

    }
    function onDecrease(){
        dispatch({type: 'DECREMENT'});
        // setNum(prevNum => prevNum - 1);
    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;