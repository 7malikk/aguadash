import React from 'react';
import { Link } from 'react-router-dom';
import MerchantLogin from './MerchantLogin';

const Home = ({email}) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">SignUp</Link>

      <h2>this is my email: {email}</h2>
      {/* <MerchantLogin/> */}
    </div>
  );
};

export default Home;
