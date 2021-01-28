import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { connect, useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../moduels/counter';
import { bindActionCreators } from 'redux';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=> dispatch(increase()),[dispatch]);
    const onDecrease = useCallback(()=> dispatch(decrease()),[dispatch]);
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
    );
}

// const mapStateToProps = state => ({
//     number: state.counter.number
// });
// // const mapDispatchToProps = dispatch => ({
// //     increase: () => {
// //         dispatch(increase());
// //     },
// //     decrease: () => {
// //         dispatch(decrease());
// //     }
// // });
// const mapDispatchToProps = dispatch => bindActionCreators({
//     increase,
//     decrease
// },dispatch);
export default CounterContainer;
