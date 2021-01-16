const myLogger = store => next => action => {
    console.log(action); //action이 dispatch 될 때 콘솔 출력
    console.log('\tPrev', store.getState());   
    const result = next(action); //action을 다음 middleware 없다면 reducer한테 전달
    console.log('\tNext', store.getState());   
    return result;
}

export default myLogger;