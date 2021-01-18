import logo from './logo.svg';
import './App.css';
import CounterContainer from '../src/containers/CounterContainer';
import PostListContainer from './containers/PostListContainer';
import {Route} from 'react-router-dom';
import PostPage from './pages/PostPage';
import PostContainer from './containers/PostContainer';
function App() {
  return (
    <>
      <Route path="/" exact component={PostListContainer}/>
      <Route path="/:id" component={PostPage}/>
    </>
  );
}

export default App;
