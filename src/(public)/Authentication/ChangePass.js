import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ChangePass() {
  const { email } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [user, setUser] = useState(null);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:9999/users?email=${email}`)
      .then((response) => {
        if (response.data.length > 0) {
          setUser(response.data[0]);
        } else {
          setMessage("User not found");
        }
      })
      .catch((error) => {
        setMessage("An error occurred. Please try again later.");
      });
  }, [email]);

  const togglePasswordVisibility = (type) => {
    if (type === "new") {
      setShowNewPassword(!showNewPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPasswordError("");
    setMessage("");

    if (!newPassword || !confirmPassword) {
      setPasswordError("Password fields can't be blank.");
      return;
    }

    if (newPassword === confirmPassword) {
      if (user) {
        axios
          .put(`http://localhost:9999/users/${user.id}`, {
            ...user,
            password: newPassword,
          })
          .then((response) => {
            alert("Password changed successfully!");
            navigate("/");
          })
          .catch((error) => {
            setMessage("An error occurred. Please try again later.");
          });
      } else {
        setMessage("User not found");
      }
    } else {
      setMessage("Passwords do not match. Please try again.");
    }
  };

  const passwordInputType = showNewPassword ? "text" : "password";
  const confirmPasswordInputType = showConfirmPassword ? "text" : "password";

  const cardStyle = {
    borderRadius: "25px",
  };

  const headerStyle = {
    fontSize: "1.5rem",
  };

  const inputStyle = {
    marginBottom: "15px",
  };

  const errorStyle = {
    color: "red",
  };

  const backgroundStyle = {
    backgroundImage:
      "url('https://i.pinimg.com/736x/65/41/ee/6541ee6e3dcc4549d315432e146dc035.jpg')",
  };

  const containerStyle = {
    backgroundColor: "#eee",
  };

  return (
    <section className="vh-100" style={containerStyle}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={cardStyle}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Change Password: {email}
                    </p>
                    <form
                      className="mx-1 mx-md-4"
                      onSubmit={handleChangePassword}
                    >
                      <div className="form-group" style={inputStyle}>
                        <label>New Password:</label>
                        <input
                          type={passwordInputType}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="form-control"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility("new")}
                        >
                          {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      <div className="form-group" style={inputStyle}>
                        <label>Confirm Password:</label>
                        <input
                          type={confirmPasswordInputType}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="form-control"
                        />
                        <button
                          type="button"
                          onClick={() => togglePasswordVisibility("confirm")}
                        >
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      {passwordError && (
                        <div style={errorStyle}>{passwordError}</div>
                      )}
                      {message && (
                        <div className="alert alert-info">{message}</div>
                      )}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChangePass;
