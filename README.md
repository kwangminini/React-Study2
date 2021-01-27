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
  
