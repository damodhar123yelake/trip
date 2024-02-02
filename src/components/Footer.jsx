import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TripTrek</h1>
          <p>choose your favourite destination.</p>
        </div>
        <div>
          <Link>
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-youtube-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a>Changelog</a>
          <a>Status</a>
          <a>License</a>
          <a>All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a>Github</a>
          <a>Issues</a>
          <a>Project</a>
          <a>Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a>Support</a>
          <a>Troubleshoot</a>
          <a>Contact-us</a>
          <a>All Versions</a>
        </div>
        <div>
          <h4>Others</h4>
          <a>Terms and conditions</a>
          <a>Privacy Policy</a>
          <a>cookies</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
