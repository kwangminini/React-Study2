import logo from './logo.svg';
import './App.css';
import './exercise';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
function App() {
  return(
    <div>
      <CounterContainer/>
      <TodosContainer/>
    </div>
  );
  
}

export default App;
