import React from "react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const FooterSection = () => {

return(
<footer className="footer-section">
<div className="footer-nav">
    <a href="#home">Home</a>
    <a href="#about-us">About Us</a>
    <a href="#what-we-do">What we do</a>
    <a href="#media-resources">Media resources</a>
    <a href="#online-giving">Online giving</a>
</div>

<div className="social-media">
        <a href="https://wa.me/233247447640" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/raisedinitiatives?igshid=YTQwZjQ0Nml0OA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.x.com/raisedinitiative?t=VlwTiilHy96dk_RPltc4yA&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/raisedinitiatives?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/company/raisedinitiatives/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
<p className="copyright">Designed by IydeeJames 2024</p>
{/*Add a link to the copyright*/}
</footer>
);
};

export default FooterSection;