import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import "../style/admin.css";
import { Col, Row } from "react-bootstrap";

function ContactTable() {
  const [toggle, setToggle] = useState(false);
  const [empdata, empdatachange] = useState([]);
  const [sortedEmpData, setSortedEmpData] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState(0);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("detail/" + id);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:9999/contacts/" + id, {
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
    fetch("http://localhost:9999/contacts")
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

  useEffect(() => {
    const filteredData = empdata.filter((item) =>
      item.username.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setSortedEmpData(filteredData);
  }, [searchQuery]);

  async function handleUpdate(id) {
    if (window.confirm("Do you want to change the status of this contact?")) {
      let ContactList = [...empdata];
      let newContact = ContactList.filter((c) => c.id === id)[0];
      newContact.status = !newContact.status;
      await fetch(`http://localhost:9999/contacts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });
      setStatus(!status);
    }
  }

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
            <h1>Contact Listing</h1>
          </div>
          <Row>
            <Col>
              <div className="divbtn">
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
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Date Send</td>
                <td>Content</td>
                <th>Status</th>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {sortedEmpData &&
                sortedEmpData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.date_send}</td>
                    <td>{item.content}</td>
                    <td>
                      {item.status === true ? (
                        <span style={{ color: "blue" }}>Show</span>
                      ) : (
                        <span style={{ color: "red" }}>Hide</span>
                      )}
                    </td>
                    <td>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        <i className="bi bi-trash"></i>
                      </a>
                      <a
                        onClick={() => handleUpdate(item.id)}
                        className="btn btn-primary"
                      >
                        <i className="bi bi-eye"></i>
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

export default ContactTable;
