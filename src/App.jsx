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
import Book from "./pages/book/Book.jsx";
import Addbook from "./pages/book/Addbook.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import User from "./pages/user/User.jsx";
import Reserveabook from "./pages/book/Reserveabook.jsx";

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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/addbook" element={<Addbook />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/reserveabook" element={<Reserveabook />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
