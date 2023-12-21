import React from "react";
import "./blogs.css";
export default function Blogs() {
  return (
    <>
      <div className="blog">
        <h4 style={{ color: "yellow" }}>
          <i>Blog</i>
        </h4>
        <p>Home/Page/Blog</p>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col" style={{ marginTop: "20px" }}>
            <div
              className="card"
              style={{
                width: "22rem",
              }}>
              <img src="blog1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  How RMS Can Accelerate Your Food Business To New Heights ?
                </h5>
                <p className="card-text">
                  Success in the dynamic and fast-paced world of the food
                  industry depends on efficient management. Every day, managers
                  and owners of restaurants juggle a variety of activities, such
                  as staff scheduling, customer service, inventory management,
                  and order processing.
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "22rem" }}>
              <img src="blog2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  How RMS Can Accelerate Your Food Business To New Heights ?
                </h5>
                <p className="card-text">
                  Success in the dynamic and fast-paced world of the food
                  industry depends on efficient management. Every day, managers
                  and owners of restaurants juggle a variety of activities, such
                  as staff scheduling, customer service, inventory management,
                  and order processing.
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "22rem" }}>
              <img src="blog1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  How RMS Can Accelerate Your Food Business To New Heights ?
                </h5>
                <p className="card-text">
                  Success in the dynamic and fast-paced world of the food
                  industry depends on efficient management. Every day, managers
                  and owners of restaurants juggle a variety of activities, such
                  as staff scheduling, customer service, inventory management,
                  and order processing.
                </p>
              </div>
            </div>
          </div>
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
      {/* <div className="space blue"></div> */}
    </>
  );
}
