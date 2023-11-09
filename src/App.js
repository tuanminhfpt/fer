import Admin from "./Admin/page";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./Admin/userpage";
import AdPage from "./Admin/adpage";
import ContactPage from "./Admin/contactpage";
import ProfilePage from "./Admin/profile";
import Home from "./(public)/Home/Home";
import Detail from "./(public)/Home/Detail";
import Login from "./(public)/Authentication/Login";
import Register from "./(public)/Authentication/Register";
import UserProfile from "./(public)/Authentication/UserProfile";
import ResetPass from "./(public)/Authentication/ResetPass";
import ChangePass from "./(public)/Authentication/ChangePass";

const isAuthenticated = () => {
  const token = sessionStorage.getItem("token");
  return !!token;
};

const isAdmin = () => {
  const userRole = sessionStorage.getItem("userRole");
  return userRole === "admin";
};

const AdminRoute = ({ element }) => {
  return isAuthenticated() && isAdmin() ? element : <Navigate to="/" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/changepass/:email" element={<ChangePass />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id/details" element={<Detail />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin/*" element={<AdminRoute element={<Admin />} />} />
        <Route path="/admin/user/*" element={<UserPage />} />
        <Route path="/admin/ad/*" element={<AdPage />}></Route>
        <Route path="/admin/contact/*" element={<ContactPage />}></Route>
        <Route path="/admin/profile/*" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
