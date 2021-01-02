import React, {useRef, useState, useEffect, useMemo, useReducer, useCallback, createContext} from 'react';
import './App.css';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';
import produce from 'immer';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  // inputs: {
  //   username:'',
  //   email:''
  // },
  users:[
    {
      id:1,
      username:'velopert',
      email:'public.velopert@gmail.com',
      active: true
    },
    {
      id:2,
      username:'tester',
      email:'tester@example.com',
      active: false
    },
    {
      id:3,
      username:'liz',
      email:'liz@example.com',
      active: false
    },
  ]
}
function reducer(state, action){
  switch(action.type){
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs:{
    //       ...state.inputs,
    //       [action.name]:action.value
    //     }
    //   };
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
      // return{
      //   ...state,
      //   users:state.users.map( user => user.id === action.id ? {...user, active: !user.active} : user)
      // };
    case 'REMOVE_USER':
      return produce(state, draft =>{
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index,1);
      });
      // return{
      //   ...state,
      //   users:state.users.filter( user => user.id !== action.id)
      // }

    default:
      throw new Error('Unhandled action');
  }
}
export const UserDispatch = createContext(null);
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [form, onChange, reset] = useInputs({
  //   username:'',
  //   email:''
  // });
  // const {username, email} = form;
  // const nextId = useRef(4);
  const {users} = state;
  // const {username, email} = state.inputs;
  // const onChange = useCallback(e => {
  //   const {name, value} = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   });
  // }, []);
  // const onCreate = useCallback(()=>{
  //   dispatch({
  //     type:'CREATE_USER',
  //     user:{
  //       id:nextId.current,
  //       username,
  //       email
  //     }
  //   });
  //   nextId.current += 1;
  //   reset();
  // },[username, email, reset]);

  // const onToggle = useCallback(id => {       useContext로 대체
  //   dispatch({
  //     type:'TOGGLE_USER',
  //     id
  //   });
  // }, []);

  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type:'REMOVE_USER',
  //     id
  //   });
  // },[]);
  
  const count = useMemo(()=>countActiveUsers(users),[users]);

  // const [inputs, setInputs] = useState({
  //   username:'',
  //   email:''
  // });
  // const {username, email} = inputs;
  // const onChange = (e) => {
  //   const {name, value} = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]:value
  //   });
  // }


  // const [users,setUsers] = useState([
  //   {
  //     id:1,
  //     username:'velopert',
  //     email:'public.velopert@gmail.com',
  //     active: true
  //   },
  //   {
  //     id:2,
  //     username:'tester',
  //     email:'tester@example.com',
  //     active: false
  //   },
  //   {
  //     id:3,
  //     username:'liz',
  //     email:'liz@example.com',
  //     active: false
  //   },
  // ]);

  // const nextId = useRef(4);
  // const onCreate = () => {
  //   console.log(nextId.current);
    
  //   const user = {
  //     id:nextId.current,
  //     username,
  //     email
  //   };
  //   setUsers([...users,user]);

  //   setInputs({
  //     username: '',
  //     email: ''
  //   });
  //   nextId.current += 1;

  // }
  // const onRemove = id => {
  //   setUsers(users.filter(
  //     user => user.id !== id
  //   ));
  // };
  // const onToggle = id => {
  //   setUsers(users.map(
  //     user => user.id === id ? {...user, active : !user.active} : user
  //   ));
  // }
  // const count = useMemo(()=>countActiveUsers(users),[users]); 
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser/>
      <UserList users={users}/>
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
