import logo from './logo.svg';
import './App.css';
import Firebase from "firebase";
import { useDispatch, useSelector } from 'react-redux';
import {setActiveUser, serUserLogOutState, selectUserName, selectUserEmail} from './userSlice'
import LogIn from './login/login';
import SignUp from './login/Signup.jsx';
import './login/login.css';
import './login/Signup.css';
import Auth from "./Auth"
import { Switch, Route } from "react-router-dom";
import {AuthProvider} from './Auth'
import fire from "./firebase";
import Dashboard from './login/Dashboard';
import Company from './company/Company'
import Student from './student/Student'

// Firebase.initializeApp(fire)
function App () {
  return (
    <>
    <AuthProvider>
    <Switch>
      <Route exact path= '/' component={LogIn}/>
      <Route exact path= '/Signup' component = {SignUp}/>
      <Route exact path= '/Dashboard' component = {Dashboard}/>
      <Route exact path= '/company/Company.js' component = {Company}/>
      <Route exact path= '/src/student/Student.js' component = {Student}/>
      
    </Switch>
    </AuthProvider>
    {/* <SignUp/>
    <LogIn/> */}
    </>

  );
}

export default App;
