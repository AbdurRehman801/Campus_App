import React, { useState } from "react";

import { withRouter, Redirect } from "react-router";
import app from "firebase";
import { AuthContext } from "../Auth";
import "./login.css";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link, useHistory } from "react-router-dom";
import SignUp from "./Signup";
import firebaseConfig from "../firebase";
import { auth } from "../firebase";
import { database } from "firebase/app";
function LogIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState("");

  const handleLogin = (e) => {
    console.log("hello world")
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("hello Start")
        database.ref("/CRS" + auth.currentUser.uid)
          .on("value", data => {
            setUser(data.val())
            console.log("successfully.....", data.val());
          })
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

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
        <form onSubmit={handleLogin}>
          <div className="login_body">
            <div className="Name">
              <h3 style={{ display: "flex" }}>
                <div>
                  <PersonIcon />
                </div>
                Login as
              </h3>
              <input
                placeholder="Student"
                className="input_1"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="Name">
              <h3 style={{ display: "flex" }}>
                <div>
                  <PersonIcon />
                </div>
                UserName
              </h3>
              <input
                placeholder="UserName"
                name="username"
                className="input_1"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>
            <div className="Name">
              <h3 style={{ display: "flex" }}>
                <div>
                  <VisibilityIcon />
                </div>
                Password
              </h3>
              <input
                placeholder="Password"
                className="input_1"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <button type="submit" className="button1">
                <LockIcon />
                Login
              </button>
            </div>
            <p className="Signup_page">
              {" "}
              Don't have account <Link to="/Signup"> SignUp </Link>{" "}
            </p>
            <div>{errorMessage}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
