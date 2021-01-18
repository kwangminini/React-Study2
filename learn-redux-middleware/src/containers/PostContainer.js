import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Post from '../components/Post';
import { getPost, clearPost } from '../modules/posts';
import { reducerUtils } from '../lib/asyncUtils';
function PostContainer({ postId }){
    const {data, loading, error} = useSelector(state=> state.posts.post[postId] || reducerUtils.initial());
    const dispatch = useDispatch();

    useEffect(()=> {
        if(data) return;
        dispatch(getPost(postId));
        // return () => {
        //     dispatch(clearPost());
        // }
    },[postId, dispatch]);

    if(loading && !data) return <div>로딩중 ...</div>
    if(error) return <div>에러 발생!</div>
    if(!data) return null;
    return(
        <Post/>
    );
}

export default PostContainer;