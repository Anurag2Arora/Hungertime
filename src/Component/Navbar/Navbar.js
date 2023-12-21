import React from "react";
import "./navbar.css";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Feature from "../Feature/Feature";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import Testimonial from "../Testimonials/Testimonial";
export default function Navbar() {
  return (
    <>
      <nav className="navbar container navbar-expand-lg bg-body-tertiary">
        <div className=" contanier container-fluid blue">
          <NavLink className="navbar-brand" to="">
            <div className="image">
              <img src="logo.png" alt="" />
            </div>
          </NavLink>
          <div className="hii">
            <button
              style={{ backgroundColor: "white" }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={{ color: "White" }}
                  className="nav-link active"
                  aria-current="page"
                  to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: "White" }}
                  className="nav-link"
                  to={"/about"}>
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={"/feature"}
                  style={{ color: "White" }}>
                  FEATURES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={"/contact"}
                  style={{ color: "White" }}>
                  CONTACT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={"/testimonial"}
                  style={{ color: "White" }}>
                  TESTIMONIALS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={"/blog"}
                  style={{ color: "White" }}>
                  BLOG
                </NavLink>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/feature" element={<Feature />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/testimonial" element={<Testimonial />} />

        <Route exact path="/blog" element={<Blogs />} />
      </Routes>
    </>
  );
}
