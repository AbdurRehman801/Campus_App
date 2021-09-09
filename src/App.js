import logo from './logo.svg';
import './App.css';
import Firebase from "firebase";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, serUserLogOutState, selectUserName, selectUserEmail } from './userSlice'
import LogIn from './login/login';
import SignUp from './login/Signup.jsx';
import './login/login.css';
import './login/Signup.css';
import Auth from "./Auth"
import { Switch, Route } from "react-router-dom";
import { AuthProvider } from './Auth'
import fire from "./firebase";
import Dashboard from './login/Dashboard';
import Company from './company/Company'
import Student from './student/Student'
import Forms from './company/AddingForm';
import Update from './company/Updateform';
import AddProfile from './student/addProfile';
import Profile from './student/profile';
import Vacancies from './student/vacancies';
function App() {
  const state = useSelector(state => state.status)
  console.log(state)
  return (
    <>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={LogIn} />
          <Route exact path='/Signup' component={SignUp} />
          <Route exact path='/Dashboard' component={Dashboard} />
          <Route exact path='/company' component={Company} />
          <Route exact path='/student' component={Student} />
          <Route exact path='/AddingForm' component={Forms} />
          <Route exact path='/UpdateForm' component={Update} />
          <Route path='/addProfile' component={AddProfile}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/vacancies' component={Vacancies}/>
          
        </Switch>
      </AuthProvider>
    </>

  );
}

export default App;
