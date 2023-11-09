import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPass() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const checkEmailExistence = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9999/users?email=${email}`
      );

      if (response.data.length > 0) {
        navigate(`/changepass/${email}`);
      } else {
        setErrorMessage("Email does not exist in the database.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while checking email existence.");
    }
  };

  const cardStyle = {
    width: "300px",
    margin: "0 auto",
    marginTop: "100px",
  };

  const headerStyle = {
    backgroundColor: "orange",
    color: "white",
    fontSize: "1.5rem",
  };

  const inputStyle = {
    marginBottom: "15px",
  };

  const buttonStyle = {
    backgroundColor: "orange",
    color: "white",
  };

  return (
    <div className="card text-center" style={cardStyle}>
      <div className="card-header h5" style={headerStyle}>
        Password Reset
      </div>
      <div className="card-body px-5">
        <p className="card-text py-2">
          Enter your email address, and we'll send you an email with
          instructions to reset your password.
        </p>
        <div className="form-outline" style={inputStyle}>
          <input
            type="email"
            id="typeEmail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="typeEmail">
            Email input
          </label>
        </div>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <button
          onClick={checkEmailExistence}
          className="btn"
          style={buttonStyle}
        >
          Reset password
        </button>
        <div className="d-flex justify-content-between mt-4">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
