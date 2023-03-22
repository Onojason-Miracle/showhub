import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Homefooter from "./Homefooter";

function Signup() {
  return (
    <>
      <Navbar />
      <div>
        <div className="login-header">
          <h4>ShowHub</h4>
          <p>Login to ShowHub</p>
        </div>
        <form className="signup-form">
          <div className="signup-form-div">
            <p>
              <label className="form-label">Username</label>
              <input type={"text"} className="form-control" />
            </p>

            <p>
              <label className="form-label">Number</label>
              <input type={"number"} className="form-control" />
            </p>

            <p>
              <label className="form-label">Email</label>
              <input type={"email"} className="form-control" />
            </p>

            <p>
              <label className="form-label">Password</label>
              <input type={"password"} className="form-control" />
            </p>

            <p>
              <label className="form-label">Confirm Password</label>
              <input type={"password"} className="form-control" />
            </p>

            <p className="text-center">
              <input
                type={"button"}
                value="Login"
                className="btn btn-light button mt-md-4"
              />
            </p>
          </div>
        </form>

        <div className="signin">
          <div className="signin-div">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="forgotpswd">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Homefooter />
    </>
  );
}

export default Signup;
