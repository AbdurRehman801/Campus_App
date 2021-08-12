import React from "react";
import "./company.css"
import Forms from "./AddingForm"
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from "./Card"


const Company = () => {
    const history = useHistory();
    return (
        <div>
            <div className="Navbar">
                <Button variant="outline-primary" className="logout" onClick={() => history.push('/AddingForm')}> Add Job</Button>
                <Button variant="outline-primary" className="addjob" > Logout</Button>
            </div>
            <Card />
        </div >
    );
}
export default Company