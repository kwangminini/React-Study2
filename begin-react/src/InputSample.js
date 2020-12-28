import React, { useState, useRef, useEffect } from 'react';

export default function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();
    const {name, nickname} = inputs;
    const onChange = (e) =>{
        const {name, value} = e.target;
        setInputs({...inputs,[name]:value});
    }
    const onReset= () => {

    }
    return(
        <div>
            <input name="name" onChange={onChange} ref={nameInput}/>
            <input name="nickname" onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {inputs.name}</b>
                이름 (닉네임)
            </div>
        </div>
    );
}