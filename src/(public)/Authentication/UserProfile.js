import React, { useEffect, useState } from "react";
import "./style/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9999/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUserData(data))
      .catch((error) => console.error(`Fetch error: ${error}`));
  }, [id]);

  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
              <div className="row g-0">
                <div
                  className="col-md-4 gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="img-fluid my-5"
                    style={{ width: "80px" }}
                  />
                  <h5>{userData?.username}</h5>
                  <p>{userData?.role}</p>
                  <i className="bi bi-pencil-square fa-lg mb-5"></i>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{userData?.email}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">{userData?.phone}</p>
                      </div>
                    </div>
                    <h6>Projects</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Recent</h6>
                        <p className="text-muted">{userData?.recentProject}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Most Viewed</h6>
                        <p className="text-muted">
                          {userData?.mostViewedProject}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start">
                      <a href="#!">
                        <i
                          className="bi bi-facebook fa-lg me-3"
                          style={{ color: "orange" }}
                        ></i>
                      </a>
                      <a href="#!">
                        <i
                          className="bi bi-twitter fa-lg me-3"
                          style={{ color: "orange" }}
                        ></i>
                      </a>
                      <a href="#!">
                        <i
                          className="bi bi-instagram fa-lg"
                          style={{ color: "orange" }}
                        ></i>
                      </a>
                    </div>
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

export default UserProfile;
