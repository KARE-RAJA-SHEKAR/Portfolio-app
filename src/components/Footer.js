import React from "react";
import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin ,FaFacebook} from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p>© 2024 RajaShekar's Portfolio. All rights reserved.</p>
        <div className="social-icons">
          <a
            href="https://github.com/KARE-RAJA-SHEKAR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/raja-sekhar-kare-68277a256/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://instagram.com/raj_sekhar_33"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.facebook.com/rajasekhar.kare.9?sfnsn=wiwspmo&mibextid=RUbZ1f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
