import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import LoginComponent from "./components/LoginComponent";
import Logout from './components/LogoutComponent';
import SignUpComponent from "./components/SignUpComponent";

function App() {
  const userReducer = useSelector(state => state.userReducer)

  return (
    <div className="App">
      <h1>Sign up form </h1>
        {
          !userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome, {userReducer.user.username}</h1>
        }
        {userReducer.loggedIn  && <Logout/>}
        <SignUpComponent/>
        <LoginComponent/>
        
        
    </div>
  );
}

export default App;
