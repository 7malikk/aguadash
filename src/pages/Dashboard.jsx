import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import DashboardNav from '../components/DashboardNav';

const Dashboard = () => {
  return (
    <main className="flex h-screen tablet:h-full overflow-y-scroll relative">
      <Sidebar />
      <section className="w-full h-screen max-h-screen  bg-lightAsh">
        <DashboardNav />
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
