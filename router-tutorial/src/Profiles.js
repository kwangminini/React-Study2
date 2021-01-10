import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';
function Profiles(){
    return(
        <div>
            <h1>사용자 목록</h1>
            <ul>
                <li><Link to="/profiles/velopert">velopert</Link></li>
                <li><Link to="/profiles/home">homer</Link></li>
            </ul>
            <Route path="/profiles" exact render={()=> <div>사용자를 선택해 주세요</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
            <WithRouterSample/>
        </div>
    );
}

export default Profiles;