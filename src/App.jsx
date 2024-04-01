import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import Layout from "./components/Layout.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Discover from "./pages/discover/Discover.jsx";
import Reading from "./pages/reading/Reading.jsx";
import Wanttoread from "./pages/wanttoread/Wanttoread.jsx";
import Completed from "./pages/completed/Completed.jsx";
import Profile from "./pages/profile/Profile.jsx";
import FAQs from "./pages/faqs/FAQs.jsx";
import Contactus from "./pages/contactus/Contactus.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/wanttoread" element={<Wanttoread />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/myprofile" element={<Profile />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contactus" element={<Contactus />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
