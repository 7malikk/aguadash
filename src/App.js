import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Dashboard, Home, Login, SignUp } from './pages/index';
import { Overview, History, Settings, Order } from './components/index';

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
        <Route path="home" element={<Overview />} />
        <Route path="orders" exact element={<Order />} />
        <Route path="history" exact element={<History />} />
        <Route path="settings" exact element={<Settings />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
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
