import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/style.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState(1);
  return (
    <div className="sidebar d-flex justify-content-between flex-column text-white py-3 ps-3 pe-5 vh-100 shadow">
      <div>
        <a href="/admin" className="p-3 text-decoration-none text-white">
          <i class="bi bi-bootstrap me-3 fs-4"></i>
          <span className="fs-3">Blog Web</span>
        </a>
        <hr className="text-white mt-2" />
        <ul className="nav nav-pills flex-column mt-3">
          <li
            className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={() => setActive(1)}
          >
            <Link to="/admin" className="p-1 text-decoration-none text-white">
              <i className="bi bi-speedometer2 me-3 fs-4"></i>
              <span className="fs-4">Dashboard</span>
            </Link>
          </li>
          <li
            className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={() => setActive(2)}
          >
            <Link
              to="/admin/user"
              className="p-1 text-decoration-none text-white"
            >
              <i className="bi bi-people me-3 fs-4"></i>
              <span className="fs-4">Manage Users</span>
            </Link>
          </li>
          <li
            className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={() => setActive(3)}
          >
            <Link
              to="/admin/ad"
              className="p-1 text-decoration-none text-white"
            >
              <i className="bi bi-badge-ad me-3 fs-4"></i>
              <span className="fs-4">Manage Ads</span>
            </Link>
          </li>
          <li
            className={active === 4 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={() => setActive(4)}
          >
            <Link
              to="/admin/contact"
              className="p-1 text-decoration-none text-white"
            >
              <i className="bi bi-question me-3 fs-4"></i>
              <span className="fs-4">Contact List</span>
            </Link>
          </li>
          <li
            className={active === 5 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={() => setActive(5)}
          >
            <Link to="/" className="p-1 text-decoration-none text-white">
              <i className="bi bi-house fs-4 me-4"></i>
              <span className="fs-4">Home</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-white" />
        <div className="nav-item p-2">
          <a
            href="/admin/profile"
            className="p-1 text-decoration-none text-white"
          >
            <i className="bi bi-person-circle me-3 fs-4"></i>
            <span className="fs-4">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
