const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
    {
        id:1,
        title: '리덕스 미들웨어를 배워봅시다.',
        body: '리덕스 미들웨어를 직접 만들어 봄'
    },
    {
        id:2,
        title: 'redux-thunk를 사용해보자',
        body: 'redux-thunk를 사용해서 비동기 작업을 처리'
    },
    {
        id:3,
        title: 'redux-saga도 사용',
        body: '나중에 redux-saga를 사용해서 비동기 작업을 처리'
    },
];

export const getPosts = async() => {
    await sleep(500);
    return posts;
}

export const getPostById = async(id) => {
    await sleep(500);
    return posts.find(post => post.id === id );
}