import React from 'react';
import {NavLink, Link, Route} from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';
import RouterHookSample from './RouterHookSample';
function Profiles(){
    return(
        <div>
            <h1>사용자 목록</h1>
            <ul>
                <li><NavLink to="/profiles/velopert" 
                activeStyle={{background:'black', color:'white'}}
                >velopert</NavLink></li>
                <li><NavLink to="/profiles/home" activeStyle={{background:'black', color:'white'}}>homer</NavLink></li>
            </ul>
            <Route path="/profiles" exact render={()=> <div>사용자를 선택해 주세요</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
            {/* <WithRouterSample/> */}
            <RouterHookSample/>
        </div>
    );
}

export default Profiles;