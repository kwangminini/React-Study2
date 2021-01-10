import React from 'react';
import Home from './Home';
import About from './About';
import {Route, Link} from 'react-router-dom';
import Profiles from './Profiles';
function App() {
  return (
    <>
    <Link to="/">홈</Link>
    <Link to="/about">소개</Link>
    <Link to="/profiles">프로필 목록</Link>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/profiles" component={Profiles}/>
    </div>
    </>
  );
}

export default App;
