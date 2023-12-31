import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Home from "./users/page";
import { Route, Routes } from "react-router-dom";

function Admin() {
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
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
