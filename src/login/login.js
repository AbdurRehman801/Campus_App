import React from "react";
import "./login.css";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import SignUp from "./Signup";

function LogIn() {
  return (
    <div className="background_color">
      <div className="form">
        <div className="login_header1">
          <div>
            <h2 className="heading">Login</h2>
            <p className="paragraph">
              see whats going on it your College today
            </p>
          </div>
          <div className="header_icon">
            <LockIcon
              style={{ fontSize: "80px", marginLeft: "600px", color: "white" }}
            />
          </div>
        </div>
        <div className="login_body">
          <div className="Name">
            <h3>
              <PersonIcon style={{ textAlign:"center" }}/>
              Login as
            </h3>
            <input placeholder="Student" className="input_1"></input>
          </div>
          <div className="Name">
            <h3>
              <PersonIcon />
              UserName
            </h3>
            <input placeholder="UserName" className="input_1"></input>
          </div>
          <div className="Name">
            <h3>
              <VisibilityIcon />
              Password
            </h3>
            <input
              placeholder="Password"
              className="input_1"
              type="password"
            ></input>
          </div>
          <div>
            <button className="button1">
              <LockIcon />
              Login
            </button>
          </div>
          <p className="Signup_page"> Don't have account <Link to = "/Signup"> SignUp </Link> </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
