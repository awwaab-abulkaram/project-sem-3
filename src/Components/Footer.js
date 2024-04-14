import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>PS-4, Keshav Memorial Engineering College</li>
            <li>Peerzadiguda, Hyderabad</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: nyaay@sahaayak.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>
          This website is for informational purposes only. It does not constitute legal advice or establish an attorney-client relationship.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
