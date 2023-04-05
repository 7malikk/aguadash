import React from 'react';
import { Outlet } from 'react-router';
import { Sidebar, DashboardNav } from '../components';

const Dashboard = () => {
  return (
    <main className="flex h-screen tablet:h-full overflow-hidden">
      <Sidebar />
      <section className="w-full h-screen max-h-screen overflow-y-scroll bg-lightAsh">
        <DashboardNav />
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
