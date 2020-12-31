import {useState , useCallback, useReducer} from 'react';


function reducer(state, action){
    //Change
    switch(action.type){
        case 'CHANGE':
            return {
                ...state,
                [action.name]:action.value
            }
        case 'RESET':
            return action.initialForm
        default:
            return state;
    }
    //res
}
function useInputs(initialForm){
    // const [form, setForm] = useState(initialForm);
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback(e=>{
        const {name,value} = e.target;
        dispatch({
            type:'CHANGE',
            name,
            value
        });
    },[]);
    const reset = useCallback(()=>{
        dispatch({
            type:'RESET',
            initialForm
        })
    },[]);
    // const onChange = useCallback(e=>{
    //     const {name,value} = e.target;
    //     setForm(form => ({...form, [name]:value}));
    // },[]);
    // const reset = useCallback(()=>setForm(initialForm),[initialForm]);       
    // const reset = () =>{};
    return [form, onChange, reset];
}

export default useInputs;