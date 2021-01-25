# 리액트를 다루는 기술 (개정판)
## 17장 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기
- 리덕스를 사용할 때 가장 많이 사용하는 패턴 : 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트의 분리
- 리덕스를 사용할 때는 액션 타입, 액션 생성 함수, 리듀서 코드를 작성
- 일반적인 구조 : actions, constants, reducers라는 세 개의 디렉토리로 기능별 파일을 하나씩 만드는 방식
- Ducks 패턴 : 일반적인 구조는 새로운 액션을 만들 때 마다 세 종류의 파일을 모두 수정해야하는 불편함 때문에 액션타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 작성하는 방식
- 액션 타입은 대문자로 정의, 문자열 내용은 '모듈 이름/액션 이름' 같은 형태로 작성 (충돌 피하기 위해)
- 액션 생성 함수는 export const increase = () => ({type:INCREASE}) 와 같이 export라는 키워드가 필요하다
- 리듀서 함수에는 현재 상태를 참조하여 새로운 객체를 생성해서 반환하는 코드를 작성
