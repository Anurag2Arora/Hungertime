import React from "react";
import "./about.css";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="blog-about">
        <h4 style={{ color: "yellow" }}>
          <i>Hungertime Softawre features</i>
        </h4>
        <p style={{ color: "white" }}>Home/Page/About</p>
      </div>
      <div className="description">
        <div className="picture">
          <div className="home1">
            <img src="home1.jpg" alt="" />
          </div>
          <div className="home2">
            <img src="home2.jpg" alt="" />
          </div>
          <div className="home3">
            <img src="home3.jpg" alt="" />
          </div>
          <div className="home4">
            <img src="home4.jpg" alt="" />
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////// */}
        <div className="home-about ">
          <h3 style={{ color: "red" }}>
            <i>About us</i>
          </h3>
          <h1>Welcome to </h1>
          <h1>Hungertime</h1>
          <p style={{ textAlign: "justify" }}>
            Thirteen years of IT experience goes into creating Hungertime
            Software. Restaurant operators benefit from our online software's
            dedication to offering simple features for adding and modifying
            products. The application's intuitive user interface, instantaneous
            updates, and flexibility enable enterprises to remain agile in
            reacting to market fluctuations, upholding consumer contentment, and
            eventually prospering in the always-changing food sector.
          </p>
          <div className="des">
            <div className="hii"></div>
            <div className="stick">
              |<h1>15 </h1>
            </div>
            <div className="experience">
              <p style={{ marginTop: "30px", marginLeft: "20px" }}>Years of</p>
              <h6 style={{ marginLeft: "20px", lineHeight: "0px" }}>
                Experience
              </h6>
            </div>
            <div style={{ marginLeft: "5px" }} className="stick">
              |<h1>50 </h1>
            </div>
            <div className="experience">
              <p style={{ marginTop: "30px", marginLeft: "20px" }}>Popular</p>
              <h6 style={{ marginLeft: "20px" }}>MASTER CHEFS</h6>
            </div>
          </div>
          <button
            style={{
              marginTop: "20px",
              backgroundColor: "red",
              border: "0",
              width: "120px",
              height: "40px",
              borderRadius: "8px",
            }}>
            <NavLink
              style={{ color: "White" }}
              className="nav-link"
              to={"/about"}>
              Read More
            </NavLink>
          </button>
        </div>
      </div>
      <div className="map-group-home container">
        <div className="map">
          <img src="home5.jpg" alt="" />
        </div>
        <div className="form blue">
          <h4 style={{ marginLeft: "50px", color: "red" }}>
            <i>Reservation </i>
          </h4>

          <div className="input">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="input">
            <input type="date" placeholder="dd-mm-yyyy" />
            <input type="number" placeholder="Phone" />
          </div>
          <div className="message">
            <input type="text" />
          </div>
          <button
            style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
            className="submitbtn">
            Send Now
          </button>
        </div>
      </div>
      <div className="review">
        <h2 style={{ color: "red" }}>
          <i>Our Happy Customers</i>
        </h2>
        <h1 style={{ color: "black" }}>Trusted By 100+ Restaurant</h1>
        <img src="divider.png" alt="" />
      </div>
      <div className="customer">
        <img src="customer1.png" alt="" />
        <img src="customer2.jpeg" alt="" />
        <img src="customer3.png" alt="" />
      </div>
      <div className="review">
        <h2 style={{ color: "red" }}>
          <i>Reviews from Client's</i>
        </h2>
        <h1 style={{ color: "black" }}> Our Client Say!!!</h1>
        <img src="divider.png" alt="" />
      </div>
      <div className="client_main container">
        <div className="client blue">
          <div className="pic">
            <img src="bhusan.jpg" alt="" />
          </div>
          <div className="para">
            <p>
              "Fantastic Software Our order administration has been simplified
              with hunger Time, making it simple to monitor sales and control
              inventries. we can make wise selection thanks to the analytical
              analytics that are supplied.The smooth integration with outside
              provider improves our overall client"
            </p>
          </div>
          <h4 style={{ paddingLeft: "50px" }}>Bhusan</h4>
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="client blue">
          <div className="pic">
            <img src="tapish.jpg" alt="" />
          </div>
          <div className="para">
            <p>
              "Fantastic Software Our order administration has been simplified
              with hunger Time, making it simple to monitor sales and control
              inventries. we can make wise selection thanks to the analytical
              analytics that are supplied.The smooth integration with outside
              provider improves our overall client"
            </p>
          </div>
          <h4 style={{ paddingLeft: "50px" }}>Tapish</h4>
        </div>
      </div>
      <div className="footer-feature blue" style={{ marginTop: "20px" }}>
        <div className="container">
          <div className="hello">
            <div className="hungertime">
              <div className="footimage">
                <img src="logo.png" alt="" />
              </div>
              <p className="text">
                "A thirst for excellence? A feast of order accuracy, dynamic
                menu control, and real-time mastery is provided by Hunger Time
                Software. Improve your restaurant operations since timing is
                crucial!
              </p>
              <div className="icon">
                <div className="fb">
                  <i
                    style={{ color: "white" }}
                    class="fa-brands fa-facebook"></i>
                </div>
                <div className="fb">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="fb">
                  <i class="fa-brands fa-youtube"></i>
                </div>
                <div className="fb">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
            <div className="company">
              <h4 style={{ marginTop: "30px" }}>
                <i style={{ color: "red" }}>Company</i>
              </h4>
              <ul style={{ color: "white" }}>
                <li> About Us</li>
                <li>Contact Us</li>
                <li>Reservation</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
              </ul>
            </div>
            <div className="contact" style={{ color: "white" }}>
              <h4 style={{ marginTop: "30px" }}>
                <i style={{ color: "red" }}>Contact</i>
              </h4>
              Room No.215, KC Tower, Nawanshahr,Punjab 144514
              <p>+91-123456789</p>
              <p>info@hungertime.in</p>
            </div>
            <div className="opening" style={{ color: "white" }}>
              <h4 style={{ marginTop: "30px" }}>
                <i style={{ color: "red" }}>Opening</i>
              </h4>
              Monday-Saturday
              <p>09AM-09PM</p>
              Sunday
              <p>10AM-08PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="last blue ">
        <div className="container">
          <div className="copy container">
            <div className="emi">
              <i class="fa-regular fa-copyright"></i> 2023-2024 Eirmon Solution.
            </div>
            <div className="by"> Home | Help | FAQs</div>
          </div>
        </div>
      </div>
    </>
  );
}
