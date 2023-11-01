import Admin from "./Admin/page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./Admin/userpage";
import AdPage from "./Admin/adpage";
import ContactPage from "./Admin/contactpage";
import ProfilePage from "./Admin/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
