import React from 'react';
import { Outlet } from 'react-router';
import { AdminNav, AdminSidebar } from '../components/admin';

const Merchant = () => {
  return (
    <main className="flex h-screen tablet:h-full overflow-hidden">
      <AdminSidebar />
      <section className="w-full h-screen max-h-screen overflow-y-scroll bg-lightAsh">
        <AdminNav />
        <Outlet />
      </section>
    </main>
  );
};

export default Merchant;
