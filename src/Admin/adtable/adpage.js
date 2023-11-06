import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import "../style/admin.css";
import { Col, Row } from "react-bootstrap";

function AdTable() {
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

  const LoadEdit = (id) => {
    navigate("edit/" + id);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:9999/ads/" + id, {
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
    fetch("http://localhost:9999/ads")
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

  const sortDataByTitle = () => {
    const sortedData = [...sortedEmpData];
    sortedData.sort((a, b) => {
      if (isAscending) {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setSortedEmpData(sortedData);
    setIsAscending(!isAscending);
  };

  useEffect(() => {
    const filteredData = empdata.filter((item) =>
      item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setSortedEmpData(filteredData);
  }, [searchQuery]);

  async function handleUpdate(id) {
    if (window.confirm("Do you want to change the status of this ad?")) {
      let AdList = [...empdata];
      let newAd = AdList.filter((a) => a.id === id)[0];
      newAd.status = !newAd.status;
      await fetch(`http://localhost:9999/ads/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAd),
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
            <h1>Ad Listing</h1>
          </div>
          <Row>
            <Col>
              <div className="divbtn">
                <Link to="create" className="btn btn-success">
                  <i className="bi bi-person-add"></i> Add New
                </Link>
                <button
                  onClick={sortDataByTitle}
                  className="btn btn-secondary ml-2"
                >
                  Sort by Title
                </button>
              </div>
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Search by Title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Col>
          </Row>
          <table className="table">
            <thead className="bg-dark text-white">
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Content</th>
                <th>Label</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedEmpData &&
                sortedEmpData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <img
                        src={item.image}
                        alt="Ad Image"
                        width="100"
                        height="100"
                      />
                    </td>
                    <td>{item.title}</td>
                    <td style={{ whiteSpace: "normal" }}>{item.content}</td>
                    <td>{item.label}</td>
                    <td>{item.category}</td>
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

export default AdTable;
