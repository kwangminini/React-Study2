import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
// import TodoApp from './containers/TodoApp';
import GithubProfileLoader from './containers/GithubProfileLoader';
const App: React.FC = () => {
  return (
    // <TodoApp/>
    <GithubProfileLoader/>
  );
}

export default App;
