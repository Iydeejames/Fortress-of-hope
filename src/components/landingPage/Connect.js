import React from 'react';
import backgroundImage from "../../assets/imgs/FI16.jpg";

const ConnectSection = () => {
  return (
    <section className="connect-section" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="connect-content">
        <h2>CONNECT, GROW & THRIVE</h2>
        <h3>All of you, TOGETHER, are the one body of Christ, and each one of you is a separate and necessary part of it. 1st Corinthians 12:27</h3>
        <div className="buttons-container">
          <a href="#adult" className="connect-button">Adults</a>
          <a href="#youth" className="connect-button">Youths</a>
          <a href="#men" className="connect-button">Men's Fellowship</a>
          <a href="#women" className="connect-button">Women's Fellowship</a>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;