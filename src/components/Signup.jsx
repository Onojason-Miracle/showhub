import React, { useState } from "react";
import Homenav from "./Homenav";
import { Link } from "react-router-dom";
import Homefooter from "./Homefooter";

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="pswd">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        className="form-control"
        required
        minLength={6}
      />
      <button className="pswd-btn" onClick={handleTogglePassword} type="button">
        {showPassword ? (
          <i className="fa-solid fa-eye signup-icon"></i>
        ) : (
          <i
            className="fa-sharp fa-solid fa-eye-slash signup-icon"
            login-icon
          ></i>
        )}
      </button>
    </div>
  );
};

function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert("Registration successful");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <>
      <Homenav />
      <div>
        <div className="login-header">
          <h4>ShowHub</h4>
          <p>Create an account with Showhub</p>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-form-div">
            <p>
              <label className="form-label">Username</label>
              <input type={"text"} className="form-control" required />
            </p>

            <p>
              <label className="form-label">Number</label>
              <input type={"number"} className="form-control" required />
            </p>

            <p>
              <label className="form-label">Email</label>
              <input type={"email"} className="form-control" required />
            </p>

            <p>
              <label className="form-label">Password</label>
              <PasswordInput value={password} onChange={handlePasswordChange} />
            </p>

            <p>
              <label className="form-label">Confirm Password</label>

              <PasswordInput
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </p>

            <p className="text-center">
              <button className="btn btn-light button mt-4">
                Create Account
              </button>
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
