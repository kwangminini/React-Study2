import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import {changeInput,insert,toggle,remove} from '../moduels/todos';
import { connect, useSelector, useDispatch } from 'react-redux';

const TodoContainer = () => {
    const input = useSelector(state => state.todos.input);
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    const onChangeInput = useCallback(input => dispatch(changeInput(input)),[dispatch]);
    const onInsert = useCallback(text => dispatch(insert(text)),[dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)),[dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)),[dispatch]);
    return (
        <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove}/>
    );
}
export default TodoContainer;