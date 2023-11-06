import Admin from "./Admin/page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./Admin/userpage";
import AdPage from "./Admin/adpage";
import ContactPage from "./Admin/contactpage";
import ProfilePage from "./Admin/profile";
import Home from "./(public)/Home/Home";
import Detail from "./(public)/Home/Detail";
import Login from "./(public)/Authentication/Login";
import Register from "./(public)/Authentication/Register";
import UserProfile from "./(public)/Authentication/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id/details" element={<Detail />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/admin/user/*" element={<UserPage />} />
        <Route path="/admin/ad/*" element={<AdPage />}></Route>
        <Route path="/admin/contact/*" element={<ContactPage />}></Route>
        <Route path="/admin/profile/*" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
