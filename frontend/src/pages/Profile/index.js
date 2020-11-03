import React,{useState,useEffect} from 'react';

import './styles.css';
import Header from '../Header'
import Upload from '../DisplayImage';
import jwt_decode from 'jwt-decode';


function Profile() {

  const [user, setUser] = useState();

  function getDecodedToken(){
    const tokenLocal = localStorage.getItem('token')
    if(tokenLocal){
      setUser(jwt_decode(tokenLocal))
    } else{
      setUser(null)
    }
  }

  useEffect(() =>{
    getDecodedToken()
  }, []);
  return (
      <>    
      <Header />
      <h1>Profile</h1>
      <div>
         < Upload />
      </div>
      <input type="text"
        className= "nome"
        value={user.name}
        disabled="true" />
      <input type="text"
       className="email"
       value={user.email}
       disabled="true"/>    
    </>
  );
}

export default Profile;
