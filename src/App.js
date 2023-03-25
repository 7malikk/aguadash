import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Dashboard,
  Home,
  Login,
  SignUp,
  Merchant,
  MerchantLogin,
} from './pages';

function App() {
  const[email, setEmail]=useState("james")
const handlePropChange=(e)=>{
  setEmail(e.target.value)
} 
  return (
    <Routes>
      <Route path="/" exact element={<Home email={email}/>} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="nested" element={<SignUp />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp email={email} onChange={handlePropChange}/>} />
      <Route path="/merchant" element={<Merchant />} />
      <Route path="/merchantlogin" element={<MerchantLogin />} />
      <Route
        path="*"
        element={
          <div>
            {' '}
            <h1>404 page not found </h1>
            <Link to="/">back home</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
