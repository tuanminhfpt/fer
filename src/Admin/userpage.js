import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import UserTable from "./usertable/userpage";
import UserCreate from "./usertable/usercreate";
import UserEdit from "./usertable/useredit";

function UserPage() {
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
          <Route path="/" element={<UserTable />}></Route>
          <Route path="/create" element={<UserCreate />}></Route>
          <Route path="/edit/:empid" element={<UserEdit />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default UserPage;
