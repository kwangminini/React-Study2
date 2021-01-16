import React from 'react';
import Counter from '../components/Counter';
import {useSelector, useDispatch} from 'react-redux';
import { increase, decrease } from '../modules/counter';
import {increaseAsync, decreaseAsync} from '../modules/counter';
function CounterContainer(){
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        // dispatch(increase());
        dispatch(increaseAsync());
    }
    const onDecrase = () => {
        // dispatch(decrease());
        dispatch(decreaseAsync());
    }
    return(
        <Counter number = {number} onIncrease = {onIncrease} onDecrease={onDecrase}/>
    );
}

export default CounterContainer;