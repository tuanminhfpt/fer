import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/admin.css";

function UserProfile() {
  const { empid } = useParams();
  const [toggle, setToggle] = useState(false);
  const [empdata, empdatachange] = useState({});
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("edit/" + id);
  };

  useEffect(() => {
    fetch("http://localhost:8000/users/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function Toggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div className="d-flex">
      <div className={toggle ? "d-none" : "w-auto position-fixed"}>
        <Sidebar />
      </div>
      <div className={toggle ? "d-none" : "invisible"}>
        <Sidebar />
      </div>
      <div className="col overflow-auto">
        <Navbar Toggle={Toggle} />
        <div className="container">
          <h1>User Profile</h1>
          <div className="row">
            <div className="col-md-4 Content-left text-center">
              <img
                className="img-fluid rounded-circle img-thumbnail"
                alt="User Profile Image"
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAEYvVG8OxGwIpmAAYf9knMEvJEv2aeHtfg1ONkacHRt2S_DBsx087zCVPJD9r5dl3vI2N-RnG154JEYguZUcNIpiJmjvOiWeFonox7FbBIdK77SC8lEOWWOjpA--RiQnrzhKukBL69beJeUm-2BRKnwItukEf2LMwGRQzl84n7fpDzRHfvkruGDiOtw/s564/312139402_1261086881378060_4448040992540541196_n.webp"
              />
              {empdata && (
                <div className="text-center">
                  <h2>
                    <b style={{ color: "red" }}>Username {empdata.username}</b>
                  </h2>
                  <h5>Role {empdata.role}</h5>
                </div>
              )}
            </div>
            <div className="col-md-8 right-content">
              <div className="card-body">
                <h2 className="card-title">Information</h2>
                {empdata && (
                  <form>
                    <div className="form-group">
                      <label htmlFor="id">Your ID:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="id"
                        value={empdata.id}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="username">Your Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={empdata.username}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="age">Your Age:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="age"
                        value={empdata.age}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="role">Your Role:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="role"
                        value={empdata.role}
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Your Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={empdata.email}
                        disabled
                      />
                    </div>

                    <a
                      className="btn btn-danger"
                      onClick={() => {
                        LoadEdit(empdata.id);
                      }}
                    >
                      Edit Profile
                    </a>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
