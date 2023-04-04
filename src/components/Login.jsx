import React from "react";
import Homenav from "./Homenav";
import { Link } from "react-router-dom";
import Homefooter from "./Homefooter";

function Login() {
  return (
    <>
      <Homenav />
      <div className="login">
        <div className="login-header">
          <h4>ShowHub</h4>
          <p>Login to ShowHub</p>
        </div>
        <form className="login-form">
          <div className="form-div">
            <p>
              <label className="form-label">Email</label>
              <input type={"email"} className="form-control" />
            </p>

            <p>
              <label className="form-label">Password</label>
              <input type={"password"} className="form-control" />
            </p>

            <p>
              <Link to="/homepage" className="forgotpswd">
                Forgot Password?
              </Link>
            </p>

            <p className="text-center">
              <input
                type={"button"}
                value="Login"
                className="btn btn-light button"
              />
            </p>
          </div>
        </form>

        <div className="signin">
          <div className="signin-div">
            <p>
              New to ShowHub?{" "}
              <Link to="/signup" className="forgotpswd">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Homefooter />
    </>
  );
}

export default Login;
