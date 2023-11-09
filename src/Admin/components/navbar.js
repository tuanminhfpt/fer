import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.js";

function Navbar({ Toggle }) {
  const handleLogout = () => {
    // Clear the session or authentication state
    localStorage.removeItem("token"); // Assuming you store a token for authentication
    // You may need to clear other session-related data
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userRole");

    // Redirect to the login page or perform any other necessary actions
    window.location.href = "/";
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{ background: "white" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-none d-md-block text-black" href="/admin">
          Dashboard
        </a>
        <a className="navbar-brand d-md-none d-block" onClick={Toggle}>
          <i className="bi bi-justify"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2 rounded border">
              <a
                className="nav-link text-black"
                aria-current="page"
                href="/profile"
              >
                Account
              </a>
            </li>
            <li className="nav-item border rounded">
              <button
                className="nav-link text-black"
                onClick={handleLogout}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
