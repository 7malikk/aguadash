import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {
  Dashboard,
  Home,
  Login,
  SignUp,
  Merchant,
  MerchantLogin,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="nested" element={<SignUp />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
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
