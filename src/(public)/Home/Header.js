import React, { useState } from "react";
import { Navbar, Form, FormControl, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

export default function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    onSearch(newValue);
  };

  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#000" }}
    >
      <Container>
        <Navbar.Brand href="/home">
          <img
            src="https://logodix.com/logo/34967.png"
            height="50"
            alt="MDB Logo"
            loading="lazy"
            style={{ marginTop: "-1px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarButtonsExample" className="me-2" />
        <Navbar.Collapse id="navbarButtonsExample">
          <Form className="me-auto" inline>
            <FormControl
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
              className="mr-sm-2"
            />
          </Form>
          <div className="d-flex align-items-center">
            <Link to={"/profile"} className="me-3" style={{ color: "orange" }}>
              <BsPersonFill size={32} /> {/* Use Bootstrap icon */}
            </Link>
            <Link
              to={"/"}
              variant="link"
              className="px-3 me-2"
              style={{ color: "orange", fontWeight: "bold" }}
            >
              Sign out
            </Link>
            <Link
              to={"/admin"}
              variant="primary"
              className="btn me-3"
              style={{
                backgroundColor: "orange",
                boxShadow: "none",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
