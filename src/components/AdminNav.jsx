import React from 'react';

const AdminNav = () => {
  return (
    <nav className="h-28 border-b bg-white flex flex-col tablet:flex-row justify-evenly tablet:justify-between items-start tablet:items-center px-11 shadow-[0_8px_15px_-15px_rgba(0,0,0,0.3)]">
      <div className="">
        <h1 className="font-semibold text-2xl tablet:text-4xl flex justify-center items-center">
          Hello, Admin
        </h1>
        <h4 className="text-base tablet:text-xl text-darkAsh font-semibold">
          Here's your dashboard
        </h4>
      </div>
    </nav>
  );
};

export default AdminNav;
