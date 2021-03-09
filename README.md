# 리액트를 다루는 기술 (개정판)
## 17장 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기
- 리덕스를 사용할 때 가장 많이 사용하는 패턴 : 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트의 분리
- 리덕스를 사용할 때는 액션 타입, 액션 생성 함수, 리듀서 코드를 작성
- 일반적인 구조 : actions, constants, reducers라는 세 개의 디렉토리로 기능별 파일을 하나씩 만드는 방식
- Ducks 패턴 : 일반적인 구조는 새로운 액션을 만들 때 마다 세 종류의 파일을 모두 수정해야하는 불편함 때문에 액션타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 작성하는 방식
- 액션 타입은 대문자로 정의, 문자열 내용은 '모듈 이름/액션 이름' 같은 형태로 작성 (충돌 피하기 위해)
- 액션 생성 함수는 export const increase = () => ({type:INCREASE}) 와 같이 export라는 키워드가 필요하다
- 리듀서 함수에는 현재 상태를 참조하여 새로운 객체를 생성해서 반환하는 코드를 작성
- createStore함수를 사용하여 Store를 만들 때는 리듀서를 하나만 사용해야 한다. 따라서 리덕스에서 제공하는 combineReducers라는 유틸 함수를 통해 기존에 만들었던 리듀서를 하나로 합쳐준다
- Store를 만들고 리액트 애플리케이션에 리덕스를 적용하는 작업은 src 디렉터리의 index.js에서 이루어진다
- 리액트 컴포넌트에서 Store를 사용할 수 있도록 App 컴포넌트를 react-redux에서 제공하는 Provider 컴포넌트로 감싸준다. 이 때 store를 props로 전달해준다
- yarn add redux-devtools-extension 패키지의 composeWithDevTools()를 이용해 redux 개발자 도구 사용 가능
- 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용
```
connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
```
- mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수 (스토어가 지니고 있는 state를 파라미터로 받음)
- mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수 (스토어의 내장 함수 dispatch를 파라미터로 받음)
- connect 함수를 호출하고 나면 또 다른 함수를 반환, 반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동됨
- 컴포넌트에서 액션을 디스패치하기 위해 각 액션 생성 함수를 호출하고 dispatch로 감싸는 작업이 많아지면 리덕스에서 제공하는 bindActionCreators유틸 함수를 사용
```
bindActionCreators(
{ increase, decrease},
dispatch
)
```
- redux-actions를 사용하면 액션 생성 함수를 더 쉽게 작성 (리듀서를 작성할 때도 switch/case 문이 아닌 handleActions라는 함수를 사용하여 각 액션마다 업데이트 함수를 설정)
  - createAction을 사용하면 매번 객체를 직접 만들어 줄 필요 없이 액션 생성 함수 선언 가능
  ```
  export const increase = createAction(INCREASE);
  ```
  - handleActions라는 함수를 이용하여 리듀서 함수도 간단하게 작성
  ```
  const counter = handleActions(
  {
    [INCREASE] : (state, action) => ({ number: state.number + 1 }),
    [DECREASE] : (state, action) => ({ number: state.number - 1 })
  },
  initialState
  )
  ```
  - createAction으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용
  ```
  const MY_ACTION = 'sample/MY_ACTION';
  const myAction = createAction(MY_ACTION);
  const action = myAction('hello world');
  결과 : {type: MY_ACTION, payload: 'hello world'}
  ```
- 객체의 구조가 복잡해질 경우 immer를 사용하면 훨씬 편리하게 상태를 관리할 수 있다
- 리덕스 스토어와 연동된 컨테이너 컴포넌트를 만들 때 connect 함수 대신 react-redux에서 제공하는 Hooks를 사용
  - useSelector Hook을 사용하면 리덕스의 상태를 조회 
  ```
  const 결과 = useSelector(상태 선택 함수);
  ```
  - useDispatch Hook을 사용하면 스토어의 내장함수 dispatch를 사용할 수 있음
  ```
  const dispatch = useDispatch();
  dispatch({ type: 'SAMPLE_ACTION' });
  ```
  - useStore Hook을 사용하면 컴포넌트 내부에서 리덕스 스토어 객체를 직접 사용 가능 (단, 정말 긴급할 때만 사용)
  ```
  const store = useStore();
  store.dispatch({ type: 'SAMPLE_ACTION' });
  store.getState();
  ```
 - connect 함수와 useSelector 함수의 차이점
   - connect 함수를 사용하여 컨테이너 컴포넌트를 만들었을 경우, 해당 컨테이너 컴포넌트의 부모 컴포넌트가 리렌더링될 때 해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면 리렌더링이 자동으로 방지
   - useSelector를 사용하여 리덕스 상태를 조회했을 떄는 이 최적화 작업이 자동으로 이루어지지 않으므로 성능 최적화를 위해서는 React.memon를 컨테이너 컴포넌트에 사용해줘야함 

## 18장 리덕스 미들웨어를 통한 비동기 작업 관리
- 리덕스를 사용하면서 API요청 등 (비동기 작업)을 관리해야 한다면 '미들웨어'를 사용하면 상태 관리가 용이하다
- 리덕스 미들웨어는 액션을 디스패치 했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행 (즉, 액션과 리듀서 사이의 중간자)
- 미들웨어 기본 구조
```
const middleware = store => next => action => {
}
```
  - next(action)을 호출하면 그 다음 처리해야 할 미들웨어에게 액션을 넘겨주고, 만약 그 다음 미들웨어가 없다면 리듀서에게 액션을 넘겨줌
  - 미들웨어에서 next를 사용하지 않으면 액션이 리듀서에 전달되지 않습니다
  - redux의 applyMiddleware함수를 통해 리덕스 미들웨어를 스토어에 적용
  - 미들웨어를 사용할 떄는 redux-logger를 함께 사용하자! 
- 미들웨어 종류 2가지(redux-thunk / redux-saga)
  - redux-thunk : 비동기 작업을 처리할 때 가장 많이 사용하는 미들웨어. 객체가 아닌 함수 형태의 액션을 디스패치 할 수 있게 해줌
  - redux-saga : redux-thunk 다음으로 가장 많이 사용되는? 비동기 작업 관련 미들웨어 라이브러리. 특정 액션이 디스패치 되었을 때 정해진 로직에 따라 다른 액션을 디스패치시키는 규칙을 작성하여 비동기 작업을 처리할 수 있게 해줌
- **redux-thunk**
  - 리덕스를 사용하는 프로젝트에서 비동기 작업을 처리할 때 가장 기본적으로 사용하는 미들웨어
  - Thunk는 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것
  - redux-thunk 라이브러리를 사용하면 thunk함수를 만들어서 디스패치할 수 있다.
  ```
  const sampleThunk = () => (dispatch, getState) => {
      //기본 구조
  }
  ```
  - 액션 생성 함수에서 일반 액션 객체를 반환하는 대신에 함수를 반환
- API를 호출할 때는 주로 Promise 기반 웹 클라이언트인 axios 라이브러리를 사용하면 편함
- **redux-saga**
  - redux-thunk 보다 사용하기 유리할 때
    - 기존 요청을 취소 처리해야 할 떄 (불필요한 중복 방지 요청)
    - 특정 액션이 발생했을 때 다른 액션을 발생시키거나, API 요청 등 리덕스와 관계없는 코드를 실행할 떄
    - 웹소켓을 사용할 때
    - API 요청 실패 시 재요청해야 할 떄
  - redux-saga는 ES6의 제너레이터 함수를 사용
  - redux-saga는 우리가 디스패치하는 액션을 모니터링해서 그에 따라 필요한 작업을 따로 수행할 수 있는 미들웨어
  - rootSaga
  ```
  export function* rootSaga(){
    yield all([saga()]);
  }
  ```
  - store에 redux-saga 미들웨어 적용
  ```
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer, applyMiddleware(logger,sagaMiddleware);
  )
  ```
  - saga내부에서 현재 상태를 참조해야 하는 상황이 생길 때 select 사용
  ```
  const number = yield select(state => state.counter) //state는 스토어 상태를 의미
  ```
  - takeEvery 대신 throttle이라는 함수를 사용하면 saga가 n초에 단 한 번만 호출되도록 설정
  ```
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  ```

- **정리:** redux-thunk는 일반 함수로 이루어져 있어 간단명료, redux-saga는 진입 장벽이 좀 있을 수 있으나 복잡한 상황에서 더욱 효율적
    
## Typescript
- type 

## Webpack

- Module의 종류
  - Built-in Core Module (예: Node.js module)
  - community-based Module (예: NPM)
    - npm CLI를 사용해야 함(예: npm install ModuleName)
  - Local Module (특정 프로젝트에 정의된 모듈)

- Module을 사용한다면
  - 코드의 재사용성이 증가
  - 코드의관리가 편해진다
  - 코드를 모듈화하는 기준이 명확해야 함

- Bundle
  - 모든 모듈을 로드하기 위해 검색하는 시간이 단축
  - 사용하지 않는 코드를 제거
  - 파일의 크기를 줄여줌
