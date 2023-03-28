import React from 'react';
import { Outlet } from 'react-router';
import { useAppContext } from '../context/AppContext';

const Dashboard = () => {
  const { handleLogout, userData } = useAppContext();

  return (
    <div>
      Welcome, {userData?.name} to your dashboard
      <br />
      <button onClick={handleLogout}> Logout</button>
      <Outlet />
    </div>
  );
};

export default Dashboard;
