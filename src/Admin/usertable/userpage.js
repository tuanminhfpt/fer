import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import "../style/admin.css";
import { Col, Row } from "react-bootstrap";

function UserPage() {
  const [toggle, setToggle] = useState(false);
  const [empdata, empdatachange] = useState([]);
  const [sortedEmpData, setSortedEmpData] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:9999/users/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:9999/users")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
        setSortedEmpData([...resp]);
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

  const sortDataByUsername = () => {
    const sortedData = [...sortedEmpData];
    sortedData.sort((a, b) => {
      if (isAscending) {
        return a.username.localeCompare(b.username);
      } else {
        return b.username.localeCompare(a.username);
      }
    });
    setSortedEmpData(sortedData);
    setIsAscending(!isAscending);
  };

  // Use the searchQuery state to filter data based on the input
  useEffect(() => {
    const filteredData = empdata.filter((user) =>
      user.username.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setSortedEmpData(filteredData);
  }, [searchQuery]);

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
          <div className="card-title">
            <h1>User Listing</h1>
          </div>
          <Row>
            <Col>
              <div className="divbtn">
                <Link to="create" className="btn btn-success">
                  <i className="bi bi-person-add"></i> Add New
                </Link>
                <button
                  onClick={sortDataByUsername}
                  className="btn btn-secondary ml-2"
                >
                  Sort by Username
                </button>
              </div>
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Search by Username..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Col>
          </Row>
          <table className="table">
            <thead className="bg-dark text-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedEmpData &&
                sortedEmpData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.role}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        <i className="bi bi-trash"></i>
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        <i className="bi bi-ban"></i>
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
