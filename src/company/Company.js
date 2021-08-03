import React from "react";
import "./company.css"
import Form from "./Form"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Company = () => {
    return (
        <div>
            <div className="Navbar">
                <Button variant="outline-primary" className="logout"> Add Job</Button>
                <Button variant="outline-primary" className="addjob"> Logout</Button>
            </div>
        </div>
    );
}
export default Company