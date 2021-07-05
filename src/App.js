import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import { useDispatch, useSelector } from 'react-redux';
import {setActiveUser, serUserLogOutState, selectUserName, selectUserEmail} from './userSlice'
import LogIn from './login/login';
import SignUp from './login/Signup.jsx';
import './login/login.css';
import './login/Signup.css';
import { Switch, Route } from "react-router-dom";

function App () {
  return (
    <>
    <Switch>
      <Route exact path= '/' component={LogIn}/>
      <Route exact path= '/Signup' component = {SignUp}/>
    </Switch>
    {/* <SignUp/>
    <LogIn/> */}
    </>

  );
}

export default App;
