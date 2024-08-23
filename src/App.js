import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Box from "./componenet/Box";

function App() {
    const dispatch = useDispatch();

    const count = useSelector(state=>state.count);
    const id = useSelector(state=>state.id);
    const password = useSelector(state=>state.password);

  const increase = () =>{
    dispatch({type: 'INCREMENT', payload: {num:5}});
  }

  const decrease = () =>{
    dispatch({type: 'DECREMENT', payload: {num:3}});
  }

  const login = () => {
      dispatch({type: 'LOGIN', payload: {id: "salted", password: "qwer1234"}});
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
        <Box />
        <button onClick={login}>로그인</button>
        <h2>{id} {password}</h2>
    </div>
  );
}

export default App;
