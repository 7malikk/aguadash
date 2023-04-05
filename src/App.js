import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Merchant, MerchantLogin } from './pages';
import {
  AdminHistory,
  AdminOrders,
  AdminSettings,
  AdminOverview,
} from './components';
import AdminProctectedRoute from './helpers/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MerchantLogin />} />
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
