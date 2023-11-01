import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../style/admin.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const ContactEdit = () => {
  const { empid } = useParams();
  const [toggle, setToggle] = useState(false);
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

  useEffect(() => {
    fetch("http://localhost:9999/contacts/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        usernamechange(resp.username);
        agechange(resp.age);
        emailchange(resp.email);
        passwordchange(resp.password);
        rolechange(resp.role);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");
  const [username, usernamechange] = useState("");
  const [age, agechange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");
  const [role, rolechange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, username, age, email, password, role };

    fetch("http://localhost:9999/contacts/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/admin/user");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
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
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <Link to="/admin/user" className="btn btn-danger">
              <i class="bi bi-arrow-left-square-fill"></i>
            </Link>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h1>User Edit</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={username}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => usernamechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {username.length == 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Age</label>
                      <input
                        required
                        value={age}
                        type="number"
                        name="age"
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => agechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={email}
                        type="email"
                        name="email"
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>password</label>
                      <input
                        value={password}
                        type="password"
                        name="password"
                        onChange={(e) => passwordchange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="roleSelect">Role</label>
                      <select
                        id="roleSelect"
                        value={role}
                        name="role"
                        onChange={(e) => rolechange(e.target.value)}
                        className="form-control"
                      >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="Manager">Manager</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactEdit;
