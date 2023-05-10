import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import DashboardNav from '../components/DashboardNav';

const Dashboard = () => {
  return (
    <main className="flex h-screen tablet:max-h-full overflow-y-clip  relative">
      <Sidebar />
      <section className="w-full h-screen max-h-full overflow-y-scroll bg-lightAsh">
        <DashboardNav />
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
