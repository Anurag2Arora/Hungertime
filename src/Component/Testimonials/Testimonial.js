import React from "react";
import "./testimonial.css";
export default function Testimonial() {
  return (
    <>
      <div className="blog">
        <h4 style={{ color: "yellow" }}>
          <i>Hungertime Restaurant Management</i>
        </h4>
        <h4 style={{ color: "yellow" }}>
          <i>Software Reviews</i>
        </h4>
        <p>Home/Page/Testimonial</p>
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
      <div className="footer blue">
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
