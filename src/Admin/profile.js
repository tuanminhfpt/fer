import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./users/profile";

function ProfilePage() {
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
          <Route path="/" element={<UserProfile />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default ProfilePage;
