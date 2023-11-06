import React from "react";
import "./style/styles.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="sec aboutus">
        <h2>About Us</h2>
        <p>
          Our blog site is an interesting and diverse online space where you can
          discover quality and diverse articles on a variety of topics. With the
          goal of sharing knowledge, experiences, and providing inspiration, our
          website celebrates the inclusion of diversity, from everyday life to
          science, art, travel, technology, and many other topics.
        </p>
        <ul className="sci">
          <li>
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="sec quicklinks">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/home">About</a>
          </li>
        </ul>
      </div>
      <div className="sec contactBx">
        <h2>Contact Info</h2>
        <ul className="info" style={{ paddingLeft: "0" }}>
          <li>
            <span>
              <i className="bi bi-geo-alt"></i>
            </span>
            <span>
              DH FPT <br /> Hoa Lac <br /> Viet Nam
            </span>
          </li>
          <li>
            <span>
              <i className="bi bi-envelope"></i>
            </span>
            <p>
              <a href="mailto:abc@gmail.com">abc@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
