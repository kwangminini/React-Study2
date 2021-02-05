import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import MyForm from './MyForm';
import Counter from './Counter';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';
function App() {
  const onClick = (name:string) => {console.log(name);}
  const onSubmit = (form:{name:string; description: string})=>{
    console.log(form);
  }
  return (
    // <MyForm onSubmit={onSubmit}/>
    <SampleProvider>
      <ReducerSample/>
    </SampleProvider>
  );
}

export default App;
