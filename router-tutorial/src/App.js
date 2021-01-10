import React from 'react';
import Home from './Home';
import About from './About';
import {Route, Link} from 'react-router-dom';
import Profile from './Profile';
function App() {
  return (
    <>
    <Link to="/">홈</Link>
    <Link to="/about">소개</Link>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/profiles/:username" component={Profile}/>
    </div>
    </>
  );
}

export default App;
