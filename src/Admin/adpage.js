import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import AdTable from "./adtable/adpage";
import AdCreate from "./adtable/adcreate";
import AdEdit from "./adtable/adedit";

function AdPage() {
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
      <div className="col overflow-auto">
        <Routes>
          <Route path="/" element={<AdTable />}></Route>
          <Route path="/create" element={<AdCreate />}></Route>
          <Route path="/edit/:empid" element={<AdEdit />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default AdPage;
