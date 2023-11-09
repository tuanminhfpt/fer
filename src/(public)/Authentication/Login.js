import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const generateToken = () => {
    return new Date().getTime().toString(36);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const proceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:9999/users?email=" + email)
        .then((res) => res.json())
        .then((users) => {
          if (users.length === 0) {
            setMessage("Please enter a valid email");
          } else {
            const user = users[0];
            if (user.status === false) {
              setMessage("Your account is disabled. Please contact support.");
            } else if (user.password === password) {
              toast.success("Login successful");

              const token = generateToken();
              sessionStorage.setItem("token", token);
              sessionStorage.setItem("userId", user.id);
              sessionStorage.setItem("userRole", user.role);

              if (user.role === "admin") {
                navigate("/admin");
              } else {
                navigate("/home");
              }
            } else {
              setMessage("Wrong email or password!");
            }
          }
        })
        .catch((err) => {
          setMessage("Login failed due to: " + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (!email || !password) {
      result = false;
      setMessage("Please enter both email and password");
    }
    return result;
  };

  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center">Login</h2>

                  <form onSubmit={proceedLogin}>
                    <div className="form-outline mb-4">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="password-toggle"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {message && <p className="text-danger">{message}</p>}
                    <p className="text-muted mb-0">
                      <Link to="/resetpass" className="fw-bold text-body">
                        <u>Forgot Password?</u>
                      </Link>
                    </p>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mb-0">
                      Don't have an account?{" "}
                      <Link to="/register" className="fw-bold text-body">
                        <u>Register here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
