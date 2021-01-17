import * as postsAPI from '../api/posts';
import { reducerUtils, createPromiseThunk, handleAsyncActions } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

//thunk 리팩토링
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);


// export const getPosts = () => async dispatch => {
//     //요청 시작
//     dispatch({ type: GET_POSTS });
//     //API를 호출
//     try {
//         const posts = await postsAPI.getPosts();
//         //성공 했을 때
//         dispatch({
//             type: GET_POSTS_SUCCESS,
//             posts
//         })
//     } catch (e) {
//         //실패 했을 때
//         dispatch({
//             type: GET_POSTS_ERROR,
//             error: e
//         })
//     }
// }

// export const getPost = (id) => async dispatch => {
//     //요청 시작
//     dispatch({ type: GET_POST });
//     //API를 호출
//     try {
//         const post = await postsAPI.getPostById(id);
//         //성공 했을 때
//         dispatch({
//             type: GET_POST_SUCCESS,
//             post
//         });
//     } catch (e) {
//         //실패 했을 때
//         dispatch({
//             type: GET_POST_ERROR,
//             error: e
//         });
//     }
// };

const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial()
}

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts');
const getPostReducer = handleAsyncActions(GET_POST, 'post');

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action);
        default:
            return state;
    }

}
