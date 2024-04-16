import React from 'react';
import { Link } from 'react-router-dom';

const FindBranch = () => {
  return (
    <div className='find-branch-container'>
      <h2>Find a Branch nearest to you</h2>
      <Link to='/branch-details'>
        <button>Locations</button>
      </Link>
    </div>
  );
};

export default FindBranch;
