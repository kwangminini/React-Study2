import React from 'react';
import {connect} from 'react-redux';
import { increase, setDiff, decrease } from '../modules/counter';
import Counter from '../components/Counter';

function CounterContainer({
    number,diff,onIncrease,onDecrease,onSetDiff
}){
    return <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}/>;

}

const mapStateToProps = state => ({
    number: state.counter.number,
    diff: state.counter.diff  
});

const mapDispatchToProps = dispatch => ({
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease()),
    onSetDiff: (diff) => dispatch(setDiff(diff))
});


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);