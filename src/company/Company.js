import React from "react";
import "./company.css"
import Forms from "./AddingForm"
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from "./Card"
import firebase from "firebase"
import { auth } from "../firebase";
const Company = () => {
    const history = useHistory();
    
    const logOut = () => {
        firebase.auth().signOut().then(() => {
            history.push('/')
          }).catch((error) => {
          
          });
    }
    return (
        <div>
            <div className="Navbar">
                <Button variant="outline-primary" className="logout" onClick={() => history.push('/AddingForm')}> Add Job</Button>
                <Button variant="outline-primary" className="addjob" onClick={logOut} > Logout</Button>
            </div>
            <Card />
        </div >
    );
}
export default Company