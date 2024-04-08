import React from 'react';
import backgroundImage from "../assets/imgs/FI22.JPG";

const InviteSection = () => {

  return (
    <section className="invite-section" style={{backgroundImage: `url(${backgroundImage})`}}>
    <div className="invite-container">
        <h2> Jesus the Same Yesterday, Today and Forever!</h2>
    </div>
    </section>
  )
}

export default InviteSection;