import React from 'react';

import './styles.css';
import Header from '../Header'
import Upload from '../DisplayImage';


function Profile() {
  return (
      <>    
      <h1>Profile</h1>
      <div>
         < Upload />
      </div>
    </>
  );
}

export default Profile;
