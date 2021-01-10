import React from 'react';
import Home from './Home';
import About from './About';
import { Route, Link, Switch } from 'react-router-dom';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
function App() {
  return (
    <>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/profiles">프로필 목록</Link>
      <Link to="/history">예제</Link>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/history" component={HistorySample} />
          <Route render={({location})=> (<div>
            <h2>이 페이지는 존재하지 않습니다.</h2>
            <p>{location.pathname}</p>
          </div>)}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
