import React, { useState } from "react";
import "./Signup.css";
import firebase from "firebase";
import CreateIcon from "@material-ui/icons/Create";
import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link, useHistory } from "react-router-dom";
import firebaseConfig from "../firebase";
import { auth } from "../firebase";

const SignUp = () => {
  const history = useHistory();
  const [userRegistration, setUserRegistration] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [userMessage, setUserMessage] = useState("");
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        userRegistration.email,
        userRegistration.password
      )
      .then((user) => {
        history.push("./Dashboard.js");
      })
      .catch(() => {
        setUserMessage("email Already exist");
      });

    }
    return (
      <div>
        <div className="background_color">
          <div className="form">
            <div className="login_header">
              <div>
                <h2 className="heading">SignUp</h2>
                <p className="paragraph">be a part of your College Cammunity</p>
              </div>
              <div className="header_icon">
                <CreateIcon
                  style={{
                    fontSize: "80px",
                    marginLeft: "600px",
                    color: "white",
                  }}
                />
              </div>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="login_body">
                <div className="Name">
                  <h3 style={{ display: "flex" }}>
                    <div>
                      <PersonIcon />
                    </div>
                    Email
                  </h3>
                  <input
                    placeholder="Student"
                    className="input_1"
                    name="student"
                    value={userRegistration.email}
                    name="email"
                    onChange={handleInput}
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
                    className="input_1"
                    name="username"
                    value={userRegistration.username}
                    onChange={handleInput}
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
                    value={userRegistration.password}
                    onChange={handleInput}
                  ></input>
                </div>
                <div className="Name">
                  <h3 style={{ display: "flex" }}>
                    <div>
                      <VisibilityIcon />
                    </div>
                    Confirm Password
                  </h3>
                  <input
                    placeholder="Confirm Password"
                    className="input_1"
                    type="password"
                    name="confirmPassword"
                    value={userRegistration.confirmPassword}
                    onChange={handleInput}
                  ></input>
                </div>
                <div>
                  <button type="submit" className="button">
                    <CreateIcon />
                    Login
                  </button>
                </div>
              </div>
              <p className="Login_page">
                {" "}
                Already have an account <Link to="/"> LogIn </Link>{" "}
              </p>
            </form>
          </div>
          <div> {userMessage} </div>
        </div>
      </div>
    );

};
export default SignUp;
