import React, { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';
// import axios from 'axios';
// import useAsync from './useAsync';
// import {useAsync} from 'react-async';
// async function getUser({id} ){
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//     return response.data;
// }


function User( {id} ){
    // const [state] = useAsync(()=> getUser(id), [id]);
    // const {loading, data : user, error} = state;

    // const {data:user, error, isLoading} = useAsync({
    //     promiseFn: getUser,
    //     id,
    //     watch: id
    // });
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    const {loading, data:user, error} = state.user;
    useEffect(()=>{
        getUser(dispatch,id);
    },[id]);
    if(loading) return <div>로딩중 ..</div>;
    if(error) return <div>에러가 발생</div>
    if(!user) return null;
    return(
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email: </b> {user.email}
            </p>
        </div>
    );
}

export default User;