import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Pages/Layout";
import HomePage from "./Pages/Home";
// import AboutUs from "./Pages/AboutUs";
// import Contact from "./Pages/Contact";
// import LoginPage from "./Pages/Login";
// import SignUpPage from "./Pages/SignUp";
import Blog from "./Pages/Blog";
import NotFoundPage from "./Pages/404 Page/NotFoundPage";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="blog" element={<Blog />} />
          {/* <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} /> */}
          {/* This is the catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )

}