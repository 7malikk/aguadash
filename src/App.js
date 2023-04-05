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
import { Overview, History, Settings, Order } from './components';
import {
  AdminHistory,
  AdminOrders,
  AdminSettings,
  AdminOverview,
} from './components/admin';
import ProtectedRoute, { AdminProctectedRoute } from './helpers/ProtectedRoute';

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
        <Route path="home" element={<Overview />} />
        <Route path="orders" exact element={<Order />} />
        <Route path="history" exact element={<History />} />
        <Route path="settings" exact element={<Settings />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Admin Start */}
      <Route path="/merchantlogin" element={<MerchantLogin />} />
      <Route
        path="/merchant"
        element={
          <AdminProctectedRoute>
            <Merchant />
          </AdminProctectedRoute>
        }>
        <Route path="home" element={<AdminOverview />} />
        <Route path="orders" exact element={<AdminOrders />} />
        <Route path="history" exact element={<AdminHistory />} />
        <Route path="settings" exact element={<AdminSettings />} />
      </Route>
      {/* Admin End */}
      <Route
        path="*"
        element={
          <div>
            <h1>404 page not found </h1>
            <Link to="/">back home</Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
