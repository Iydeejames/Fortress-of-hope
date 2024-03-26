import React from 'react';
import { Link } from 'react-router-dom';

const FindBranch = () => {
  return (
    <div className="find-branch-container">
      <h2 className="find-branch-text">Find a Branch nearest to you</h2>
      <Link to="/branch-details" className="find-branch-button">
        Locations
      </Link>
    </div>
  );
};

export default FindBranch;