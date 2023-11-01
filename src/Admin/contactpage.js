import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import ContactTable from "./contacttable/contactpage";
import ContactCreate from "./contacttable/contactcreate";
import ContactEdit from "./contacttable/contactedit";

function ContactPage() {
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
          <Route path="/" element={<ContactTable />}></Route>
          <Route path="/create" element={<ContactCreate />}></Route>
          <Route path="/edit/:empid" element={<ContactEdit />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default ContactPage;
