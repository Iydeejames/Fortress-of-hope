import React from "react";
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {


    return (
        <div id="contact">
        <div className="contact-bar">
            <h1>Contact Us</h1>
            <div className="section-heading-line"></div>
            <div className="contact-wrapper">
              <div className="contact-details">
                <div className="phone">
                  <FaMobileAlt />
                  <h3>Phone</h3>
                  <p>+233 247 447 640</p>
                  <p>+234 903 167 4415</p>
                </div>
                <div className="address">
                < FaMapMarkerAlt />
                  <h3>Address</h3>
                  <p>Ghana</p>
                  <p>Nigeria</p>
                  <p>Mali</p>
                  <p>Liberia</p>
                </div>
                <div className="email">
                  <FaEnvelope />
                  <h3>Email</h3>
                  <p>info.raisedinitiatives@gmail.com 
                  </p>
                </div>
              </div>
    </div>
    </div>
    </div>
}

export default ContactSection;