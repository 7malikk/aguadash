import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import  Order from "./components/order/Order"
import {
  Dashboard,
  Home,
  Login,
  SignUp,
  Merchant,
  MerchantLogin,
} from './pages';
import ProtectedRoute from './helpers/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }>
        <Route path="orders" element={<Order/>} />
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
++            <Link to="/">back home</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
