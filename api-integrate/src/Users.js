import React, {useReducer, useEffect, useState} from 'react';
// import axios from 'axios'; 
// import useAsync from './useAsync';
// import userAsnc from 'react-async';
import User from './User';
import { useAsync} from 'react-async';
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';
// async function getUsers(){
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
//     return response.data;
// }

function Users(){
    // const [state, refetch] = useAsync(getUsers, [], true);
    const [userId, setUserId] = useState(null);
    //const {loading, data: users, error} = state;
    // const { data:users, error,isLoading, reload, run} = useAsync({
    //     deferFn: getUsers
    // })
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    const {loading, data:users, error} = state.users; 
    const fetchData = () =>{
        getUsers(dispatch);
    }
    if(loading) return <div>로딩중 ..</div>;
    if(error) return <div>에러가 발생</div>
    if(!users) return <button onClick={fetchData}>불러오기</button>;
    return(
        <>
        <ul>
            {users.map(user => (
               <li key={user.id} onClick={()=>setUserId(user.id)}>
                   {user.username} ({user.name})
               </li> 
            ))}
        </ul>
        <button onClick={fetchData}>다시 불러오기</button>
        {userId && <User id = {userId}/>}
        </>
    );
}

export default Users;