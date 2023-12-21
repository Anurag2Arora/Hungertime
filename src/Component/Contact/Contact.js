import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="blog">
        <h4 style={{ color: "yellow" }}>
          <i>Contact Hungertime For Any Query</i>
        </h4>
        <p>Home/Page/Contact Us</p>
      </div>
      <div className="reviewc">
        <h2 style={{ color: "black" }}>
          <i>Contact Us</i>
        </h2>
        <img src="divider.png" alt="" />
        <p
          style={{ color: "black", padding: "0px 50px" }}
          className="container">
          Hungertime team resides in punjab.We provide additional services fro
          free even after selling software to our clients.Hungertime software
          offers the most convenience in todaay's time.Contact us today to make
          the journey of taking your restaurant to new heigts easier
        </p>
        <div style={{ marginTop: "50px" }} className="boxgroup">
          <div className="box">
            <h4 style={{ color: "red" }}>
              <i>Address</i>
            </h4>
            <p>Room No 215,KC Tower,</p>
            <p>Nawanshahr,Punjab 144514</p>
          </div>
          <div className="box">
            <h4 style={{ color: "red" }}>
              <i>Email</i>
            </h4>
            <p>info@hungertime.in</p>
          </div>
          <div className="box">
            <h4 style={{ color: "red" }}>
              <i>Phone No.</i>
            </h4>
            <p>+91-123456789</p>
          </div>
        </div>
      </div>
      <div className="map-group container">
        <div className="map">
          <iframe
            title="1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5712699449714!2d76.68067197471396!3d30.702336674598993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef7b007c5339%3A0x876db08b59626cb7!2sEirmon%20Solutions!5e0!3m2!1sen!2sin!4v1702984384994!5m2!1sen!2sin"
            width="490"
            height="380"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="form blue">
          <h1 style={{ textAlign: "center", color: "white" }}>Get A Quote</h1>
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
      <div className="footerc blue">
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
      <div className="space"></div>
    </>
  );
}
