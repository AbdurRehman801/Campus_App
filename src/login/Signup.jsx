import React from "react";
import "./Signup.css"
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";

const SignUp = () => {
    return(
        <div>
              <div className="background_color">
      <div className="form">
        <div className="login_header">
          <div>
            <h2 className="heading">SignUp</h2>
            <p className="paragraph">
              be a part of your College Cammunity
            </p>
          </div>
          <div className="header_icon">
            <CreateIcon
              style={{ fontSize: "80px", marginLeft: "600px", color: "white" }}
            />
          </div>
        </div>
        <div className="login_body">
          <div className="Name">
            <h3>
              <PersonIcon />
              SignUp as
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
          <div className="Name">
            <h3>
              <VisibilityIcon />
              Confirm Password
            </h3>
            <input
              placeholder="Confirm Password"
              className="input_1"
              type="password"
            ></input>
          </div>
          <div>
            <button className="button">
              <CreateIcon />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}
export default SignUp