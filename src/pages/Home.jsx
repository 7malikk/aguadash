import React from 'react';
import { Link } from 'react-router-dom';
import MerchantLogin from './MerchantLogin';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">SignUp</Link>
      <MerchantLogin/>
    </div>
    
  );
};

export default Home;
